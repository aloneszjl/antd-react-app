import React from 'react';
// import styled from 'styled-components';
import withStyle, { css } from '../containers/theme/withStyle';

type Props = {
  hasFooter: boolean,
  hasHeader: boolean,
};

const styles = theme => ({
  hasHeader: {
    marginTop: theme.headerHeight,
  },
  hasFooter: {
    marginBottom: theme.footerHeiht,
  },
});

// const Div = styled.div`
//   margin-top: ${({ theme, hasHeader }) =>
//     (hasHeader ? theme.headerHeight : '0')};
//   margin-bottom: ${({ theme, hasFooter }) =>
//     (hasFooter ? theme.footerHeiht : '0')};
// `;

const createClasses = props =>
  css(
    props.hasHeader && props.classes.hasHeader,
    props.hasFooter && props.classes.hasFooter,
    props.className,
  );

const Div = ({
  style,
  className,
  children,
}: {
  style: Object,
  className: string,
  children: any,
}) => (
  <div style={style} className={className}>
    {children}
  </div>
);

Div.defaultProps = {
  style: {},
};

const Container = (props: Props) => (
  <Div {...props} className={createClasses(props)} />
);

Container.defaultProps = {
  hasFooter: false,
  hasHeader: false,
};

export default withStyle(styles)(Container);
