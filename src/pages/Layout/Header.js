import { Layout } from 'antd';
import headerImg from '../../images/header_logo.png';

const Header = () => {
  const { Header } = Layout;

  return (
    <Header className="header">
      <div className="header-logo">
        <img className="header-img" src={headerImg} alt={'진람쥐'} />
      </div>
    </Header>
  );
};

export default Header;
