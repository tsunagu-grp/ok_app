import React from 'react';
import {Comment} from 'antd';

const CommentField: React.FC = () => {
  return (
    <div>
      <Comment
        author={'ok_app'}
        avatar={
          'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
        }
        content={'コメントを表示'}
        datetime={'2019.12.06'}
      />
    </div>
  );
};

export default CommentField;
