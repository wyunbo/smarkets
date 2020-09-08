import React, { SFC } from 'react';
import { Layout } from 'antd';
import PortalSider from './PortalSider';
import PortalHeader from './PortalHeader';
const { Content } = Layout;

interface OwnProps {
  contentLayoutClassName?: string,
  contentClassName?: string;
}

const PortalLayout: SFC<OwnProps> = ({
  children,
  contentLayoutClassName = 'portal-content',
  contentClassName = 'main-content',
}) => {
  return (
    <Layout className="portal-layout">
      <PortalSider></PortalSider>
      <Layout className={contentLayoutClassName}>
        <PortalHeader></PortalHeader>
        <Content className={contentClassName}>{children}</Content>
      </Layout>
    </Layout>
  )
}

export default PortalLayout;