import AllRecord from '@/pages/Customer/Information/MoreInfo/components/AllRecords/AllRecord';
import TextAreaButton from '@/pages/Customer/Information/MoreInfo/components/TextAreaButton/TextAreaButton';
import React from 'react';

const CustomerOrder: React.FC = () => {
  const recode = [
    {
      title: '跟进人1',
      answer: '这里是回复内容',
      dateTime: '2023-11-08 12:00',
    },
    {
      title: '跟进人2',
      answer: '这里是回复内容',
      dateTime: '2023-11-08 12:00',
    },
    {
      title: '跟进人3',
      answer: '这里是回复内容',
      dateTime: '2023-11-08 12:00',
      // children: {

      // },
    },
    {
      title: '跟进人4',
      answer: '这里是回复内容',
      dateTime: '2023-11-08 12:00',
    },
    {
      title: '跟进人5',
      quoteName: '跟进人4',
      quoteContent: '这个客户合同改签的，当前在重新聊设计',
      answer: '现在要去修改下定金这个节点，要不然图纸传不上去',
      dateTime: '2023-11-08 12:00',
    },
  ];
  return (
    <div>
      <TextAreaButton></TextAreaButton>
      <AllRecord recode={recode}></AllRecord>
    </div>
  );
};

export default CustomerOrder;
