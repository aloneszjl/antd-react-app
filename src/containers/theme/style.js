export const defaultMode = "red";
const base = 1;
const hd = size => `${size * base}px`;

export default {
  hd,
  mode: defaultMode,
  primary: "#e03c3c",
  unselectedTintColor: "#949494",
  defaultIconTintColor: "#949494",
  footerHeiht: hd(50),
  headerHeight: hd(45),
  size: {
    icon: {
      xxs: hd(15),
      xs: hd(18),
      sm: hd(21),
      md: hd(25),
      lg: hd(36)
    }
  }
};
