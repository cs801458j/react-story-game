import { React, useEffect, useState } from 'react';
import { Button, Layout } from 'antd';
import 'antd/dist/antd.min.css';
import '../css/Game.css';
import Twittericon from '../images/icon-twitter.png';
import { useLocation } from 'react-router-dom';
import gameEnding from '../images/game_real_ending.jpeg';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Loading from './Layout/Loading';
import gameTitle from '../images/game_title.jpeg';

const Ending = () => {
  const [sendText, setSendText] = useState(''); //공유할 텍스트
  const [loading, setLoading] = useState(true);
  const { result } = useLocation();
  //  props 안넘기면 엔딩 안보이게 하는 기능 추가

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  const twitterShare = () => {
    let sendUrl = 'https://suddenly-daramji.netlify.app/';
    let successMessage = '🐿 ' + sendText + ', 진람쥐 구출 작전 대성공!🍄💙';
    let hashtag = '어느날_눈떠보니_다람쥐가_되었다';

    if (sendText === '') {
      alert('닉네임 입력해 조!');
    } else {
      window.open(
        `https://twitter.com/intent/tweet?text=${successMessage}&hashtags=${hashtag}&url=${sendUrl}`,
      );
    }
  };

  const sendTextHandler = (e) => {
    setSendText(e.target.value);
  };

  return (
    <Layout style={{ height: '100%', backgroundColor: 'white' }}>
      <Header />
      {/* {result === 'success' ? (
        <div className="content-wrapper" style={{ height: '100%' }}>
          {loading ? (
            <Loading />
          ) : (
            <div className="content-wrapper" style={{ height: '100%', verticalAlign: 'middle' }}>
              {loading ? (
                <div className="loading-spinner-wrapper">
                  <div className="loading-spinner">
                    <div style={{ paddingTop: '4em' }}></div>
                    <Loading />
                  </div>
                </div>
              ) : (
                <div>
                  <div className="game-image-wrapper">
                    <img
                      className="game-image"
                      src={gameEnding}
                      style={{ textAlign: 'center' }}
                      alt="게임화면"
                    />
                  </div>
                  <div className="result-share">
                    <p>야호~! 다시 사람으로 돌아왔어!</p>
                    <p>고마워💙 다 너희들 덕분이얌ㅎㅎ</p>
                    <p>우리 결과를 함께 공유해볼까?</p>
                    <div className="twitter-share">
                      <input
                        className="input-place"
                        placeholder="닉네임이 모야?"
                        maxLength="20"
                        onChange={sendTextHandler}
                        value={sendText}
                      ></input>
                      <img
                        className="share-btn"
                        onClick={twitterShare}
                        src={Twittericon}
                        alt="twitter"
                      ></img>
                      <p>click!</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="content-wrapper" style={{ height: '100%' }}>
          <div className="main-image-wrapper">
            <img className="main-image" src={gameTitle} alt={'진람쥐'} />
          </div>
          <p className="start-text">게임을 하고 엔딩으로 오세용!</p>
        </div>
      )} */}
      <div className="content-wrapper" style={{ height: '100%', verticalAlign: 'middle' }}>
        {loading ? (
          <div className="loading-spinner-wrapper">
            <div className="loading-spinner">
              <div style={{ paddingTop: '4em' }}></div>
              <Loading />
            </div>
          </div>
        ) : (
          <div>
            <div className="game-image-wrapper">
              <img
                className="game-image"
                src={gameEnding}
                style={{ textAlign: 'center' }}
                alt="게임화면"
              />
            </div>
            <div className="result-share">
              <p>야호~! 다시 사람으로 돌아왔어!</p>
              <p>고마워💙 다 너희들 덕분이얌ㅎㅎ</p>
              <p>우리 결과를 함께 공유해볼까?</p>
              <div className="twitter-share">
                <input
                  className="input-place"
                  placeholder="닉네임이 모야?"
                  maxLength="20"
                  onChange={sendTextHandler}
                  value={sendText}
                ></input>
                <img
                  className="share-btn"
                  onClick={twitterShare}
                  src={Twittericon}
                  alt="twitter"
                ></img>
                <p>click!</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </Layout>
  );
};

export default Ending;
