import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import PortalLayout from './Layout/PortalLayout';
export default function ResourceLoading({ color }: { color?: string }) {
    return (
        <PortalLayout>
            <div
                style={{
                    position: 'fixed',
                    width: '100%',
                    height: '100%',
                    left: '0',
                    top: '0',
                    backgroundColor: 'rgba(0,0,0, .4)',
                    borderTopLeftRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Spin
                    indicator={
                        <LoadingOutlined
                            style={{
                                fontSize: 24,
                                color,
                            }}
                        />
                    }
                />
            </div>
        </PortalLayout>
    );
}
