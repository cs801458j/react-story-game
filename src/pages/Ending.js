import { React, useEffect, useState } from 'react';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import { Layout } from 'antd';
import 'antd/dist/antd.min.css';
import '../css/Game.css';
import Loading from './Layout/Loading';

//  to-do: ending props를 넘기기
const Ending = () => {
  const [loading, setLoading] = useState(true);

  //  props 안넘기면 엔딩 안보이게 하는 기능 추가

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });

  return (
    <Layout style={{ height: '100%', backgroundColor: 'white' }}>
      <Header />
      <div className="content-wrapper" style={{ height: '100%' }}>
        {loading ? (
          <Loading />
        ) : (
          <div>
            <p>축하합니다!</p>
            <p>엔딩입니다</p>
          </div>
        )}
      </div>
      <Footer />
    </Layout>
  );
};

export default Ending;
