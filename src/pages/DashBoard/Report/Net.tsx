/*
 * @Author: Tang jun hao 980792492@qq.com
 * @Date: 2023-11-07 16:11:44
 * @LastEditors: Tang jun hao 980792492@qq.com
 * @LastEditTime: 2023-11-14 22:39:54
 * @FilePath: /project/src/pages/DashBoard/Report/Net.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React from 'react';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: '排名',
    dataIndex: 'name',
    key: 'name',
    width: 100,
    render: (text) => <a>{text}</a>,
  },
  {
    title: '软件名称',
    dataIndex: 'age',
    width: 150,
    key: 'age',
  },
  {
    title: '点击量',
    dataIndex: 'address',
    key: 'address',
    width: 100,
  },
  {
    title: '日涨量',
    key: 'tags',
    dataIndex: 'tags',
    width: 100,
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const Net: React.FC = () => <Table columns={columns} dataSource={data} />;

export default Net;
