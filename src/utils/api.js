import axios from "axios";
import { authHeader } from "./authHeader";
import { toastr } from "react-redux-toastr";
import axios from "axios";
import * as Config from "./../constants/Config";

// config interceptors
const httpClient = axios.create();
// const httpClientUpload = axios.create();

httpClient.defaults.baseURL = "https://localhost:5001/";

// httpClient.defaults.baseURL = 'http://192.168.15.217:44362/';

//  httpClient.defaults.baseURL = '';

httpClient.defaults.headers.post["Content-Type"] = "application/json";
httpClient.interceptors.request.use(function (config) {
  config.headers.Authorization = authHeader().Authorization;
  return config;
});

// httpClientUpload.interceptors.request.use(function (config) {
//     config.headers.Authorization =  authHeader().Authorization;
//     return config;
// });

httpClient.interceptors.response.use(
  function (response) {
    if (response.status === 200 && response.data && response.data.message) {
      toastr.success(response.data.message);
    }
    return response;
  },
  function (error) {
    let errorResponse = error.response;

    if (errorResponse.status === 401) {
      toastr.error(errorResponse.data.message);
    }

    if (errorResponse.status === 400) {
      toastr.error(errorResponse.data.message);
    }

    if (errorResponse.status === 403) {
      toastr.error(errorResponse.data.message);
    }

    return Promise.reject(error);
  }
);

export const downloadCVUrl = httpClient.defaults.baseURL;

// User Manage
export const getListUsers = () => {
  return httpClient.get("api/users/all");
};

export const getUser = (id) => {
  return httpClient.get(`api/users/${id}`);
};

export const addUser = (user) => {
  return httpClient.post("api/users", user);
};

export const updateUser = (id, user) => {
  return httpClient.put(`api/users/${id}`, user);
};

export const deleteUser = (id) => {
  return httpClient.delete(`api/users/${id}`);
};

export const getRoles = () => {
  return httpClient.get("api/roles/get-roles");
};

// AUTHENTICATION
export const login = (acc) => {
  return httpClient.post("api/auth/login", acc);
};

export const getCurrentUser = () => {
  return httpClient.get("api/auth/profile");
};

export const updateProfile = (profile) => {
  return httpClient.put("api/auth/profile", profile);
};

export const updatePassword = (password) => {
  const pass = {
    CurrentPassword: password.currentPassword,
    NewPassword: password.newPassword,
  };
  return httpClient.put("api/auth/password", pass);
};

export const isValidEmail = (email) => {
  return httpClient.post("api/auth/forgot-password", email);
};

export const isValidCode = (code) => {
  return httpClient.post("api/auth/verify-code", code);
};

export const resendEmail = (email) => {
  return httpClient.post("api/auth/resend-email", email);
};

export const newPassword = (setting) => {
  const pass = {
    password: setting.password,
    code: setting.code,
  };
  return httpClient.post("api/auth/change-password", pass);
};

export default function callApi(endpoint, method = "GET", body) {
  return axios({
    method: method,
    url: `${Config.API_URL}/${endpoint}`,
    data: body,
  }).catch((err) => {
    console.log(err);
  });
}
