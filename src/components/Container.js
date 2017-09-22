import React from "react";

type Props = {
  test?: boolean
};

const Container = (props: Props) => <div>{props.children}</div>;

export default Container;
