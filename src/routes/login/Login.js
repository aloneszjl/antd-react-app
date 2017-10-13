import React from 'react';
import DocumentTitle from 'react-document-title';
import { Header, Container } from '../../components';
import withStyle from '../../containers/theme/withStyle';

const styles = {
  test: {
    background: 'red',
  },
};

const Login = ({ classes }: { classes: Object }) => (
  <DocumentTitle title="登录">
    <div className="Login">
      <Header>登录</Header>
      <Container className={classes.test} hasHeader>
        你好
      </Container>
    </div>
  </DocumentTitle>
);

export default withStyle(styles)(Login);
