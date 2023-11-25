import { ConfigProvider, Segmented, theme } from 'antd';
import React from 'react';

const TabsHeader: React.FC<{ list: Array<string> }> = ({ list }) => {
  const { useToken } = theme;

  const { token } = useToken();
  return (
    <ConfigProvider
      theme={{
        components: {
          Segmented: {
            itemActiveBg: '#F2F3F8',
            itemSelectedBg: '#F2F3F8',
            itemSelectedColor: '#7385FD',
            itemHoverColor: '#7385FD',
            borderRadiusSM: 16,
          },
        },
      }}
    >
      <div
        style={{
          backgroundColor: token.colorBgContainer,
          display: 'flex',
          height: '60px',
          alignItems: 'center',
          marginBottom: '20px',
          paddingLeft: '20px',
        }}
      >
        <Segmented
          options={list}
          style={{
            backgroundColor: token.colorBgContainer,
          }}
        />
      </div>
    </ConfigProvider>
  );
};
export default TabsHeader;
