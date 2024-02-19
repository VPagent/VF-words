
import { UserOutlined , RightSquareOutlined } from "@ant-design/icons";
import { Link, useNavigate } from 'react-router-dom';
import { Layout, Menu, theme } from "antd";
import ClientRoutes from './ClientRoutes';
import type { MenuProps } from "antd";
import { FC } from 'react';
import React from "react";

// import { UploadOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons";





const App: FC = () => {
  return <ClientRoutes />;
}

export default App;
