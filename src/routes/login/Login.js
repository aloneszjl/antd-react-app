import React from "react";
import DocumentTitle from "react-document-title";
import { Header, Container } from "../../components";

const Login = () => (
  <DocumentTitle title="登录">
    <div className="Login">
      <Header mode="dark">登录</Header>
      <Container hasHeader>你好</Container>
    </div>
  </DocumentTitle>
);

export default Login;
