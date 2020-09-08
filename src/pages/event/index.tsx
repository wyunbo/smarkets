import React, { useState, useEffect } from 'react';
import { Row, Col, Table, Select, Button } from 'antd';
import PortalLayout from '@/components/Layout/PortalLayout';
import { EventType, EventState, EventColumn } from '@/const';
import { getUrlParam } from '@/utils';
import moment from "moment";
import {
  getEventList,
} from '@/api/event';

const { Column } = Table;
interface EventList{
  events: any[],
  pagination: {
    next_page: string
  }
}
interface EventRecord{
  title: string,
  dataIndex: string,
  key: string,
  width: number,
}

const EventList =() => {
  const [ eventList, setEventList ] = useState<EventList>({
    events: [],
    pagination: {
      next_page: ""
    }
  })
  const { events, pagination } = eventList;
  const [ eventState, setEventState ] = useState('');
  const [ eventType, setEventType ] = useState('');
  const [ eventLoading, setEventLoading ] = useState(false);
  const limit = 20;
  
  function getEventListHandle(params?: any) {
    setEventLoading(true);
    getEventList({
      state: eventState,
      type: eventType,
      ...params
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

  const EventSelect = (data: string[], options: {onSelect?: Function, placeholder?: string, value?: string}) => {
    const { onSelect, placeholder, value=undefined } = options;
    return <Select
      style={{width: "300px"}}
      placeholder={placeholder}
      onSelect={val => onSelect && onSelect(val)}
      value={value === '' ? undefined : value}
      disabled={eventLoading}
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
              <span className="main-header-title">Event list</span>
            </Col>
            <Col style={{textAlign: 'right'}}>
              
            </Col>
          </Row>
        </div>
        <div className="main-container">
          <div className="main-container-action">
            {EventSelect(EventType, {
              onSelect: (val: string) => setEventType(val),
              placeholder: 'Please choose type',
              value: eventType
            })}
            {EventSelect(EventState, {
              onSelect: (val: string) => setEventState(val),
              placeholder: 'Please choose state',
              value: eventState
            })}
            <a onClick={() => {
              setEventState('');
              setEventType('');
            }}>Clear all</a>
            <Button type="primary" disabled={eventLoading} onClick={() => {
              getEventListHandle({pagination_last_id: getUrlParam(pagination.next_page, 'pagination_last_id')});
            }}>Next</Button>
          </div>
          <div className="main-container-table-wrapper">
            <Table
              dataSource={events}
              loading={eventLoading}
              pagination={{
                pageSize: limit,
                hideOnSinglePage: true,
                // total,
                // current: pageStart+1,
                // showQuickJumper: true,
              }}
              rowKey="id"
              scroll={{x: 'auto'}}
            >
              {EventColumn.map(el => <Column
                title={el.title}
                key={el.key}
                dataIndex={el.dataIndex}
                width={el.width}
                render={(text, record: EventRecord) => {
                  if(el.key === 'created' || el.key === 'modified' || el.key === 'start_datetime'){
                  return <span>{moment(new Date(text)).format(
                      "MM/DD/YYYY HH:mm:ss"
                    )}</span>
                  }else{
                    return <span>{text}{record.key}</span>
                  }
                }}
              />)}
              
            </Table>
          </div>
        </div>
      </>
    </PortalLayout>
  )
}

export default EventList;