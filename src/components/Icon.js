import React from 'react';
import styled from 'styled-components';
import Svg from '../svg';

type Props = {
  primary?: boolean,
  icon: string,
  size: string | number,
};

const Icon = ({ icon, primary, ...rest }: Props) => (
  <svg {...rest}>
    <use xlinkHref={Svg[icon]} />
  </svg>
);

Icon.defaultProps = {
  primary: false,
};

const StyledIcon = styled(Icon)`
  fill: ${({ primary, theme }) =>
    (primary ? theme.primary : theme.defaultIconTintColor)};
  width: ${({ size, theme }) =>
    (theme.size.icon[size] ? theme.size.icon[size] : theme.hd(size))};
  height: ${({ size, theme }) =>
    (theme.size.icon[size] ? theme.size.icon[size] : theme.hd(size))};
`;

StyledIcon.defaultProps = {
  size: 'md',
};

export default StyledIcon;
