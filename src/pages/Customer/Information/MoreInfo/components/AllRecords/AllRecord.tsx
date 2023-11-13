import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button, List, theme } from 'antd';
import React from 'react';

interface recodeProp {
  recode: Array<any>;
}

interface TitleProps {
  title: string;
  dateTime: string;
}

interface RevertProps {
  answer: string;
  isAlreadyRevert: boolean;
  quoteName: string;
  quoteContent: string;
}

const Title: React.FC<TitleProps> = (props) => {
  const { useToken } = theme;
  const { token } = useToken();
  const { title, dateTime } = props;
  return (
    <div>
      {title}
      <span
        style={{
          fontSize: '12px',
          marginLeft: '10px',
          color: token.colorTextTertiary,
        }}
      >
        {dateTime}
      </span>
      <div style={{ float: 'right' }}>
        <Button type="link">回复</Button>
      </div>
    </div>
  );
};

const Revert: React.FC<RevertProps> = (props) => {
  const { useToken } = theme;
  const { token } = useToken();
  const { answer, isAlreadyRevert, quoteName, quoteContent } = props;
  return isAlreadyRevert ? (
    <div>
      <div
        style={{
          fontSize: '12px',
          margin: '15px 0px 10px -40px',
          color: token.colorText,
        }}
      >
        回复 <span style={{ color: token.colorPrimary }}>{quoteName}</span>: {answer}
      </div>
      <div
        style={{
          borderLeftWidth: '3px',
          borderLeftColor: token.colorPrimary,
          borderLeftStyle: 'solid',
          height: '45px',
          marginLeft: '-40px',
          fontSize: '12px',
          padding: '5px',
        }}
      >
        {quoteName}: {quoteContent}
      </div>
    </div>
  ) : (
    <div
      style={{
        fontSize: '12px',
      }}
    >
      {answer}
    </div>
  );
};

const AllRecord: React.FC<recodeProp> = (props) => {
  const { useToken } = theme;
  const { token } = useToken();
  const { recode } = props;
  const length = recode.length;

  return (
    <div>
      <div style={{ margin: '20px 0px' }}>
        全部记录
        <span style={{ color: token.colorPrimary }}> {length}</span>
      </div>
      <List
        style={{
          fontSize: '12px',
        }}
        itemLayout="horizontal"
        dataSource={recode}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar size={28} icon={<UserOutlined />} />}
              title={<Title title={item.title} dateTime={item.dateTime}></Title>}
              description={
                <Revert
                  answer={item.answer}
                  isAlreadyRevert={item.quoteName || false}
                  quoteContent={item.quoteContent}
                  quoteName={item.quoteName}
                ></Revert>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default AllRecord;
