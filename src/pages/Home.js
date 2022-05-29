import { Layout, Menu, Breadcrumb, Button, Card, Col, Row, Carousel } from 'antd';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.min.css';
import '../css/Home.css';
import styled from 'styled-components';
import gameTitle from '../images/game_title.jpeg';
import headerImg from '../images/header_test.png';

const { Header, Content, Footer } = Layout;
const { Meta } = Card;

const SiteLayoutContent = styled.div`
  min-height: 280px;
  padding: 16px;
  background: #fff;
`;

const Home = () => {
  return (
    <Layout className="layout" style={{ height: '100%', backgroundColor: 'white' }}>
      <Header className="header">
        <div className="header-logo">
          🍄🍄
          <img src={headerImg} style={{ width: '15%', height: '15%' }} />
          🍄🍄
        </div>
      </Header>
      <Content className="layout-wrapper" style={{ padding: '0 1em' }}>
        <div className="footer-wraper" style={{ backgroundColor: 'white' }}>
          <div className="main-image">
            <img src={gameTitle} style={{ width: '96%', textAlign: 'center' }} />
          </div>
          <div className="start">
            <p className="start-text">진람쥐 구출하러가기</p>
            <Link to="/game-start">
              <button className="start-btn">START!</button>
            </Link>
          </div>
        </div>
      </Content>
      <Footer className="footer">
        <div className="footer-text">🍄 진혁아 생일 축하해! 🍄</div>
      </Footer>
    </Layout>
  );
};

export default Home;
