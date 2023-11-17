/*
 * @Author: Tang jun hao 980792492@qq.com
 * @Date: 2023-11-07 17:10:16
 * @LastEditors: Tang jun hao 980792492@qq.com
 * @LastEditTime: 2023-11-07 17:38:01
 * @FilePath: /project/src/pages/DashBoard/Notice/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { List, Tag } from 'antd';
import React from 'react';
import './index.less';

const Notice: React.FC = () => {
  const data = [
    {
      title: 'Ant Design Title 1',
      color: 'orange',
    },
    {
      title: 'Ant Design Title 2',
      color: 'gold',
    },
    {
      title: 'Ant Design Title 3',
      color: 'lime',
    },
    {
      title: 'Ant Design Title 4',
      color: 'green',
    },
    {
      title: 'Ant Design Title 4',
      color: 'blue',
    },
  ];

  return (
    <div className="noticeWrap">
      <div className="title">
        <h4>{'公告'}</h4>
        <a>{'查看更多'}</a>
      </div>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Tag color={item.color}>magenta</Tag>}
              // title={<a href="https://ant.design">{item.title}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default Notice;
