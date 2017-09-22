import React, { Component } from "react";
import { TabBar, NavBar, SearchBar } from "antd-mobile";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { Icon, Container } from "../../components";
import theme from "../../style/theme";
import "../../index.css";

class TabPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "redTab",
      hidden: false
    };
  }

  render() {
    console.log(this.props);
    return (
      <TabBar
        unselectedTintColor={theme.unselectedTintColor}
        tintColor={theme.brandPrimary}
        barTintColor="white"
        hidden={this.state.hidden}
      >
        <TabBar.Item
          icon={<Icon icon="profile" />}
          selectedIcon={<Icon icon="profile" primary />}
          title="口碑"
          key="口碑"
          selected={this.state.selectedTab === "redTab"}
          onPress={() => {
            this.setState({
              selectedTab: "redTab"
            });
          }}
          children="口碑"
        />
        <TabBar.Item
          icon={<Icon icon="profile-o" />}
          selectedIcon={<Icon icon="profile-o" primary />}
          title="朋友"
          key="朋友"
          selected={this.state.selectedTab === "greenTab"}
          onPress={() => {
            this.setState({
              selectedTab: "greenTab"
            });
          }}
        >
          <Container>朋友</Container>
        </TabBar.Item>
      </TabBar>
    );
  }
}

export default connect(null, {
  push
})(TabPage);
