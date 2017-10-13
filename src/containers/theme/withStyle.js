import React, { PureComponent } from 'react';
import isFunction from 'lodash/isFunction';
import { withTheme } from 'styled-components';
import { StyleSheet, css } from 'aphrodite/no-important';

export { css };

const withStyle = styles => Component => {
  class ComponentWithStyles extends PureComponent {
    props: {
      theme: Object,
    };

    render() {
      const { theme, ...restProps } = this.props;
      return (
        <Component
          {...restProps}
          classes={
            isFunction(styles)
              ? StyleSheet.create(styles(theme))
              : StyleSheet.create(styles)
          }
        />
      );
    }
  }

  ComponentWithStyles.defaultProps = {
    theme: {},
    classes: {},
  };

  return isFunction(styles)
    ? withTheme(ComponentWithStyles)
    : ComponentWithStyles;
};

export default withStyle;
