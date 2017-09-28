import React from 'react';
import styled from 'styled-components';

type Props = {
  primary?: boolean,
  fixed?: boolean,
};

const Div = styled.div`
  height: ${({ theme }) => theme.footerHeight};
  background: ${({ primary, theme }) => (primary ? theme.primary : 'white')};
  color: ${({ primary, theme }) => (primary ? 'white' : theme.primary)};
  width: 100%;
  position: ${({ fixed }) => (fixed ? 'fixed' : 'relative')};
`;

const Footer = (props: Props) => <Div {...props} />;
export default Footer;
