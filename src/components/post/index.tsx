import React from 'react';
import 'antd/dist/antd.css';
import {Row, Col} from 'antd';
import InputText from '../input';
import SubmitButton from '../button';

const Post: React.FC = () => {
  return (
    <div>
      <Row>
        <Col span={12}>
          <InputText />
        </Col>
        <Col span={12}>
          <SubmitButton />
        </Col>
      </Row>
    </div>
  );
};

export default Post;
