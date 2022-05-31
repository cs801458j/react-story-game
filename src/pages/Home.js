import { Layout, Menu, Breadcrumb, Button, Card, Col, Row, Carousel } from 'antd';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.min.css';
import '../css/Home.css';
import styled from 'styled-components';
import gameTitle from '../images/game_title.jpeg';
import Header from './Layout/Header';
import Footer from './Layout/Footer';

// const { Header, Content, Footer } = Layout;
const { Content } = Layout;
const { Meta } = Card;

const SiteLayoutContent = styled.div`
  min-height: 280px;
  padding: 16px;
  background: #fff;
`;

const Home = () => {
  return (
    <Layout className="layout" style={{ height: '100%', backgroundColor: 'white' }}>
      <Header />
      <Content className="layout-wrapper" style={{ padding: '0 1em' }}>
        <div className="footer-wraper" style={{ backgroundColor: 'white' }}>
          <div className="main-image-wrapper">
            <img className="main-image" src={gameTitle} alt={'진람쥐'} />
          </div>
          <div className="start">
            <p className="start-text">진람쥐 구출 대작전★</p>
            <Link to="/game">
              <button className="start-btn">start!</button>
            </Link>
          </div>
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};

export default Home;
