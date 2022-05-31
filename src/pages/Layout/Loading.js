import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const Loading = () => {
  return (
    <div>
      <LoadingOutlined style={{ fontSize: 100, color: 'blue' }} spin />
    </div>
  );
};

export default Loading;
