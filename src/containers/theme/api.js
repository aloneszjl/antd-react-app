// import api from "../../utils/api";

const primaryColor = {
  red: '#e03c3c',
  green: '#649e23',
  blue: '#108ee9',
};

export const getPrimaryColorByMode = ({ mode }) =>
  new Promise(resolve => resolve(primaryColor[mode]));
