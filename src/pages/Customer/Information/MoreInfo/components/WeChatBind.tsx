import { UserOutlined } from '@ant-design/icons';
import { Avatar, List, Space } from 'antd';
import React from 'react';

interface WeChatBindProps {
  management: string;
  phone: string;
  mail: string;
  sex: string;
  age: string;
}

type MyParPops = {
  children: React.ReactNode;
};
const MyPar: React.FC<MyParPops> = (props) => {
  return <p style={{ marginBottom: 3 }}>{props.children}</p>;
};
const WeChatBind: React.FC<WeChatBindProps> = (props) => {
  const { management, phone, mail, sex, age } = props;
  return (
    <div style={{ fontSize: '14px' }}>
      <List
        dataSource={[{ name: '111' }]}
        renderItem={(item) => (
          <List.Item key={item.name}>
            <List.Item.Meta
              avatar={
                <Avatar size={80} icon={<UserOutlined />} style={{ backgroundColor: '#27B148' }} />
              }
              title={'微信未绑定'}
              description={<a href="https://ant.design">微信绑定</a>}
            />
          </List.Item>
        )}
      />
      <Space style={{ display: 'flex', marginTop: '30px' }}>
        <Space direction="vertical" align="end" style={{ display: 'flex' }}>
          <MyPar>管理员：</MyPar>
          <MyPar>联系电话：</MyPar>
          <MyPar>邮箱地址：</MyPar>
          <MyPar>性别：</MyPar>
          <MyPar>年龄：</MyPar>
        </Space>
        <Space direction="vertical" style={{ display: 'flex', fontWeight: 'bold' }}>
          <MyPar>{management}</MyPar>
          <MyPar>{phone}</MyPar>
          <MyPar>{mail}</MyPar>
          <MyPar>{sex}</MyPar>
          <MyPar>{age}</MyPar>
        </Space>
      </Space>
    </div>
  );
};

export default WeChatBind;
