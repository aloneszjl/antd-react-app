import React from "react";
import { Icon } from "antd-mobile";
import theme from "../style/theme";
import Svg from "../svg";

type Props = {
  primary?: boolean,
  style?: Object,
  icon: string
};

const CustomIcon = ({ icon, primary, style, ...rest }: Props) => {
  let fill = theme.unselectedTintColor;
  if (primary) {
    fill = theme.brandPrimary;
  }

  if (!Svg[icon]) {
  }

  return (
    <Icon
      style={{
        fill,
        ...style
      }}
      type={Svg[icon] || icon}
      {...rest}
    />
  );
};

export default CustomIcon;
