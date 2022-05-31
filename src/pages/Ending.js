import { React, useEffect, useState } from 'react';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import { Layout } from 'antd';
import 'antd/dist/antd.min.css';
import '../css/Game.css';
const Ending = () => {
  return (
    <Layout>
      <Header />
      <Footer />
    </Layout>
  );
};

export default Ending;
