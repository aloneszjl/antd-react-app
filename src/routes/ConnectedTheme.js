import React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { getTheme } from '../containers/theme/ducks';
import ConnectedRouter from './ConnectedRouter';

type Props = {
  theme: Object,
};

const ConnectedTheme = ({ theme, ...rest }: Props) => (
  <ThemeProvider theme={theme}>
    <ConnectedRouter {...rest} />
  </ThemeProvider>
);

export default connect(state => ({ theme: getTheme(state) }))(ConnectedTheme);
