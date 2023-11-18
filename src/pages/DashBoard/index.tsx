import { PageContainer, ProCard } from '@ant-design/pro-components';
import CardInfo from './CardInfo';
import Help from './Help';
import './index.less';
import Notice from './Notice';
import NumChart from './NumChart';
import NumPie from './NumPie';
import Operate from './Operate';
import Report from './Report';

const DashBoard: React.FC = () => {
  // const { initialState } = useModel('@@initialState');
  return (
    <PageContainer>
      <ProCard>
        <div className="dash-board-wrap">
          <div className="dash-board-wrap-top">
            <CardInfo />
          </div>
          <div className="dash-board-wrap-middle">
            <NumChart />
            <NumPie />
          </div>
          <div className="dash-board-wrap-bottom">
            <Report />
            <Operate />
            <div className="report-wrap">
              <Notice />
              <Help />
            </div>
          </div>
        </div>
      </ProCard>
    </PageContainer>
  );
};

export default DashBoard;
