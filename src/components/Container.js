import React from 'react';
import styled from 'styled-components';

type Props = {
  hasFooter?: boolean,
  hasHeader?: boolean,
};

const Div = styled.div`
  margin-top: ${({ theme, hasHeader }) =>
    (hasHeader ? theme.headerHeight : '0')};
  margin-bottom: ${({ theme, hasFooter }) =>
    (hasFooter ? theme.footerHeiht : '0')};
`;

const Container = (props: Props) => <Div {...props} />;
export default Container;
