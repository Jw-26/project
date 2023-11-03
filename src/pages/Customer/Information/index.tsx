import { PageContainer, ProCard } from '@ant-design/pro-components';
// import { useModel } from '@umijs/max';
import { cust_info } from '@/services/ant-design-pro/api';
import { theme } from 'antd';
import React, { useEffect, useState } from 'react';

/**
 * 每个单独的卡片，为了复用样式抽成了组件
 * @param param0
 * @returns
 */
const InfoCard: React.FC<{
  title: string;
  desc: string;
  href: string;
}> = ({ title, href, desc }) => {
  const { useToken } = theme;

  const { token } = useToken();

  return (
    <div
      style={{
        backgroundColor: token.colorBgContainer,
        boxShadow: token.boxShadow,
        borderRadius: '8px',
        fontSize: '14px',
        color: token.colorTextSecondary,
        lineHeight: '50px',
        padding: '16px 19px',
        width: '350px',
        // flex: 1,
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '4px',
          alignItems: 'center',
        }}
      >
        {/* <div
          style={{
            width: 48,
            height: 48,
            lineHeight: '22px',
            backgroundSize: '100%',
            textAlign: 'center',
            padding: '8px 16px 16px 12px',
            color: '#FFF',
            fontWeight: 'bold',
            backgroundImage:
              "url('https://gw.alipayobjects.com/zos/bmw-prod/daaf8d50-8e6d-4251-905d-676a24ddfa12.svg')",
          }}
        >
          {index}
        </div> */}
        <div
          style={{
            fontSize: '16px',
            color: token.colorText,
            paddingBottom: 8,
          }}
        >
          {title}
        </div>
      </div>
      <div
        style={{
          fontSize: '14px',
          color: token.colorTextSecondary,
          textAlign: 'justify',
          lineHeight: '22px',
          marginBottom: 8,
        }}
      >
        {desc}
      </div>
      <a href={href} target="_blank" rel="noreferrer">
        了解更多 {'>'}
      </a>
    </div>
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
  });

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
          <div>tab</div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 24,
            }}
          >
            <ProCard
              layout="center"
              direction="column"
              style={{ maxWidth: 300, height: 200 }}
            >
              <div>123</div>
              <div>456</div>
            </ProCard>
            {custInfo.map((item) => {
              return (
                // <div >
                <InfoCard
                  key={item.key}
                  href="https://umijs.org/docs/introduce/introduce"
                  title={item.cust_name}
                  desc="umi 是一个可扩展的企业级前端应用框架,umi 以路由为基础的，同时支持配置式路由和约定式路由，保证路由的功能完备，并以此进行功能扩展。"
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
