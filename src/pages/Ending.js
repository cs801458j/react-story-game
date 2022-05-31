import { React, useEffect, useState } from 'react';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import { Layout } from 'antd';
import 'antd/dist/antd.min.css';
import '../css/Game.css';
import Loading from './Layout/Loading';
import { useLocation } from 'react-router-dom';
import gameTitle from '../images/game_title.jpeg';

//  to-do: ending props를 넘기기
const Ending = () => {
  const [loading, setLoading] = useState(true);
  const { result } = useLocation();
  //  props 안넘기면 엔딩 안보이게 하는 기능 추가

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  });

  return (
    <Layout style={{ height: '100%', backgroundColor: 'white' }}>
      <Header />
      {/* {result === 'success' ? (
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
      ) : (
        <div className="content-wrapper" style={{ height: '100%' }}>
          <p>게임을 하고 엔딩으로 오세용!</p>
        </div>
      )} */}
      <div className="content-wrapper" style={{ height: '100%' }}>
        {loading ? (
          <Loading />
        ) : (
          <div>
            <div className="game-image-wrapper">
              <img
                className="game-image"
                src={gameTitle}
                style={{ textAlign: 'center' }}
                alt="게임화면"
              />
            </div>
            <div className="result-share">
              <p>야호~! 다시 사람으로 돌아왔어! 다 너희들 덕분이야 ㅠ.ㅠ</p>
              <p>우리 결과를 함께 공유해볼까?</p>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </Layout>
  );
};

export default Ending;
