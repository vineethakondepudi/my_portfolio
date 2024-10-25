import React from 'react';
import { Layout, Menu } from 'antd';
import { HomeOutlined, UserOutlined, InfoCircleOutlined, MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './Header.css';

const { Header } = Layout;

function AppHeader() {
  return (
    <Header className="header">
      <Menu mode="horizontal" className="menu">
        <Menu.Item key="bio" icon={<UserOutlined />} className="menu-item bio">
          <Link to="/bio">Bio</Link>
        </Menu.Item>
        <Menu.Item key="about" icon={<InfoCircleOutlined />} className="menu-item about">
          <Link to="/about">About</Link>
        </Menu.Item>
        <Menu.Item key="home" icon={<HomeOutlined />} className="menu-item home">
          <Link to="/">Home</Link>
          <MenuOutlined style={{ marginLeft: 38, fontSize: 18 }} />
        </Menu.Item>
      </Menu>
    </Header>
  );
}

export default AppHeader;
