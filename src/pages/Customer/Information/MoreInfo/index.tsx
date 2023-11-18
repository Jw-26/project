import { ProCard } from '@ant-design/pro-components';
import React from 'react';
import CustInformation from './components/CustInformation';
import TabsTop from './components/TabsTop';
import TimeLine from './components/TimeLine';
import TitleCard from './components/TitleCard';
import VPNAccount from './components/VPNAccount';
import WeChatBind from './components/WeChatBind';

const info = {
  company: '深圳大可贸易有限公司',
  type: '企业账号',
  name: '李四',
  companyName: '湖南科技有限公司',
  track: '线上-百度竞价',
  creatDt: '2023-11-8 10:25:30',
  phone: '13545678911',
  helmCode: '123456',
  agent: '北京真远科技有限公司',
};
const managementInfo = {
  management: '张三',
  phone: '13456789123',
  mail: '122721414@qq.com',
  sex: '女',
  age: '未知',
};

const MoreInfo: React.FC = () => {
  return (
    <div>
      <ProCard ghost gutter={[16, 0]}>
        <ProCard direction="column" ghost gutter={[0, 16]} colSpan={19}>
          <ProCard ghost>
            <ProCard colSpan={18} style={{ height: 776 }}>
              <TitleCard name="客户信息" />
              <CustInformation {...info}></CustInformation>
            </ProCard>
            <ProCard direction="column" ghost colSpan={6} style={{ paddingLeft: 16 }}>
              <ProCard style={{ height: 380 }}>
                <TitleCard name="客户信息" />
                <WeChatBind {...managementInfo}></WeChatBind>
              </ProCard>
              <ProCard style={{ height: 380, marginTop: 16 }}>
                <TitleCard name="项目进度" />
                <TimeLine />
              </ProCard>
            </ProCard>
          </ProCard>
          <ProCard style={{ height: 196 }}>
            <TitleCard name="VPN子账户" />
            <VPNAccount></VPNAccount>
          </ProCard>
        </ProCard>
        <ProCard colSpan={5} style={{ height: 1000, marginTop: 4 }}>
          <TabsTop></TabsTop>
        </ProCard>
      </ProCard>
    </div>
  );
};

export default MoreInfo;
