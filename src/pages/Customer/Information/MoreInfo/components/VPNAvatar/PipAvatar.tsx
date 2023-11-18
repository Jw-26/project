import { UserOutlined } from '@ant-design/icons';
import { Avatar, ConfigProvider, Tag } from 'antd';
import React from 'react';

interface AvatarProps {
  isHighlight: boolean;
  job: string;
  name: string;
}
const PipAvatar: React.FC<AvatarProps> = (props) => {
  const { isHighlight, job, name } = props;
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* <Avatar size={64} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /> */}
      <Avatar size={60} icon={<UserOutlined />} />
      <ConfigProvider
        theme={{
          components: {
            Tag: {
              defaultBg: '#4467D9',
              defaultColor: '#faad14',
              colorBorder: '#faad14',
              /* here is your component tokens */
            },
          },
        }}
      >
        <Tag style={{ margin: 'auto', marginTop: '-25%', width: '60px', textAlign: 'center' }}>
          {job}
        </Tag>
      </ConfigProvider>
      <ConfigProvider
        theme={{
          components: {
            Tag: {
              defaultBg: isHighlight ? '#A2EF4D' : '#fff',
              defaultColor: 'blue',
              colorBorder: 'blue',
              /* here is your component tokens */
            },
          },
        }}
      >
        <Tag style={{ margin: 'auto', marginTop: '3px', width: '60px', textAlign: 'center' }}>
          {name}
        </Tag>
      </ConfigProvider>
    </div>
  );
};

export default PipAvatar;
