import { React, useEffect, useState } from 'react';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import { Button, Layout } from 'antd';
import 'antd/dist/antd.min.css';
import '../css/Game.css';
import Twittericon from '../images/icon-twitter.png';

const Ending = () => {
  const [sendText, setSendText] = useState(''); //공유할 텍스트

  const twitterShare = () => {
    let sendUrl = 'https://suddenly-squirrel.herokuapp.com/';
    let successMent = ' 진람쥐 구출 작전 대성공!';
    let hash = '진혁생축';
    window.open(
      `https://twitter.com/intent/tweet?text=${sendText}&text=${successMent}&hashtags=${hash}&url=${sendUrl}`,
    );
  };

  const sendTextHandler = (e) => {
    setSendText(e.target.value);
  };

  return (
    <Layout style={{ height: '100%', backgroundColor: 'white' }}>
      <Header />
      <div className="content-wrapper" style={{ height: '100%' }}>
        <p>엔딩입니다</p>
        {/*   To-do: 공유하기 기능 */}
        <div className="twitter-share">
          {/* <input onChange={sendTextHandler(this.value)}></input> */}
          <input onChange={sendTextHandler} value={sendText}></input>
          <Button onClick={twitterShare}>
            <img src={Twittericon} alt="twitter"></img>
          </Button>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Ending;
