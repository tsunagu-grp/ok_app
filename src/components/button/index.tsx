import React from 'react';
import {RootState} from '../../store/rootReducer';
import {useDispatch, useSelector} from 'react-redux';
import {updateTalk} from '../../containers/talkSlice';
import {Button} from 'antd';

const SubmitButton: React.FC = () => {
  const dispatch = useDispatch();
  const talk = useSelector((state: RootState) => state.talk.talk.data);
  const lastTalkID = talk[talk.length - 1].id;
  const content = useSelector((state: RootState) => state.talk.content.content);
  const handleClick = () => {
    const data = [
      ...talk,
      {
        id: lastTalkID + 1,
        content: content,
        timestamp: new Date(),
        user_id: 1,
      },
    ];
    dispatch(updateTalk(data));
  };
  return (
    <div>
      <Button type="primary" htmlType="submit" onClick={handleClick}>
        送信する
      </Button>
    </div>
  );
};

export default SubmitButton;
