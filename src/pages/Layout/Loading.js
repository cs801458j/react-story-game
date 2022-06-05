import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { SyncLoader } from 'react-spinners';
const Loading = () => {
  return <SyncLoader color="#36D7B7" size={25} radius={2} margin={2} />;
};

export default Loading;
