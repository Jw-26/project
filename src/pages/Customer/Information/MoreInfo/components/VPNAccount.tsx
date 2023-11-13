import React from 'react';
import PipAvatar from './VPNAvatar/PipAvatar';

const VPNAccount: React.FC = () => {
  const info = [
    {
      name: '张三三',
      job: '业务员',
      isHighlight: true,
    },
    {
      name: '张三三2',
      job: '业务员',
      isHighlight: false,
    },
    {
      name: '张三三3',
      job: '业务员',
      isHighlight: false,
    },
    {
      name: '张三三4',
      job: '财务',
      isHighlight: true,
    },
    {
      name: '张三三5',
      job: '预算员',
      isHighlight: true,
    },
    {
      name: '张三三6',
      job: '设计师',
      isHighlight: true,
    },
  ];
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {info.map((item, index) => {
        return (
          <PipAvatar
            key={index}
            name={item.name}
            job={item.job}
            isHighlight={item.isHighlight}
          ></PipAvatar>
        );
      })}
    </div>
  );
};

export default VPNAccount;
