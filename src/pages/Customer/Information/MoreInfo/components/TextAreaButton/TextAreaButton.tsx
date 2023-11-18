import { Button, Input } from 'antd';
import React from 'react';
import styles from './TextAreaButton.module.less';

const { TextArea } = Input;

const handleSubmit = () => {
  console.log('跟进');
};
const TextAreaButton: React.FC = () => {
  return (
    <div className={styles.textAreaButton}>
      <TextArea rows={4} placeholder="聊天气泡，多行输入" autoSize={{ minRows: 4, maxRows: 4 }} />
      <Button type="primary" onClick={() => handleSubmit()}>
        跟进
      </Button>
    </div>
  );
};

export default TextAreaButton;
