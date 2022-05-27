import { Layout, Menu, Breadcrumb, Button, Card, Col, Row, Carousel } from 'antd';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.min.css';
import '../css/Home.css';
import styled from 'styled-components';

const { Header, Content, Footer } = Layout;
const { Meta } = Card;

const SiteLayoutContent = styled.div`
  min-height: 280px;
  padding: 16px;
  background: #fff;
`;

const Home = () => {
  return (
    <Layout className="layout" style={{ height: '100%' }}>
      <Header className="header">
        <div className="header-logo">Test template</div>
      </Header>
      <Content className="layout-wrapper" style={{ padding: '0 1em' }}></Content>
      <div className="footer-wraper">
        <p className="home-footer">test</p>
      </div>
    </Layout>
  );
};

export default Home;
