import React, { Component } from "react";
import { NavBar } from "antd-mobile";
import { connect } from "react-redux";
import { goBack } from "react-router-redux";

type Props = {
  onLeftClick?: Function,
  goBack: Function
};

class Header extends Component {
  props: Props;

  onLeftClick = (...args) => {
    const { onLeftClick, goBack } = this.props;
    if (onLeftClick) {
      return onLeftClick(...args);
    }
    goBack();
  };

  render() {
    const { goBack, ...rest } = this.props;
    return <NavBar mode="dark" {...rest} onLeftClick={this.onLeftClick} />;
  }
}

export default connect(null, { goBack })(Header);
