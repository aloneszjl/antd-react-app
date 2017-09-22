import defaultStyle from "./default";
import camelCase from "lodash/camelCase";
import reduce from "lodash/reduce";

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
