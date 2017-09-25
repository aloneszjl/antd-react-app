import defaultStyle from "./default";
import camelCase from "lodash/camelCase";
import reduce from "lodash/reduce";

export const FOOTER_HEIGHT = 50;
export const HEADER_HEIGHT = 45;

const styles = {
  unselectedTintColor: "#949494"
};

const theme = reduce(
  defaultStyle,
  (theme, value, key) => {
    theme[camelCase(key)] = value;
    return theme;
  },
  styles
);

export default theme;
