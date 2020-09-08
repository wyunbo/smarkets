import React, { useState, useEffect } from 'react';
import { Row, Col, Table, Select } from 'antd';
import PortalLayout from '../../components/Layout/PortalLayout';
import { EventType, EventState, EventColumn } from '../../const';
import {
  getEventList,
} from '../../api/event';

const EventList =() => {
  const [ eventList, setEventList ] = useState({
    events: [],
    pagination: ""
  })
  const { events, pagination } = eventList;
  const [ eventState, setEventState ] = useState('');
  const [ eventType, setEventType ] = useState('');
  const [ eventLoading, setEventLoading ] = useState(false);
  
  function getEventListHandle() {
    setEventLoading(true);
    getEventList({
      state: eventState,
      type: eventType,
    }).then((res={}) => {
      const { events, pagination } = res;
      setEventList({events, pagination});
    }).finally(() => {
      setEventLoading(false);
    })
  }

  useEffect(() => {
    getEventListHandle();
  }, [eventState, eventType])

  const EventSelect = (data: string[], options: {onSelect?: Function, placeholder?: string}) => {
    const { onSelect, placeholder } = options;
    return <Select
      style={{width: "300px"}}
      placeholder={placeholder}
      onSelect={val => onSelect && onSelect(val)}
    >
      {data.map((el, ind) => {
        return (
          <Select.Option key={el} value={el}>
            {el}
          </Select.Option>
        );
      })}
    </Select>
  }

  return (
    <PortalLayout>
      <>
        <div className="main-header">
          <Row>
            <Col>
              <span className="main-header-title">title</span>
            </Col>
            <Col style={{textAlign: 'right'}}>
              
            </Col>
          </Row>
        </div>
        <div className="main-container">
          <div>
            {EventSelect(EventType, {
              onSelect: (val: string) => setEventType(val),
              placeholder: 'Please choose type'
            })}
            {EventSelect(EventState, {
              onSelect: (val: string) => setEventState(val),
              placeholder: 'Please choose state'
            })}
          </div>
          <div>
            <Table
              columns={EventColumn}
              dataSource={events}
              loading={eventLoading}
              rowKey="id"
              scroll={{x: 'auto'}}
            >

            </Table>
          </div>
        </div>
      </>
    </PortalLayout>
  )
}

export default EventList;