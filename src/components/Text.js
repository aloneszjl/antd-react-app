import React from 'react';
import styled from 'styled-components';

const Text = styled.span`
  display: inline-block;
  color: ${({ primary, theme }) =>
    (primary ? theme.primary : theme.defaultTextColor)};
`;

const EllipsisText = Text.extend`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const StyledText = ({ ellipsis, ...rest }: { ellipsis?: boolean }) =>
  (ellipsis ? <EllipsisText {...rest} /> : <Text {...rest} />);

StyledText.defaultProps = {
  ellipsis: false,
};

export default StyledText;
