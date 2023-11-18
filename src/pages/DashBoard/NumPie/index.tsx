/*
 * @Author: Tang jun hao 980792492@qq.com
 * @Date: 2023-11-07 14:05:40
 * @LastEditors: Tang jun hao 980792492@qq.com
 * @LastEditTime: 2023-11-07 16:57:41
 * @FilePath: /project/src/pages/DashBoard/NumChart/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { Pie } from '@ant-design/charts';
import React from 'react';
import './index.less';

const NumPie: React.FC = () => {
  const data = [
    {
      type: '数量一',
      value: 56,
    },
    {
      type: '数量二',
      value: 44,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
  };
  return (
    <div className="num-pie-wrap">
      <Pie {...config} />
    </div>
  );
};

export default NumPie;
