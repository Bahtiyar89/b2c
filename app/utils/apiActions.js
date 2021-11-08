import axios from 'axios';
import { APP_API_URL } from 'react-native-dotenv';

import utility from '../utils/Utility';

const token = utility.getItem('token');
export const doGet = async (uri, params = {}) => {
  console.log('${APP_API_URL}', `${APP_API_URL}` + uri);
  console.log('params', params);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    params,
  };
  return await axios.get(`${APP_API_URL}` + uri, config);
};

export const doPost = async (uri, postData, params = {}) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    params,
  };
  return await axios.post(`${APP_API_URL}` + uri, postData, config);
};

export const doPostFormData = async (uri, postData, params = {}) => {
  console.log('params ', postData);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params,
  };
  return await axios.post(`${APP_API_URL}` + uri, postData, config);
};

export const doPatch = async (uri, patchData, params = {}) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    params,
  };
  return await axios.patch(`${APP_API_URL}` + uri, patchData, config);
};

/*

export const doPut = (uri, putData, params = {}) => {
  return axiosInstance.put(`${ROOT_URL}` + "/api/" + uri, putData, {
    params
  });
};

export const doDelete = (uri, delData, params = {}) => {
  return axiosInstance.delete(`${ROOT_URL}` + "/api/" + uri, delData, {
    params
  });
};

export const doGetCancelToken = (uri, token, params = {}) => {
  return axiosInstance.get(`${ROOT_URL}` + "/api/" + uri, {
    params,
    cancelToken: token
  });
};

export const doPostExcel = (uri, postData, params = {}) => {
  return axiosInstance.post(`${ROOT_URL}` + "/api/" + uri, postData, {
    params,
    responseType: "blob"
  });
};
*/
