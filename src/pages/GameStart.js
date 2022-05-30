import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Layout, Radio, Space, Modal } from 'antd';
import { gameStory, gameSelection, stageStory } from '../data/Story';
import '../css/Game.css';
import 'antd/dist/antd.min.css';
import Typewriter from 'typewriter-effect';
import headerImg from '../images/header_test.png';

const GameStart = () => {
  const [display, setDisplay] = useState('');
  const [stageId, setStageId] = useState(0); //  game stage 변수
  const [dialogIndex, setDialogIndex] = useState(0); //  현재 message index
  const [selections, setSelections] = useState([]);
  const [mode, setMode] = useState(''); //  현재 게임 스토리인지 스테이지(1,2,3) 인지 구분하는 변수 mode = story, stage
  const [select, setSelect] = useState(1);
  const { Header, Footer } = Layout;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

  // 대화 - dialog, 선택지 selection

  useEffect(() => {
    setDisplay(gameStory[0]);
    setSelections(gameSelection);
    setMode('story'); // To-be: Story.js에서 param으로 줄 수 있게 하기
    console.log(isModalVisible);
  }, []);

  useEffect(() => {
    console.log(display);
    //setDisplay(gameStory[stageId]);
  }, [display]);

  useEffect(() => {
    console.log(isModalVisible);
    //setDisplay(gameStory[stageId]);
  }, [isModalVisible]);

  //  스토리 진행
  const goToNextMessage = () => {
    console.log(display, stageId);
    // console.log(gameStory[stageId].contents.length)
    if (dialogIndex < display.contents.length - 1) {
      //console.log("currentMessage")
      setDialogIndex(dialogIndex + 1);
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
      //   stage fail 조건 체크
      console.log(stageStory[stageId - 1][select].result);
      if (stageStory[stageId - 1][select].result === 'fail') {
        setIsModalVisible(true);
        console.log(stageStory[stageId - 1][select].result);
      } else {
        setDisplay(gameStory[stageId + 1]);
        setStageId(stageId + 1);
        setDialogIndex(0);
      }
      return;
    }

    setDisplay(gameStory[stageId + 1]);
    setStageId(stageId + 1);
    setDialogIndex(0);
    return;
  };

  // 선택지 선택 -> todo: 로직
  const selectAnswer = () => {
    // console.log(select);
    // console.log('stage 클리어 여부', stageStory[stageId - 1][select].result);

    setDialogIndex(0);
    setDisplay(stageStory[stageId - 1][select]);
    setMode('stage'); //  stage mode로 변경
  };

  const handleOk = () => {
    //  초기 설정으로 set
    setDisplay(gameStory[0]);
    setStageId(0);
    setDialogIndex(0);
    setMode('story');
    // To-be: Story.js에서 param으로 줄 수 있게 하기
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    navigate('/');
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
        {display && display.contents[dialogIndex].character !== '선택' && (
          <div>
            <div style={{ margin: '0 auto', textAlign: 'center' }}>
              <img
                src={display.contents[dialogIndex].image}
                style={{ width: '96%', textAlign: 'center' }}
                alt="게임화면"
              />
            </div>

            <div className="storyline">
              <div className="character-text">
                <div>{display.contents[dialogIndex].character}</div>
                <Typewriter
                  options={{
                    strings: display.contents[dialogIndex].sentence,
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

        {display && display.contents[dialogIndex].character === '선택' && gameSelection && (
          <div>
            <div style={{ margin: '0 auto', textAlign: 'center' }}>
              <img
                src={display.contents[dialogIndex].image}
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
        <Modal
          title="MISSION FAIL ㅠ.ㅠ"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          okText="네"
          cancelText="아니요"
        >
          <p>GAME OVER ... 다시 플레이 하시겠습니까?</p>
        </Modal>
        <Footer className="footer">
          <div className="footer-text">🍄 진혁아 생일 축하해! 🍄</div>
        </Footer>
      </Layout>
    </>
  );
};

export default GameStart;
