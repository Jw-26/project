import { Button, Table } from 'antd';
import React from 'react';

type item = {
  idc: number;
  regional: string;
  status: string;
  creatDate: string;
  type: string;
  IP: string;
};
interface OverlayPackageProps {
  list: Array<item>;
}

const columns = [
  {
    title: 'IDC ID',
    dataIndex: 'idc',
    key: 'idc',
  },
  {
    title: '套餐区域',
    dataIndex: 'regional',
    key: 'regional',
  },
  {
    title: '当前状态',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: '创建时间',
    dataIndex: 'creatDate',
    key: 'creatDate',
  },
  {
    title: '类型',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'IP',
    dataIndex: 'IP',
    key: 'IP',
  },
  {
    title: '操作',
    key: 'action',
    render: (_: any, record: item) => (
      <Button type="link" onClick={() => console.log(record.idc)}>
        查看
      </Button>
    ),
  },
];
const OverlayPackage: React.FC<OverlayPackageProps> = (props) => {
  return (
    <div style={{ backgroundColor: '#fff', margin: '15px', padding: '10px' }}>
      <span style={{ fontWeight: 'bold', fontSize: '18px' }}>叠加套餐</span>
      <Table columns={columns} dataSource={props.list} pagination={false}></Table>
    </div>
  );
};

export default OverlayPackage;
