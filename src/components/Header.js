import React, { Component } from 'react';
import { NavBar } from 'antd-mobile';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { goBack } from 'react-router-redux';
import Icon from './Icon';
import Text from './Text';

const BackIcon = Icon.extend`
  margin-top: ${({ theme }) => theme.hd(2)};
  fill: ${({ mode }) => (mode === 'dark' ? 'white' : 'black')};
`;

const BackButton = ({ iconName, ...rest }: { iconName: boolean }) =>
  (iconName ? <BackIcon {...rest} /> : null);

const HeaderTitle = styled(Text)`
  color: ${({ mode }) => (mode === 'dark' ? 'white' : 'black')};
`;

type Props = {
  onLeftClick?: Function,
  goBack: Function,
  mode: string,
  iconName?: boolean,
  children: any,
};

class Header extends Component {
  props: Props;

  static defaultProps = {
    onLeftClick: () => {},
    mode: 'dark',
    iconName: true,
  };

  onLeftClick = (...args) => {
    const { onLeftClick, goBack } = this.props;
    if (onLeftClick) {
      return onLeftClick(...args);
    }
    goBack();
  };

  render() {
    const { goBack, mode, iconName, children, ...rest } = this.props;
    return (
      <NavBar
        mode={mode}
        iconName={false}
        leftContent={<BackButton iconName={iconName} mode={mode} icon="left" />}
        {...rest}
        onLeftClick={this.onLeftClick}
      >
        <HeaderTitle ellipsis mode={mode}>
          {children}
        </HeaderTitle>
      </NavBar>
    );
  }
}

const StyledHeader = styled(Header)`
  background-color: ${({ mode, theme }) =>
    (mode === 'light' ? 'white' : `${theme.primary} !important`)};
`;

export default connect(null, { goBack })(StyledHeader);
