import React, { useContext } from "react";
import { Layout, Menu, Button } from "antd";
import { Link } from "react-router-dom";

import { AuthContext } from "../context/auth";

const { Header } = Layout;

const NavLayout = () => {
  const { user, logout } = useContext(AuthContext);

  const pathName = window.location.pathname;
  const path = pathName === "/" ? 1 : pathName === "/login" ? 2 : 3;

  const menuBar = user ? (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[`${path}`]}>
          <Menu.Item key="1">
            <Link to="/" />
            {user.userName}
          </Menu.Item>
          <Menu.Item>
            <Button onClick={logout}> Logout</Button>
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  ) : (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[`${path}`]}>
          <Menu.Item key="1">
            <Link to="/" />
            Home
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/login" />
            Login
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/register" />
            Register
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );

  return menuBar;
};

export default NavLayout;
