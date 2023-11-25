import PackageDetails from '@/pages/Customer/Information/MoreInfo/components/PackageDetails';
import { ShopOutlined } from '@ant-design/icons';
import type { DescriptionsProps } from 'antd';
import { Col, ConfigProvider, Descriptions, Row, theme, Typography } from 'antd';
import React from 'react';

const { Title } = Typography;

interface CustDatailsProp {
  company: string;
  type: string;
  name: string;
  companyName: string;
  track: string;
  creatDt: string;
  phone: string;
  helmCode: string;
  agent: string;
}
const CustInformation: React.FC<CustDatailsProp> = ({
  company,
  type,
  name,
  companyName,
  track,
  creatDt,
  phone,
  helmCode,
  agent,
}) => {
  const { useToken } = theme;
  const { token } = useToken();
  const items: DescriptionsProps['items'] = [
    {
      key: '1',
      label: '账号类型',
      children: type,
      labelStyle: {
        // width: '100px',
      },
    },
    {
      key: '2',
      label: '创建时间',
      children: creatDt,
    },
    {
      key: '3',
      label: 'Live',
      children: name,
      labelStyle: {
        // width: '100px',
      },
    },
    {
      key: '4',
      label: 'Remark',
      children: companyName,
    },
    {
      key: '5',
      label: '法人认证号码',
      children: phone,
    },
    {
      key: '6',
      label: '法人认证号码',
      children: track,
    },
    {
      key: '7',
      label: '机制机构代码',
      children: helmCode,
    },
    {
      key: '8',
      label: '代理商',
      children: agent,
    },
  ];
  const packageItem = [
    {
      basic: '速链全球A套餐',
      speed: '10M',
      allUsed: '12.5G',
      packageWay: '包年不限量',
      amountUsed: '2.3G',
      lineDelay: '78ms',
    },
  ];

  return (
    <div style={{ marginLeft: '20px' }}>
      <Row>
        <Col>
          <ShopOutlined style={{ fontSize: '20px', color: '#27B148' }} />
        </Col>
        <Col style={{ marginLeft: '10px' }}>
          <Title level={4}>{company}</Title>
        </Col>
        <Col span={4} style={{ padding: '5px 15px' }}>
          <span style={{ color: token.colorPrimary }}>360天后到期</span>
        </Col>
        <Col offset={8}>
          企业编号：
          <span style={{ fontWeight: 'bold' }}>XM-1234567</span>
        </Col>
      </Row>
      <div style={{ marginLeft: '40px' }}>
        <ConfigProvider
          theme={{
            components: {
              Descriptions: {
                itemPaddingBottom: 7,
              },
            },
          }}
        >
          <Descriptions items={items} column={2} />
        </ConfigProvider>
      </div>
      <PackageDetails {...packageItem[0]}></PackageDetails>
    </div>
  );
};

export default CustInformation;
