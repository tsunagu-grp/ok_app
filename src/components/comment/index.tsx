import React from 'react';
import {Comment} from 'antd';
import './comment.css';

const comments = [
  {
    id: 1,
    author: 'ofusa',
    avatar:
      'https://1.bp.blogspot.com/-Q9jOqnVqGuo/W64DqXTxwfI/AAAAAAABPIk/mn0XoaVlL2s_Sphqb-5WielV75A6JIEowCLcBGAs/s800/job_yarigai_sausyu.png',
    content:
      'ああああああああああああああああああああああああああああああああああああああああああああああああああああああああ',
    datetime: '2019.12.06',
  },
  {
    id: 2,
    author: 'kawadu',
    avatar:
      'https://1.bp.blogspot.com/-VCaRrvrzXbg/XeGi7impmlI/AAAAAAABWT8/rrnRjCXD-YQtHWRJ0g47bpfhx9K8jQX6ACNcBGAsYHQ/s1600/kenpou_mokujintou_man.png',
    content: 'いいいい',
    datetime: '2019.12.06',
  },
  {
    id: 1,
    author: 'ofusa',
    avatar:
      'https://1.bp.blogspot.com/-Q9jOqnVqGuo/W64DqXTxwfI/AAAAAAABPIk/mn0XoaVlL2s_Sphqb-5WielV75A6JIEowCLcBGAs/s800/job_yarigai_sausyu.png',
    content: 'ああああ',
    datetime: '2019.12.06',
  },
  {
    id: 2,
    author: 'kawadu',
    avatar:
      'https://1.bp.blogspot.com/-VCaRrvrzXbg/XeGi7impmlI/AAAAAAABWT8/rrnRjCXD-YQtHWRJ0g47bpfhx9K8jQX6ACNcBGAsYHQ/s1600/kenpou_mokujintou_man.png',
    content: 'いいいい',
    datetime: '2019.12.06',
  },
  {
    id: 1,
    author: 'ofusa',
    avatar:
      'https://1.bp.blogspot.com/-Q9jOqnVqGuo/W64DqXTxwfI/AAAAAAABPIk/mn0XoaVlL2s_Sphqb-5WielV75A6JIEowCLcBGAs/s800/job_yarigai_sausyu.png',
    content: 'ああああ',
    datetime: '2019.12.06',
  },
  {
    id: 2,
    author: 'kawadu',
    avatar:
      'https://1.bp.blogspot.com/-VCaRrvrzXbg/XeGi7impmlI/AAAAAAABWT8/rrnRjCXD-YQtHWRJ0g47bpfhx9K8jQX6ACNcBGAsYHQ/s1600/kenpou_mokujintou_man.png',
    content: 'いいいい',
    datetime: '2019.12.06',
  },
  {
    id: 1,
    author: 'ofusa',
    avatar:
      'https://1.bp.blogspot.com/-Q9jOqnVqGuo/W64DqXTxwfI/AAAAAAABPIk/mn0XoaVlL2s_Sphqb-5WielV75A6JIEowCLcBGAs/s800/job_yarigai_sausyu.png',
    content: 'ああああ',
    datetime: '2019.12.06',
  },
  {
    id: 2,
    author: 'kawadu',
    avatar:
      'https://1.bp.blogspot.com/-VCaRrvrzXbg/XeGi7impmlI/AAAAAAABWT8/rrnRjCXD-YQtHWRJ0g47bpfhx9K8jQX6ACNcBGAsYHQ/s1600/kenpou_mokujintou_man.png',
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
