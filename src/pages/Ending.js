import { React, useEffect, useState } from 'react';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import { Layout } from 'antd';
import 'antd/dist/antd.min.css';
import '../css/Game.css';
import Loading from './Layout/Loading';
const Ending = () => {
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setLoading(false);
  // });

  //  props 안넘기면 엔딩 안보이게 하는 기능 추가

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  return (
    <Layout style={{ height: '100%', backgroundColor: 'white' }}>
      <Header />
      {loading ? <Loading /> : null}
      <div className="content-wrapper" style={{ height: '100%' }}>
        <p>엔딩입니다</p>
        {/*   To-do: 공유하기 기능 */}
      </div>
      <Footer />
    </Layout>
  );
};

export default Ending;
