import axios from "axios";
import queryString from "query-string";
// import get from "lodash/get";
// import forOwn from "lodash/forOwn";
// import isObject from "lodash/isObject";
// import history from "../routes/history";
import config from "../config";
// import { getAccessToken } from "../containers/auth/ducks";
// import toast from "./toast";

let store;

export const configureApi = _store => {
  store = _store;
  return store;
};

// const jsonToFormEncoded = data => {
//   const str = [];
//   forOwn(data, (dataValue, dataKey) => {
//     if (isObject(dataValue)) {
//       const d = dataValue;
//       forOwn(d, (value, key) => {
//         if (value) {
//           str.push(
//             `${dataKey}[${encodeURIComponent(key)}]=${encodeURIComponent(
//               value
//             )}`
//           );
//         }
//       });
//     } else if (dataValue) {
//       str.push(
//         `${encodeURIComponent(dataKey)}=${encodeURIComponent(dataValue)}`
//       );
//     }
//   });
//   return str.join("&");
// };

const paramsSerializer = params => queryString.stringify(params); // param=value1&param=value2

// define the api
const api = axios.create({
  baseURL: config.DOMAIN,
  paramsSerializer,
  withCredentials: true
});

// const interceptor = config => {
//   const state = store.getState();
//   const accessToken = getAccessToken(state);

//   if (accessToken) {
//     config.headers.Authorization = `Bearer ${accessToken}`;
//   }
//   if (config.headers["Content-Type"] === "application/x-www-form-urlencoded") {
//     config.data = jsonToFormEncoded(config.data);
//   }
//   return config;
// };

// Add a request interceptor
// api.interceptors.request.use(interceptor);
// api.interceptors.response.use(undefined, error => {
//   if (error.response) {
//     if (error.response.status === 401 || error.response.status === 403) {
//       if (window.location.hash && window.location.hash.indexOf("/login") < 0) {
//         history.push("/login");
//       }
//     }
//   } else if (error.message === "Network Error") {
//     toast.show("网络错误，请检查网络后再试");
//   }
//   return Promise.reject(error);
// });

export default api;
