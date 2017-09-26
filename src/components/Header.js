import React, { Component } from "react";
import { NavBar } from "antd-mobile";
import Icon from "./Icon";
import styled from "styled-components";
import { connect } from "react-redux";
import { goBack } from "react-router-redux";

const BackIcon = Icon.extend`
  margin-top: ${({ theme }) => theme.hd(5)};
  fill: ${({ mode, theme }) => (mode === "dark" ? "white" : "black")};
`;

type Props = {
  onLeftClick?: Function,
  goBack: Function
};

class Header extends Component {
  props: Props;

  static defaultProps = {
    mode: "dark"
  };

  onLeftClick = (...args) => {
    const { onLeftClick, goBack } = this.props;
    if (onLeftClick) {
      return onLeftClick(...args);
    }
    goBack();
  };

  render() {
    const { goBack, mode, ...rest } = this.props;
    return (
      <NavBar
        mode={mode}
        iconName={false}
        leftContent={<BackIcon mode={mode} icon="left" />}
        {...rest}
        onLeftClick={this.onLeftClick}
      />
    );
  }
}

const StyledHeader = styled(Header)`
  background-color: ${({ mode, theme }) =>
    mode === "light" ? "white" : `${theme.primary} !important`};
`;

export default connect(null, { goBack })(StyledHeader);
