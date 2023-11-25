import { PageContainer } from '@ant-design/pro-components';
// import { useModel } from '@umijs/max';
import InfoCardAdd from '@/pages/Customer/components/InfoCardAdd';
import TabsHeader from '@/pages/Customer/components/TabsHeader';
import { CheckCircleFilled, CloseCircleFilled } from '@ant-design/icons';
import { Button, Tag, theme } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * 每个单独的卡片，为了复用样式抽成了组件
 * @param param0
 * @returns
 */
const InfoCard: React.FC<{
  title: string;
  desc: string; //用户
  speed: string;
  status: string;
  startDate: string;
  endDate: string;
  route: string;
}> = ({ title, speed, desc, status, startDate, endDate, route }) => {
  const { useToken } = theme;

  const { token } = useToken();

  return (
    <div
      style={{
        backgroundColor: status === '1' ? token.colorBgContainer : '#EFEFEF',
        boxShadow: status === '1' ? token.boxShadow : '#EFEFEF',
        borderRadius: '8px',
        color: token.colorTextSecondary,
        lineHeight: '35px',
        padding: '16px 19px',
        width: '350px',
        // flex: 1,
      }}
    >
      <div>
        <div
          style={{
            fontSize: '16px',
            color: token.colorText,
            // paddingBottom: 2,
            width: '100%',
          }}
        >
          <span style={{ fontWeight: 'bold' }}>{title}</span>
          <div
            style={{
              float: 'right',
            }}
          >
            {status === '1' ? (
              <Tag bordered={false} color="success" icon={<CheckCircleFilled />}>
                已开启
              </Tag>
            ) : (
              <Tag bordered={false} color="default" icon={<CloseCircleFilled />}>
                禁用中
              </Tag>
            )}
          </div>
        </div>
      </div>
      <div>
        {startDate}/{endDate}
      </div>
      <div
        style={{
          fontSize: '14px',
          display: 'flex',
          color: token.colorTextSecondary,
          textAlign: 'justify',
          lineHeight: '16px',
          marginTop: 10,
        }}
      >
        <div style={{ flex: '70px' }}>用户: {desc}</div>
        <div style={{ flex: '20px' }}>速度: {speed}</div>
      </div>
      <div>路线：{route}</div>
      <div style={{ float: 'right' }}>
        <Link to="/customer/information/moreInfo">
          <Button type="primary" style={{ marginRight: '10px' }}>
            更多
          </Button>
        </Link>
        {status === '1' && <Button>禁用</Button>}
      </div>
    </div>
  );
};
const Information: React.FC = () => {
  const [custInfo, setCustInfo] = useState<API.CustInfoItem[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      // const result = await cust_info();
      const result = {
        data: [
          {
            key: 99,
            cust_name: '深圳大可龙贸易有限公司',
            desc: '120',
            speed: '50M',
            status: '1', //0:禁用；1：启用
            startDate: '2023-10-22',
            endDate: '2024-10-21',
            route: '美国/日本/英国',
          },
          {
            key: 98,
            cust_name: '深圳大可龙贸易有限公司',
            desc: '120',
            speed: '50M',
            status: '1', //0:禁用；1：启用
            startDate: '2023-10-22',
            endDate: '2024-10-21',
            route: '美国/日本/英国',
          },
          {
            key: 97,
            cust_name: '深圳大可龙贸易有限公司',
            desc: '这是一段描述',
            speed: '50M',
            status: '1', //0:禁用；1：启用
            startDate: '2023-10-22',
            endDate: '2024-10-21',
            route: '美国/日本/英国',
          },
          {
            key: 96,
            cust_name: '深圳大可龙贸易有限公司',
            desc: '这是一段描述',
            speed: '50M',
            status: '0', //0:禁用；1：启用
            startDate: '2023-10-22',
            endDate: '2024-10-21',
            route: '美国/日本/英国',
          },
          {
            key: 95,
            cust_name: '深圳大可龙贸易有限公司',
            desc: '这是一段描述',
            speed: '50M',
            status: '1', //0:禁用；1：启用
            startDate: '2023-10-22',
            endDate: '2024-10-21',
            route: '美国/日本/英国',
          },
          {
            key: 94,
            cust_name: '深圳大可龙贸易有限公司',
            desc: '这是一段描述',
            speed: '50M',
            status: '1', //0:禁用；1：启用
            startDate: '2023-10-22',
            endDate: '2024-10-21',
            route: '美国/日本/英国',
          },
          {
            key: 93,
            cust_name: '深圳大可龙贸易有限公司',
            desc: '这是一段描述',
            speed: '50M',
            status: '1', //0:禁用；1：启用
            startDate: '2023-10-22',
            endDate: '2024-10-21',
            route: '美国/日本/英国',
          },
          {
            key: 92,
            cust_name: '深圳大可龙贸易有限公司',
            desc: '这是一段描述',
            speed: '50M',
            status: '0', //0:禁用；1：启用
            startDate: '2023-10-22',
            endDate: '2024-10-21',
            route: '美国/日本/英国',
          },
          {
            key: 91,
            cust_name: '深圳大可龙贸易有限公司',
            desc: '这是一段描述',
            speed: '50M',
            status: '0', //0:禁用；1：启用
            startDate: '2023-10-22',
            endDate: '2024-10-21',
            route: '美国/日本/英国',
          },
          {
            key: 90,
            cust_name: '深圳大可龙贸易有限公司',
            desc: '这是一段描述',
            speed: '50M',
            status: '1', //0:禁用；1：启用
            startDate: '2023-10-22',
            endDate: '2024-10-21',
            route: '美国/日本/英国',
          },
          {
            key: 89,
            cust_name: '深圳大可龙贸易有限公司',
            desc: '这是一段描述',
            speed: '50M',
            status: '1', //0:禁用；1：启用
            startDate: '2023-10-22',
            endDate: '2024-10-21',
            route: '美国/日本/英国',
          },
          {
            key: 88,
            cust_name: '深圳大可龙贸易有限公司',
            desc: '这是一段描述',
            speed: '50M',
            status: '0', //0:禁用；1：启用
            startDate: '2023-10-22',
            endDate: '2024-10-21',
            route: '美国/日本/英国',
          },
          {
            key: 87,
            cust_name: '深圳大可龙贸易有限公司',
            desc: '这是一段描述',
            speed: '50M',
            status: '1', //0:禁用；1：启用
            startDate: '2023-10-22',
            endDate: '2024-10-21',
            route: '美国/日本/英国',
          },
          {
            key: 86,
            cust_name: '深圳大可龙贸易有限公司',
            desc: '这是一段描述',
            speed: '50M',
            status: '1', //0:禁用；1：启用
            startDate: '2023-10-22',
            endDate: '2024-10-21',
            route: '美国/日本/英国',
          },
          {
            key: 85,
            cust_name: '深圳大可龙贸易有限公司',
            desc: '这是一段描述',
            speed: '50M',
            status: '0', //0:禁用；1：启用
            startDate: '2023-10-22',
            endDate: '2024-10-21',
            route: '美国/日本/英国',
          },
          {
            key: 84,
            cust_name: '深圳大可龙贸易有限公司',
            desc: '这是一段描述',
            speed: '50M',
            status: '0', //0:禁用；1：启用
            startDate: '2023-10-22',
            endDate: '2024-10-21',
            route: '美国/日本/英国',
          },
          {
            key: 83,
            cust_name: '深圳大可龙贸易有限公司',
            desc: '这是一段描述',
            speed: '50M',
            status: '1', //0:禁用；1：启用
            startDate: '2023-10-22',
            endDate: '2024-10-21',
            route: '美国/日本/英国',
          },
          {
            key: 82,
            cust_name: '深圳大可龙贸易有限公司',
            desc: '这是一段描述',
            speed: '50M',
            status: '1', //0:禁用；1：启用
            startDate: '2023-10-22',
            endDate: '2024-10-21',
            route: '美国/日本/英国',
          },
          {
            key: 81,
            cust_name: '深圳大可龙贸易有限公司',
            desc: '这是一段描述',
            speed: '50M',
            status: '0', //0:禁用；1：启用
            startDate: '2023-10-22',
            endDate: '2024-10-21',
            route: '美国/日本/英国',
          },
          {
            key: 80,
            cust_name: '深圳大可龙贸易有限公司',
            desc: '这是一段描述',
            speed: '50M',
            status: '1', //0:禁用；1：启用
            startDate: '2023-10-22',
            endDate: '2024-10-21',
            route: '美国/日本/英国',
          },
        ],
      };
      setCustInfo(result.data || []);
    };
    fetchData();
  }, []);

  //   const { initialState } = useModel('@@initialState');
  return (
    <PageContainer
      header={{
        title: null,
        breadcrumb: {},
      }}
    >
      <div
        style={{
          borderRadius: 8,
        }}
        // bodyStyle={{
        //   backgroundImage:
        //     initialState?.settings?.navTheme === 'realDark'
        //       ? 'background-image: linear-gradient(75deg, #1A1B1F 0%, #191C1F 100%)'
        //       : 'background-image: linear-gradient(75deg, #FBFDFF 0%, #F5F7FF 100%)',
        // }}
      >
        <div
          style={{
            backgroundPosition: '100% -30%',
            backgroundSize: '274px auto',
          }}
        >
          <TabsHeader list={['全部', '专线客户', '通用线路', '禁用中']}></TabsHeader>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              rowGap: 25,
              columnGap: 45,
            }}
          >
            <InfoCardAdd />
            {custInfo.map((item) => {
              return (
                // <div >
                <InfoCard
                  key={item.key}
                  //   href="https://umijs.org/docs/introduce/introduce"
                  title={item.cust_name}
                  status={item.status}
                  speed={item.speed}
                  startDate={item.startDate}
                  endDate={item.endDate}
                  route={item.route}
                  desc={item.desc}
                />
                // </div>
              );
            })}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Information;
