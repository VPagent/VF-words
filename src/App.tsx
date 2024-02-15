
import { FC } from 'react';
import ClientRoutes from './ClientRoutes';
import type { MenuProps } from "antd";

import React from "react";
// import { UploadOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { UserOutlined , RightSquareOutlined } from "@ant-design/icons";

import { Layout, Menu, theme } from "antd";
import { Link, useNavigate } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

const menuItems = [
  { icon: UserOutlined, label: "Account", path:"/" },
  { icon: RightSquareOutlined, label: "Tests", path:"/tests" }
];

const items = menuItems.map((item, index) => ({
  key: String(index + 1),
  icon: React.createElement(item.icon),
  label: item.label,
  path: item.path
}));


const App: FC = () => {

    const {
      token: { colorBgContainer, borderRadiusLG }
    } = theme.useToken();
  const navigate = useNavigate();
  
  const onMenuItemClick = (event:any) => {
    const currentElement = event.domEvent.currentTarget;
    if (currentElement != null) {

      const currentPath = currentElement.getAttribute("path");
      navigate(currentPath);
    }

  }
  
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {}}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={items}
          onClick={(e) => onMenuItemClick(e)}

        />

      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG
            }}
          >
            <ClientRoutes />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
