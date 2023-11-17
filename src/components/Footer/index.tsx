/*
 * @Author: Tang jun hao 980792492@qq.com
 * @Date: 2023-11-06 23:13:40
 * @LastEditors: Tang jun hao 980792492@qq.com
 * @LastEditTime: 2023-11-14 23:48:49
 * @FilePath: /project/src/components/Footer/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import React from 'react';
import './index.less';

const Footer: React.FC = () => {
  const intl = useIntl();


  return (
    <div className="footer-wrap">
      <a href="https://pro.ant.design">{'[系统公告]2023-10-23日下午14时服务器升级'}</a>
    </div>
  );
};

export default Footer;
