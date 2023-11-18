/*
 * @Author: Tang jun hao 980792492@qq.com
 * @Date: 2023-11-07 14:05:40
 * @LastEditors: Tang jun hao 980792492@qq.com
 * @LastEditTime: 2023-11-07 16:44:30
 * @FilePath: /project/src/pages/DashBoard/NumChart/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { Pie } from '@ant-design/charts';
import React from 'react';
import './index.less';

const Pies: React.FC = () => {
  const data = [
    {
      type: 'Andrios',
      value: 27,
    },
    {
      type: 'Ios',
      value: 25,
    },
    {
      type: 'Windows',
      value: 18,
    },
    {
      type: 'Linux',
      value: 15,
    },
    {
      type: 'Mac',
      value: 15,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    legend: false,
    label: {
      type: 'spider',
      labelHeight: 28,
      content: '{name}\n{percentage}',
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
  };
  return <Pie {...config} />;
};

export default Pies;
