import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Layout, Radio, Space } from 'antd';
import { gameStory, gameSelection, stageStory } from '../data/Story';
import '../css/Game.css';
import 'antd/dist/antd.min.css';
import gameTitle from '../images/game_title.jpeg';
import Typewriter from 'typewriter-effect';
import headerImg from '../images/header_test.png';

const GameStart = () => {
  const [display, setDisplay] = useState('');
  const [stageId, setStageId] = useState(0); //  game stage 변수
  const [currentMessage, setCurrentMessage] = useState(0); //  현재 message index
  const [selections, setSelections] = useState([]);
  const [missionStatus, setMissionStatus] = useState(true); // 현재 미션이 성공인지, 실패인지 판단하는 함수
  const [mode, setMode] = useState(''); //  현재 게임 스토리인지 스테이지(1,2,3) 인지 구분하는 변수 mode = story, stage
  const [select, setSelect] = useState(1);
  const { Header, Footer } = Layout;

  // 대화 - dialog, 선택지 selection

  useEffect(() => {
    setDisplay(gameStory[0]);
    setSelections(gameSelection);
    setMode('story'); // To-be: Story.js에서 param으로 줄 수 있게 하기
  }, []);

  useEffect(() => {
    console.log(display);
    //setDisplay(gameStory[stageId]);
  }, [display]);

  //  스토리 진행
  const goToNextMessage = () => {
    console.log(display, stageId);
    // console.log(gameStory[stageId].contents.length)
    if (currentMessage < display.contents.length - 1) {
      //console.log("currentMessage")
      setCurrentMessage(currentMessage + 1);
    } else {
      // 0 말고 다음 단계로 넘어가게 해줘야 할듯
      //console.log('else',stageId)

      // stage mode 이면
      isStageMode(mode);
    }
  };

  const isStageMode = (currentMode) => {
    //  stage 모드라면, story 모드로 돌려주기
    console.log('currentMode', currentMode);
    console.log('stageId', stageId);
    if (currentMode === 'stage') {
      setDisplay(gameStory[stageId + 1]);
      setStageId(stageId + 1);
      setCurrentMessage(0);
      return;
    }

    setDisplay(gameStory[stageId + 1]);
    setStageId(stageId + 1);
    setCurrentMessage(0);
  };

  // 선택지 선택 -> todo: 로직
  const selectAnswer = () => {
    //console.log('선택지 value', value)
    //setDisplay(stageOneStory[0]);
    console.log(select);
    setCurrentMessage(0);
    setDisplay(stageStory[stageId - 1][select]);
    setMode('stage'); //  stage mode로 변경

    // switch (select) {
    //   case 0:
    //     setCurrentMessage(0);
    //     setDisplay(stageStory[stageId - 1][select]);
    //     setMode('stage'); //  stage mode로 변경
    //     break;
    //   case 1:
    //     setCurrentMessage(0);
    //     setDisplay(stageStory[stageId - 1][select]);
    //     setMode('stage'); //  stage mode로 변경
    //     break;
    //   default:
    //     break;
    // }
  };

  //  선택지 변경 handler
  const onChangeSelect = (e) => {
    //console.log('radio checked', e.target.value);
    setSelect(e.target.value);
  };

  // 선택지 스토리 진행
  //const storyContinue = () => { };
  // 미션 실패 했을 때, 팝업 띄우고 다시 처음 스테이지로 돌아가게 하는 함수
  // const missionFail = () =>{

  // }

  return (
    <>
      <Layout>
        <Header className="header">
          <div className="header-logo">
            🍄🍄
            <img className="header-img" src={headerImg} />
            🍄🍄
          </div>
        </Header>
        {display && display.contents[currentMessage].character !== '선택' && (
          <div>
            <div style={{ margin: '0 auto', textAlign: 'center' }}>
              <img
                src={display.contents[currentMessage].image}
                style={{ width: '96%', textAlign: 'center' }}
                alt="게임화면"
              />
            </div>

            <div className="storyline">
              <div className="character-text">
                <div>{display.contents[currentMessage].character}</div>
                <Typewriter
                  options={{
                    strings: display.contents[currentMessage].sentence,
                    autoStart: true,
                    delay: 100,
                    loop: false,
                  }}
                />
              </div>
              <div className="btn">
                <Button onClick={goToNextMessage} style={{ textAlign: 'center' }}>
                  다음
                </Button>
              </div>
            </div>
          </div>
        )}

        {display && display.contents[currentMessage].character === '선택' && gameSelection && (
          <div>
            <div style={{ margin: '0 auto', textAlign: 'center' }}>
              <img
                src={display.contents[currentMessage].image}
                style={{ width: '96%', textAlign: 'center' }}
                alt="게임화면"
              />
            </div>
            <div className="select-box">
              <div>
                <Radio.Group onChange={onChangeSelect} value={select}>
                  <Space direction="vertical">
                    <Radio value={0}>{selections[stageId - 1].selections[0]}</Radio>
                    <Radio value={1}>{selections[stageId - 1].selections[1]}</Radio>
                    <Radio value={2}>{selections[stageId - 1].selections[2]}</Radio>
                  </Space>
                </Radio.Group>
              </div>
              <div>
                <Button onClick={selectAnswer} style={{ textAlign: 'center' }}>
                  선택
                </Button>
              </div>
            </div>
          </div>
        )}
        <Footer className="footer">
          <div className="footer-text">🍄 진혁아 생일 축하해! 🍄</div>
        </Footer>
      </Layout>
    </>
  );
};

export default GameStart;
