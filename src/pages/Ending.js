import { React, useEffect, useState } from 'react';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import { Layout } from 'antd';
import 'antd/dist/antd.min.css';
import '../css/Game.css';
const Ending = () => {
  return (
    <Layout style={{ height: '100%', backgroundColor: 'white' }}>
      <Header />
      <div className="content-wrapper" style={{ height: '100%' }}>
        <p>엔딩입니다</p>
        {/*   To-do: 공유하기 기능 */}
      </div>
      <Footer />
    </Layout>
  );
};

export default Ending;
