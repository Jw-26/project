import { CheckCircleFilled } from '@ant-design/icons';
import { ConfigProvider, Timeline } from 'antd';
import React from 'react';

const TimeLine: React.FC = () => {
  return (
    <div
      style={{
        height: '50px',
      }}
    >
      <ConfigProvider
        theme={{
          components: {
            Timeline: {
              // itemPaddingBottom:0
            },
          },
        }}
      >
        <Timeline
          items={[
            {
              dot: <CheckCircleFilled className="timeline-clock-icon" />,
              color: '#B4E4BF',
              children: (
                <>
                  <p style={{ marginBottom: '0px' }}>待签约</p>
                  <p>2023/11/7 12:00</p>
                </>
              ),
            },
            {
              dot: <CheckCircleFilled className="timeline-clock-icon" />,
              color: '#B4E4BF',
              children: (
                <>
                  <p style={{ marginBottom: '0px' }}>已签约</p>
                  <p>2023/11/7 12:00</p>
                </>
              ),
            },
            {
              dot: <CheckCircleFilled className="timeline-clock-icon" />,
              color: '#B4E4BF',
              children: (
                <>
                  <p style={{ marginBottom: '0px' }}>已签约</p>
                  <p>2023/11/7 12:00</p>
                </>
              ),
            },
            {
              dot: <CheckCircleFilled className="timeline-clock-icon" />,
              color: '#27B148',
              children: (
                <>
                  <p style={{ marginBottom: '0px' }}>合同</p>
                  <p>2023/11/7 12:00</p>
                </>
              ),
            },
          ]}
        />
      </ConfigProvider>
    </div>
  );
};

export default TimeLine;
