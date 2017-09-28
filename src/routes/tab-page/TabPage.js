import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import { connect } from 'react-redux';
import { replace } from 'react-router-redux';
import DocumentTitle from 'react-document-title';
import { Icon } from '../../components';
import { getTheme } from '../../containers/theme/ducks';
import { Home } from '../home';
import { Profile } from '../profile';
import { TabTitle } from './constants';
import '../../index.less';

const tabs = [
  {
    icon: 'home',
    title: 'home',
    children: Home,
  },
  {
    icon: 'profile',
    title: 'profile',
    children: Profile,
  },
];

type Props = {
  match: Object,
  replace: Function,
  theme: Object,
};

class TabPage extends Component {
  props: Props;
  constructor(props) {
    super(props);
    this.state = {
      hidden: false,
    };
  }

  onPress = (title) => {
    const { match: { params }, replace } = this.props;
    if (title !== params.item) {
      replace(`/tab/${title}`);
    }
  };

  render() {
    const { match: { params }, theme } = this.props;
    return (
      <DocumentTitle title={TabTitle[params.item]}>
        <TabBar
          unselectedTintColor={theme.unselectedTintColor}
          tintColor={theme.primary}
          barTintColor="white"
          hidden={this.state.hidden}
        >
          {tabs.map(item => (
            <TabBar.Item
              icon={<Icon icon={`${item.icon}-o`} />}
              selectedIcon={<Icon icon={item.icon} primary />}
              title={TabTitle[item.title]}
              key={item.title}
              selected={params.item === item.title}
              onPress={() => this.onPress(item.title)}
            >
              <item.children {...this.props} />
            </TabBar.Item>
          ))}
        </TabBar>
      </DocumentTitle>
    );
  }
}

export default connect(
  state => ({
    theme: getTheme(state),
  }),
  {
    replace,
  },
)(TabPage);
