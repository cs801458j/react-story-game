import { React, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Layout, Radio, Space, Modal } from 'antd';
import { gameStory, gameSelection, stageStory } from '../data/Story';
import Typewriter from 'typewriter-effect';

import Storyleft from '../images/story_left.png';
import Storyright from '../images/story_right.png';
import '../css/Game.css';
import 'antd/dist/antd.min.css';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import GameModal from './atom/GameModal';
import selection from '../images/game/selection.JPG';

const Game = () => {
  const [display, setDisplay] = useState('');
  const [stageId, setStageId] = useState(0); //  game stage 변수
  const [dialogIndex, setDialogIndex] = useState(0); //  현재 message index
  const [selections, setSelections] = useState([]);
  const [mode, setMode] = useState(''); //  현재 게임 스토리인지 스테이지(1,2,3) 인지 구분하는 변수 mode = story, stage
  const [select, setSelect] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalText, setModalText] = useState('GAME OVER ... 다시 플레이 하시겠습니까?');
  const navigate = useNavigate();

  // 대화 - dialog, 선택지 selection

  useEffect(() => {
    setStageId(0);
    setDialogIndex(0);
    setDisplay(gameStory[0]);
    setSelections(gameSelection);
    setMode('story'); // To-be: Story.js에서 param으로 줄 수 있게 하기
  }, []);

  useEffect(() => {
    //console.log(display);
    //setDisplay(gameStory[stageId]);
  }, [display]);

  useEffect(() => {
    //console.log(isModalVisible);
    //setDisplay(gameStory[stageId]);
  }, [isModalVisible]);

  //  스토리 진행
  const goToNextMessage = () => {
    //console.log(display, stageId);
    if (dialogIndex < display.contents.length - 1) {
      setDialogIndex(dialogIndex + 1);
    } else {
      // stage mode 이면
      isStageMode(mode);

      //  마지막 최종 엔딩이면 ending 페이지로 이동
    }
  };

  //  stage 모드라면, story 모드로 돌려주기
  const isStageMode = (currentMode) => {
    //console.log('currentMode', currentMode, 'stageId', stageId);
    if (currentMode === 'stage') {
      //   stage fail 조건 체크
      missionSuccessOrFail();
      //console.log(stageStory[stageId - 1][select].result);

      return;
    }

    setDisplay(gameStory[stageId + 1]);
    setStageId(stageId + 1);
    setDialogIndex(0);
    return;
  };

  //  mission 성공 실패 여부 판단
  const missionSuccessOrFail = () => {
    //  미션 실패
    if (stageStory[stageId - 1][select].result === 'fail') {
      setIsModalVisible(true);
      return;
    }

    //  미션 성공 & 마지막 최종 엔딩
    if (stageStory[stageId - 1][select].result === 'success' && stageId === 3) {
      navigate('/ending', { result: 'success' });
    }

    setDisplay(gameStory[stageId + 1]);
    setStageId(stageId + 1);
    setDialogIndex(0);
    return;
  };

  // 선택지 선택 -> todo: 로직
  const selectAnswer = () => {
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
    navigate('/', { result: 'success' });
  };

  //  선택지 변경 handler
  const onChangeSelect = (e) => {
    //console.log('radio checked', e.target.value);
    setSelect(e.target.value);
  };

  return (
    <>
      <Layout style={{ height: '100%', backgroundColor: 'white' }}>
        <Header />
        <div className="content-wrapper" style={{ height: '100%' }}>
          {display && display.contents[dialogIndex].character !== '선택' && (
            <div>
              <div className="game-image-wrapper">
                <img
                  className="game-image"
                  src={display.contents[dialogIndex].image}
                  style={{ textAlign: 'center' }}
                  alt="게임화면"
                />
              </div>

              <div className="storyline">
                <img className="story-left-bar" src={Storyleft} alt="왼쪽바" />
                <div className="story-text">
                  <div className="character-text">
                    <div className="character-name">{display.contents[dialogIndex].character}</div>
                    <div className="character-dialog">
                      <Typewriter
                        options={{
                          strings: display.contents[dialogIndex].sentence,
                          autoStart: true,
                          delay: 80,
                          loop: false,
                        }}
                      />
                    </div>
                  </div>
                  <div className="next-btn">
                    <Button onClick={goToNextMessage} style={{ textAlign: 'center' }}>
                      ▶︎
                    </Button>
                  </div>
                </div>
                <img className="story-right-bar" src={Storyright} alt="오른쪽바" />
              </div>
            </div>
          )}

          {display && display.contents[dialogIndex].character === '선택' && gameSelection && (
            <div>
              {/* <div style={{ margin: '0 auto', textAlign: 'center' }}> */}
              <div className="game-image-wrapper">
                <img className="game-image" src={selection} alt="게임화면" />
              </div>
              <div className="storyline">
                <img className="story-left-bar" src={Storyleft} alt="왼쪽바" />
                <div className="story-text">
                  <Radio.Group
                    style={{ fontSize: '0.8em' }}
                    onChange={onChangeSelect}
                    value={select}
                  >
                    <Space direction="vertical">
                      <Radio value={0}>{selections[stageId - 1].selections[0]}</Radio>
                      <Radio value={1}>{selections[stageId - 1].selections[1]}</Radio>
                      <Radio value={2}>{selections[stageId - 1].selections[2]}</Radio>
                    </Space>
                  </Radio.Group>
                  <div className="select-btn">
                    <Button onClick={selectAnswer} style={{ textAlign: 'center' }}>
                      선택
                    </Button>
                  </div>
                </div>
                <img className="story-right-bar" src={Storyright} alt="오른쪽바" />
              </div>
              {/* <div className="select-box">
                <div>
                  <Radio.Group onChange={onChangeSelect} value={select}>
                    <Space direction="vertical">
                      <Radio value={0}>{selections[stageId - 1].selections[0]}</Radio>
                      <Radio value={1}>{selections[stageId - 1].selections[1]}</Radio>
                      <Radio value={2}>{selections[stageId - 1].selections[2]}</Radio>
                    </Space>
                  </Radio.Group>
                </div>
                <div className="select-btn">
                  <Button onClick={selectAnswer} style={{ textAlign: 'center' }}>
                    선택
                  </Button>
                </div>
              </div> */}
            </div>
          )}
          <GameModal
            modalTitle={'MISSION FAIL ㅠ.ㅠ'}
            modalVisible={isModalVisible}
            handleCancel={handleCancel}
            handleOk={handleOk}
            f
            modalOkText={'아니요'}
            modalCancelText={'네'}
            modalText={'GAME OVER ... 다시 플레이 하시겠습니까?'}
          ></GameModal>
          {/* <Modal
            title="MISSION FAIL ㅠ.ㅠ"
            visible={isModalVisible}
            onOk={handleCancel}
            onCancel={handleOk}
            okText="아니요"
            cancelText="네"
          >
            <p>GAME OVER ... 다시 플레이 하시겠습니까?</p>
          </Modal> */}
        </div>
        <Footer />
      </Layout>
    </>
  );
};

export default Game;
