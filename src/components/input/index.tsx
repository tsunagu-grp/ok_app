import React from 'react';
import {Input} from 'antd';

const InputText: React.FC = () => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
  };
  return (
    <div>
      <Input
        placeholder="メッセージを入力してください"
        onChange={handleChange}
      />
    </div>
  );
};

export default InputText;
