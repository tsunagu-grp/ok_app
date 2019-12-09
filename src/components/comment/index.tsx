import React from 'react';
import {Comment} from 'antd';
import './comment.css';

const comments = [
  {
    id: 1,
    author: 'ofusa',
    avatar: 'https://gyazo.com/e4f4a4a5c13195f8db12a12c513eebe2',
    content: 'ああああ',
    datetime: '2019.12.06',
  },
  {
    id: 2,
    author: 'kawadu',
    avatar: 'https://gyazo.com/f6928e246700d6f21e2389977f16ec63',
    content: 'いいいい',
    datetime: '2019.12.06',
  },
  {
    id: 1,
    author: 'ofusa',
    avatar: 'https://gyazo.com/e4f4a4a5c13195f8db12a12c513eebe2',
    content: 'ああああ',
    datetime: '2019.12.06',
  },
  {
    id: 2,
    author: 'kawadu',
    avatar: 'https://gyazo.com/f6928e246700d6f21e2389977f16ec63',
    content: 'いいいい',
    datetime: '2019.12.06',
  },
  {
    id: 1,
    author: 'ofusa',
    avatar: 'https://gyazo.com/e4f4a4a5c13195f8db12a12c513eebe2',
    content: 'ああああ',
    datetime: '2019.12.06',
  },
  {
    id: 2,
    author: 'kawadu',
    avatar: 'https://gyazo.com/f6928e246700d6f21e2389977f16ec63',
    content: 'いいいい',
    datetime: '2019.12.06',
  },
  {
    id: 1,
    author: 'ofusa',
    avatar: 'https://gyazo.com/e4f4a4a5c13195f8db12a12c513eebe2',
    content: 'ああああ',
    datetime: '2019.12.06',
  },
  {
    id: 2,
    author: 'kawadu',
    avatar: 'https://gyazo.com/f6928e246700d6f21e2389977f16ec63',
    content: 'いいいい',
    datetime: '2019.12.06',
  },
];

const CommentField: React.FC = () => {
  return (
    <div>
      {comments.map((comment, index) => (
        <Comment
          key={index}
          author={comment.author}
          avatar={comment.avatar}
          content={comment.content}
          datetime={comment.datetime}
          className={comment.id === 1 ? `ant-comment-right` : ''}
        />
      ))}
    </div>
  );
};

export default CommentField;
