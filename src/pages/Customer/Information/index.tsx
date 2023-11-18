import { PageContainer } from '@ant-design/pro-components';
// import { useModel } from '@umijs/max';
import { cust_info } from '@/services/ant-design-pro/api';
import { CheckCircleFilled, CloseCircleFilled } from '@ant-design/icons';
import { Button, ConfigProvider, Segmented, Tag, theme } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'umi';
import InfoCardAdd from '../components/InfoCardAdd';

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
const TabTop: React.FC<{ list: Array<string> }> = ({ list }) => {
  const { useToken } = theme;

  const { token } = useToken();
  return (
    <ConfigProvider
      theme={{
        components: {
          Segmented: {
            itemActiveBg: '#F2F3F8',
            itemSelectedBg: '#F2F3F8',
            itemSelectedColor: '#7385FD',
            itemHoverColor: '#7385FD',
            borderRadiusSM: 16,
          },
        },
      }}
    >
      <div
        style={{
          backgroundColor: token.colorBgContainer,
          display: 'flex',
          height: '60px',
          alignItems: 'center',
          marginBottom: '20px',
          paddingLeft: '20px',
        }}
      >
        <Segmented
          options={list}
          style={{
            backgroundColor: token.colorBgContainer,
          }}
        />
      </div>
    </ConfigProvider>
  );
};
const Information: React.FC = () => {
  const [custInfo, setCustInfo] = useState<API.CustInfoItem[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await cust_info();
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
          <TabTop list={['全部', '专线客户', '通用线路', '禁用中']}></TabTop>
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
