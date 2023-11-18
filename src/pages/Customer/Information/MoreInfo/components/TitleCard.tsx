import { Divider } from 'antd';
import React from 'react';

interface TitleCardProps {
  name: string;
}
const TitleCard: React.FC<TitleCardProps> = (props) => {
  const { name } = props;
  return (
    <div>
      {name}
      <Divider style={{ margin: '15px 0px' }} />
    </div>
  );
};

export default TitleCard;
