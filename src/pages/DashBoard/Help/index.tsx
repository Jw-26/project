/*
 * @Author: Tang jun hao 980792492@qq.com
 * @Date: 2023-11-07 17:10:16
 * @LastEditors: Tang jun hao 980792492@qq.com
 * @LastEditTime: 2023-11-15 22:44:03
 * @FilePath: /project/src/pages/DashBoard/Notice/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { Col, Row } from 'antd';
import './index.less';

const Help: React.FC = () => {
  const data = [
    {
      title: '产品概览',
      color: 'orange',
    },
    {
      title: '使用指南',
      color: 'gold',
    },
    {
      title: '投入流程',
      color: 'lime',
    },
    {
      title: '接口文档',
      color: 'green',
    },
  ];

  return (
    <div className="help-wrap">
      <div className="title">
        <h4>{'帮助文档'}</h4>
      </div>
      <div className="linkButton">
        <Row gutter={[16, 16]}>
          {data.map((item, index) => (
            <Col key={index} span={12}>
              {item.title}
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Help;
