import CustomerOrder from '@/pages/Customer/Information/MoreInfo/CustomerOrder/CustomerOrder';
import type { TabsProps } from 'antd';
import { Tabs } from 'antd';
import React from 'react';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: '客户工单',
    children: <CustomerOrder />,
  },
  {
    key: '2',
    label: '操作记录',
    children: <div>222</div>,
  },
];

const TabsTop: React.FC = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;

export default TabsTop;
