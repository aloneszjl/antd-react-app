import React from "react";
import styled from "styled-components";
import { FOOTER_HEIGHT, HEADER_HEIGHT } from "../style/theme";

type Props = {
  hasFooter?: boolean,
  hasHeader?: boolean
};

const Div = styled.div`
  margin-top: ${props => (props.hasHeader ? `${HEADER_HEIGHT}px` : "0")};
  margin-bottom: ${props => (props.hasFooter ? `${FOOTER_HEIGHT}px` : "0")};
`;

const Container = (props: Props) => <Div {...props} />;
export default Container;
