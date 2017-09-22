import React from "react";
import { Icon } from "antd-mobile";
import theme from "../style/theme";
import Svg from "../svg";

type Props = {
  primary?: boolean,
  style?: Object,
  icon: string,
  size?: string,
  className?: string
};

const CustomIcon = ({
  icon,
  primary,
  className = "",
  size = "md",
  style,
  ...rest
}: Props) => {
  let fill = theme.unselectedTintColor;
  if (primary) {
    fill = theme.brandPrimary;
  }

  if (!Svg[icon]) {
    return (
      <Icon
        style={{
          fill,
          ...style
        }}
        className={className}
        type={icon}
        {...rest}
      />
    );
  }

  return (
    <svg
      className={`am-icon am-icon-${Svg[icon].substr(
        1
      )} am-icon-${size} ${className}`}
      {...rest}
    >
      <use xlinkHref={Svg[icon]} />
    </svg>
  );
};

export default CustomIcon;
