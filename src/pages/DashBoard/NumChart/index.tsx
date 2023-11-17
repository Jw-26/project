/*
 * @Author: Tang jun hao 980792492@qq.com
 * @Date: 2023-11-07 14:05:40
 * @LastEditors: Tang jun hao 980792492@qq.com
 * @LastEditTime: 2023-11-07 15:18:46
 * @FilePath: /project/src/pages/DashBoard/NumChart/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { Line } from '@ant-design/charts';
import React from 'react';
import './index.less';

const NumChart: React.FC = () => {
  const data = [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 },
  ];
  const config = {
    data,
    height: 400,
    xField: 'year',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
  };
  return (
    <div className="num-chart-wrap">
      <div className="title">
        <h4>{'数据分析'}</h4>
        <a>{'查看更多'}</a>
      </div>
      <Line {...config} />
    </div>
  );
};

export default NumChart;
