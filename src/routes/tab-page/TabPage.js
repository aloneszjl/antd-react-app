import React, { Component } from "react";
import { TabBar } from "antd-mobile";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { Icon } from "../../components";
import theme from "../../style/theme";
import { Home } from "../home";
import { Profile } from "../profile";
import "../../index.less";

class TabPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "redTab",
      hidden: false
    };
  }

  render() {
    return (
      <TabBar
        unselectedTintColor={theme.unselectedTintColor}
        tintColor={theme.brandPrimary}
        barTintColor="white"
        hidden={this.state.hidden}
      >
        <TabBar.Item
          icon={<Icon icon="home-o" />}
          selectedIcon={<Icon icon="home" primary />}
          title="首页"
          key="首页"
          selected={this.state.selectedTab === "redTab"}
          onPress={() => {
            this.setState({
              selectedTab: "redTab"
            });
          }}
        >
          <Home />
        </TabBar.Item>
        <TabBar.Item
          icon={<Icon icon="profile-o" />}
          selectedIcon={<Icon icon="profile" primary />}
          title="我"
          key="我"
          selected={this.state.selectedTab === "greenTab"}
          onPress={() => {
            this.setState({
              selectedTab: "greenTab"
            });
          }}
        >
          <Profile />
        </TabBar.Item>
      </TabBar>
    );
  }
}

export default connect(null, {
  push
})(TabPage);
