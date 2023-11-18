/*
 * @Author: Tang jun hao 980792492@qq.com
 * @Date: 2023-11-07 13:55:30
 * @LastEditors: Tang jun hao 980792492@qq.com
 * @LastEditTime: 2023-11-14 22:37:47
 * @FilePath: /project/src/pages/DashBoard/CardInfo/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {
  ApiTwoTone,
  BankTwoTone,
  CaretUpOutlined,
  CrownTwoTone,
  FundTwoTone,
} from '@ant-design/icons';
import './index.less';

const CardInfo: React.FC = () => {
  return (
    <div className="card-wrap">
      <div className="item">
        <div className="left">
          <BankTwoTone twoToneColor="#62aa40" />
        </div>
        <div className="right">
          <div className="text">{'设备数'}</div>
          <div className="num">
            <span>373.5w+</span>个
          </div>
        </div>
      </div>
      <div className="divider" />
      <div className="item">
        <div className="left">
          <CrownTwoTone twoToneColor="#62aa40" />
        </div>
        <div className="right">
          <div className="text">{'链接数'}</div>
          <div className="num">
            <span>368</span>个
          </div>
        </div>
      </div>
      <div className="divider" />

      <div className="item">
        <div className="left">
          <ApiTwoTone twoToneColor="#62aa40" />
        </div>
        <div className="right">
          <div className="text">{'企业客户数'}</div>
          <div className="num">
            <span>368</span>个
          </div>
        </div>
      </div>
      <div className="divider" />
      <div className="item">
        <div className="left">
          <FundTwoTone twoToneColor="#62aa40" />
        </div>
        <div className="right">
          <div className="text">{'较昨日新增'}</div>
          <div className="num">
            <span>20%</span>
            <CaretUpOutlined style={{ color: '#e94646' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
