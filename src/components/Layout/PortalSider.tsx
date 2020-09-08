import React, { SFC } from 'react';
import { Layout, Menu } from 'antd';
import { DribbbleOutlined } from '@ant-design/icons';
const fullLogo = 'https://smarkets.com/static/img/smarkets-logo.svg';
const { Sider } = Layout;
const { SubMenu } = Menu;

interface OwnProps {
  contentLayoutClassName?: string,
  contentClassName?: string;
}



const PortalSider: SFC<OwnProps> = () => {
  return (
    <Sider className="portal-sider" width="256">
      <div className="portal-sider-header">
        <img src={fullLogo} height="32" alt="smarkets" />
      </div>
      <div className="portal-sider-main">
        <Menu
          theme="dark"
          defaultOpenKeys={['Event']}
          selectedKeys={["events"]}
          mode="inline"
        >
          <SubMenu key="Event" icon={<DribbbleOutlined />} title="Events">
            <Menu.Item key="events">
              Event list
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    </Sider>
  )
}

export default PortalSider;