import React from 'react';
import {Button} from 'antd';

const SubmitButton: React.FC = () => {
  return (
    <div>
      <Button type="primary" htmlType="submit">
        送信する
      </Button>
    </div>
  );
};

export default SubmitButton;
