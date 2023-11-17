/*
 * @Author: Tang jun hao 980792492@qq.com
 * @Date: 2023-11-07 15:20:57
 * @LastEditors: Tang jun hao 980792492@qq.com
 * @LastEditTime: 2023-11-15 18:04:34
 * @FilePath: /project/src/pages/DashBoard/Report/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { Tabs } from 'antd';
import React from 'react';
import Net from './Net';

import './index.less';

const Report: React.FC = () => {
  const onChange = () => {};

  const tabs = [
    {
      label: '网页',
      key: 'net',
      children: <Net />,
    },
    {
      label: '游戏',
      key: 'play',
      children: <Net />,
    },
    {
      label: '测试',
      key: 'test',
      children: <Net />,
    },
    {
      label: '其他',
      key: 'other',
      children: <Net />,
    },
  ];

  return (
    <div className="report-wrap">
      <div className="title">
        <h4>{'使用软件报告'}</h4>
        <a>{'查看更多'}</a>
      </div>
      <Tabs onChange={onChange} type="card" items={tabs} />
    </div>
  );
};

export default Report;
