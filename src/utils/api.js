// @ts-nocheck
import axios from "axios";
import { authHeader } from "./authHeader";
import { toastr } from "react-redux-toastr";

const api = "https://5e9c7e640fd0b50016f74630.mockapi.io";

// config interceptors
const httpClient = axios.create();

httpClient.defaults.baseURL = "http://localhost:5000/";

httpClient.defaults.headers.post["Content-Type"] = "application/json";
httpClient.interceptors.request.use(function (config) {
  config.headers.Authorization = authHeader().Authorization;
  return config;
});

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

// AUTHENTICATION
export const login = (acc) => {
  return httpClient.post("accounts/signin", acc);
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

// Class Manage
export const getAllClasses = () => {
  return httpClient.get("classes/all");
};

export const getClassById = (id) => {
  return httpClient.get(`classes/${id}`);
};

export const createClass = (classModel) => {
  return httpClient.post("classes", classModel);
};

export const updateClass = (id, classModel) => {
  return httpClient.put(`classes/${id}`, classModel);
};

export const deleteClass = (id) => {
  return httpClient.delete(`classes/${id}`);
};

//Category
export const getCategoryDropdown = () => {
  return httpClient.get("categories/support/dropdown");
};

//Course
export const getCourseDropdown = () => {
  return httpClient.get("courses/support/dropdown");
};
