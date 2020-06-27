// @ts-nocheck
import axios from "axios";
import { authHeader } from "./authHeader";
import { toastr } from "react-redux-toastr";

const api = "https://5e9c7e640fd0b50016f74630.mockapi.io";

// config interceptors
const httpClient = axios.create();

httpClient.defaults.baseURL = "http://localhost:8080/";

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
  return httpClient.get("users/all");
};

export const getUser = (id) => {
  return httpClient.get(`users/${id}`);
};

export const addUser = (user) => {
  return httpClient.post("users", user);
};

export const updateUser = (id, user) => {
  return httpClient.put(`users/${id}`, user);
};

export const deleteUser = (id) => {
  return httpClient.delete(`api/users/${id}`);
};

export const getUserDropdown = () => {
  return httpClient.get(`users/support/dropdown`);
};

// AUTHENTICATION
export const login = (acc) => {
  return httpClient.post("accounts/signin", acc);
};

export const getCurrentUser = () => {
  return httpClient.get("api/auth/me");
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

export const validateTokenInfo = (token) => {
  return httpClient.post("accounts/verify-me", token);
};

// Class Manage
export const getAllClasses = () => {
  return httpClient.get("classes/all");
};

export const getClassById = (id) => {
  return httpClient.get(`classes/${id}`);
};

export const createClass = (data) => {
  return httpClient.post("classes", data);
};

export const updateClass = (id, data) => {
  return httpClient.put(`classes/${id}`, data);
};

export const deleteClass = (id) => {
  return httpClient.delete(`classes/${id}`);
};

export const getClassDropdown = () => {
  return httpClient.get(`classes/support/dropdown`);
};

export const getAllClassesInDay = () => {
  return httpClient.get(`classes-in-day`);
};


// Shift Manage
export const getAllShifts = () => {
  return httpClient.get("shifts/all");
};

export const getShiftById = (id) => {
  return httpClient.get(`shifts/${id}`);
};

export const createShift = (data) => {
  return httpClient.post("shifts", data);
};

export const updateShift = (id, data) => {
  return httpClient.put(`shifts/${id}`, data);
};

export const deleteShift = (id) => {
  return httpClient.delete(`shifts/${id}`);
};

//Document Manage
export const getAllDocuments = () => {
  return httpClient.get("documents/all");
};

export const getDocument = (id) => {
  return httpClient.get(`documents/${id}`);
};

export const createDocument = (data) => {
  return httpClient.post("documents", data);
};

export const updateDocument = (id, data) => {
  return httpClient.put(`documents/${id}`, data);
};

export const deleteDocument = (id) => {
  return httpClient.delete(`documents/${id}`);
};

export const getDocumentDropdown = () => {
  return httpClient.get(`documents/support/dropdown`);
};

//Category
export const getAllCategories = () => {
  return httpClient.get("categories/all");
};

export const getCategory = (id) => {
  return httpClient.get(`categories/${id}`);
};

export const createCategory = (data) => {
  return httpClient.post("categories", data);
};

export const updateCategory = (id, data) => {
  return httpClient.put(`categories/${id}`, data);
};

export const deleteCategory = (id) => {
  return httpClient.delete(`categories/${id}`);
};

export const getCategoryDropdown = () => {
  return httpClient.get(`categories/support/dropdown`);
};

//Student
export const getAllStudents = () => {
  return httpClient.get("students/all");
};

export const getStudent = (id) => {
  return httpClient.get(`students/${id}`);
};

export const createStudent = (data) => {
  return httpClient.post("students", data);
};

export const updateStudent = (id, data) => {
  return httpClient.put(`students/${id}`, data);
};

export const updateLevelStudent = (id, data) => {
  return httpClient.put(`students/level/${id}`, data);
};

export const deleteStudent = (id) => {
  return httpClient.delete(`students/${id}`);
};

export const blockStudent = (id) => {
  return httpClient.get(`students/block/${id}`);
};

//Course
export const getCourseDropdown = () => {
  return httpClient.get("courses/support/dropdown");
};

// Admin Manage
export const getAllAdmins = () => {
  return httpClient.get("admins/all");
};

export const createAdmin = (data) => {
  return httpClient.post("admins", data);
};

export const blockAdmin = (id) => {
  return httpClient.get(`admins/${id}`);
};

//Teacher Manage
export const getAllTeachers = () => {
  return httpClient.get("teachers/all");
};

export const getTeacher = (id) => {
  return httpClient.get(`teachers/${id}`);
};

export const createTeacher = (data) => {
  return httpClient.post("teachers", data);
};

export const updateTeacher = (id, data) => {
  return httpClient.put(`teachers/${id}`, data);
};

export const deleteTeacher = (id) => {
  return httpClient.delete(`teachers/${id}`);
};

export const blockTeacher = (id) => {
  return httpClient.get(`teachers/block/${id}`);
};

export const getTeacherDropdown = () => {
  return httpClient.get(`teachers/support/dropdown`);
};

//Comment Manage
export const getAllComments = () => {
  return httpClient.get("comments/all");
};

export const viewComment = (id) => {
  return httpClient.get(`comments/${id}`);
};

export const blockComment = (id, data) => {
  return httpClient.put(`comments/${id}`, data);
};

export const deleteComment = (id) => {
  return httpClient.delete(`comments/${id}`);
};

//Feedback
export const getAllFeedbacks = () => {
  return httpClient.get("feedbacks/all");
};

export const createFeedback = (data) => {
  return httpClient.post("feedbacks", data);
};

export const deleteFeedback = (id) => {
  return httpClient.delete(`feedbacks/${id}`);
};

//Absence Manage
export const getAllAbsences = () => {
  return httpClient.get("absences/all");
};

export const getAbsence = (id) => {
  return httpClient.get(`absences/${id}`);
};

export const createAbsence = (data) => {
  return httpClient.post("absences", data);
};

export const updateAbsence = (id, data) => {
  return httpClient.put(`absences/${id}`, data);
};

export const deleteAbsence = (id) => {
  return httpClient.delete(`absences/${id}`);
};

export const confirmAbsence = (id) => {
  return httpClient.get(`absences/confirm/${id}`);
};