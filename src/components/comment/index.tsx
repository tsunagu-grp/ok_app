import React from 'react';
import {useSelector} from 'react-redux';
// import {Talk} from '../../model';
import {RootState} from '../../store/rootReducer';
import {Comment} from 'antd';
import './comment.css';
// import {updateTalk} from '../../containers/talkSlice';

const CommentField: React.FC = () => {
  // const dispatch = useDispatch();
  const talk = useSelector((state: RootState) => state.talk.data);
  // const setTalk = (data: Talk[]) => {
  //   dispatch(updateTalk(data));
  // };
  return (
    <div>
      {talk.map((comment, index) => (
        <Comment
          key={index}
          // author={comment.author}
          // avatar={comment.avatar}
          content={comment.content}
          datetime={String(comment.timestamp)}
          className={comment.user_id === 1 ? `ant-comment-right` : ''}
        />
      ))}
    </div>
  );
};

export default CommentField;
