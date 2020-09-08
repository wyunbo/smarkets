import React, { SFC } from 'react';
import { Layout, Row, Col } from 'antd';
const { Header } = Layout;

const PortalHeader: SFC = () => {
  return (
    <Header className="portal-header">
      <Row>
        <Col style={{ textAlign: "right" }} span={24}>
          <div className="portal-header-user-data">
            <div className="portal-header-user-info">
              <span>Hello</span>
            </div>
          </div>
        </Col>
      </Row>
    </Header>
  )
}

export default PortalHeader;