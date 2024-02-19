import React, { FC } from 'react';
import styles from './homePage.module.scss';
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Layout, Menu, theme } from "antd";
import type { MenuProps } from "antd";
import { menuItems } from './config';


interface ComponentProps {
  isShowLogin?: boolean,
  navigate: (v:string) => void,
}

const { Header, Content, Footer, Sider } = Layout;


const items = menuItems.map((item, index) => ({
  key: String(index + 1),
  icon: React.createElement(item.icon),
  label: item.label,
  path: item?.path,
  children: item?.chilrden?.map((subItem: any, subIndex) => {
    return {
      key: String(subIndex + 242),
      icon: React.createElement(subItem.icon),
      label: subItem.label,
      path: subItem?.path
    };
  })
}));


const HomePageComponent: FC<ComponentProps> = (props) => {
  // const { navigate } = props;
   const {
     token: { colorBgContainer, borderRadiusLG }
   } = theme.useToken();
   const navigate = useNavigate();

   const onMenuItemClick = (event: any) => {
     const currentElement = event.domEvent.currentTarget;
     if (currentElement != null && currentElement.getAttribute("path")) {
       const currentPath = currentElement.getAttribute("path");

        navigate(currentPath);
     }
   };
  
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
              <Outlet />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED &
            VPagent13
          </Footer>
        </Layout>
      </Layout>
    );
};



export default HomePageComponent;