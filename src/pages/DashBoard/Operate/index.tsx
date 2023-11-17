/*
 * @Author: Tang jun hao 980792492@qq.com
 * @Date: 2023-11-07 15:20:57
 * @LastEditors: Tang jun hao 980792492@qq.com
 * @LastEditTime: 2023-11-07 16:30:59
 * @FilePath: /project/src/pages/DashBoard/Report/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { Tabs } from 'antd';
import React from 'react';
import Pies from './Pie';

import './index.less';

const Report: React.FC = () => {
  const onChange = () => {};

  const tabs = [
    {
      label: '终端操作系统',
      key: 'net',
      children: <Pies />,
    },
    {
      label: '终端活跃率',
      key: 'play',
      children: <Pies />,
    },
  ];

  return (
    <div className="report-wrap">
      <Tabs onChange={onChange} type="card" items={tabs} />
    </div>
  );
};

export default Report;
