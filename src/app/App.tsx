import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import CommentField from '../components/comment';
import Post from '../components/post';

const App: React.FC = () => {
  return (
    <div className="App">
      <CommentField />
      <Post />
    </div>
  );
};

export default App;
