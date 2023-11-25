import OverlayPackage from '@/pages/Customer/Information/MoreInfo/components/OverlayPackage';
import { EditOutlined } from '@ant-design/icons';
import type { DescriptionsProps } from 'antd';
import { Button, ConfigProvider, Descriptions, Tag } from 'antd';
import React from 'react';

interface PackageDetailsProps {
  basic: string;
  speed: string;
  allUsed: string;
  packageWay: string;
  amountUsed: string;
  lineDelay: string;
}

const packageList = [
  {
    idc: 232,
    regional: '美国固定IP10M',
    status: '已过期',
    creatDate: '2023-11-11 11:00',
    type: '包月',
    IP: '202.36.15.22',
  },
  {
    idc: 254,
    regional: '日本固定IP10M',
    status: '已过期',
    creatDate: '2023-11-11 11:00',
    type: '包月',
    IP: '202.36.15.22',
  },
  {
    idc: 256,
    regional: '泰国固定IP10M',
    status: '已过期',
    creatDate: '2023-11-11 11:00',
    type: '包月',
    IP: '202.36.15.22',
  },
];
const PackageDetails: React.FC<PackageDetailsProps> = (props) => {
  const { basic, speed, allUsed, packageWay, amountUsed, lineDelay } = props;
  const items: DescriptionsProps['items'] = [
    {
      key: '1',
      label: '基础套餐',
      children: basic,
    },
    {
      key: '2',
      label: '网速',
      children: speed,
    },
    {
      key: '3',
      label: '总使用量',
      children: allUsed,
    },
    {
      key: '4',
      label: '套餐方式',
      children: packageWay,
    },
    {
      key: '5',
      label: '本月用量',
      children: amountUsed,
    },
    {
      key: '6',
      label: '线路延时',
      children: lineDelay,
    },
  ];
  return (
    <div style={{ marginTop: '40px' }}>
      <span style={{ fontWeight: 'bold', fontSize: '18px' }}>套餐明细</span>
      <Tag color="green" style={{ marginLeft: '5px' }}>
        VIP3
      </Tag>
      <EditOutlined style={{ marginLeft: '15px', marginRight: '-10px' }} />
      <Button type="link">编辑</Button>
      <div style={{ marginTop: '10px', paddingBottom: '5px', backgroundColor: '#F7F8FA' }}>
        <ConfigProvider
          theme={{
            components: {
              Descriptions: {
                // itemPaddingBottom: 7
              },
            },
          }}
        >
          <Descriptions
            items={items}
            column={2}
            style={{ padding: '20px 20px 0px 15px', borderBottom: '2px solid #DEDFE0' }}
          />
        </ConfigProvider>
        {/* <Divider></Divider> */}
        <OverlayPackage list={packageList}></OverlayPackage>
      </div>
    </div>
  );
};

export default PackageDetails;
