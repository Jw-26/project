import { PlusOutlined } from '@ant-design/icons';
// import { ProCard } from '@ant-design/pro-components';
import { Button, theme } from 'antd';
import React from 'react';

const InfoCardAdd: React.FC = () => {
  const { useToken } = theme;
  const { token } = useToken();
  return (
    <div
      style={{
        backgroundColor: token.colorBgContainer,
        boxShadow: token.boxShadow,
        borderRadius: '8px',
        fontSize: '14px',
        color: token.colorTextSecondary,
        lineHeight: '50px',
        padding: '16px 19px',
        width: '350px',
        // flex: 1,
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '4px',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <Button type="link" block style={{ height: '100%' }}>
          <div>
            <PlusOutlined style={{ fontSize: '24px', color: '#86909C' }} />
          </div>
          <p style={{ color: '#86909C' }}>点击创建客户</p>
        </Button>
      </div>
    </div>
  );
  //   return (
  //     <div>
  //       <ProCard
  //         layout="center"
  //         style={{
  //           backgroundColor: token.colorBgContainer,
  //           boxShadow: token.boxShadow,
  //           borderRadius: '8px',
  //           fontSize: '14px',
  //           color: token.colorTextSecondary,
  //           lineHeight: '50px',
  //           padding: '16px 19px',
  //           width: '350px',
  //           // flex: 1,
  //         }}
  //       >
  //         <div>123</div>
  //         <div>456</div>
  //       </ProCard>
  //     </div>
  //   );
};
export default InfoCardAdd;
