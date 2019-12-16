import React from 'react';
import {useDispatch} from 'react-redux';
import {updateContent} from '../../containers/talkSlice';
import {Input} from 'antd';

const InputText: React.FC = () => {
  const dispatch = useDispatch();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    dispatch(updateContent({content: event.target.value}));
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
