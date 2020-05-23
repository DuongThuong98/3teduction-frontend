/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./App.css";
import TeacherComponent from "./components/Teacher/Teacher.component";
import StudentComponent from "./components/Student/Student.component";
import Home from "./components/Home/Home";
import AdminComponent from "./components/Admin/Admin.component";
import ClassComponent from "./components/Class/Class.component";
import CourseComponent from "./components/Course/Course.component";
import DocumentComponent from "./components/Document/Document.component";
import ExerciseComponent from "./components/Exercise/Exercise.component";
import FeedbackComponent from "./components/Feedback/Feedback.component";
import TeacherAddEditComponent from "./components/Teacher/TeacherAddEdit.component";
import NotFound from "./components/PageNotFound/PageNotFound";

const routes = [
  {
    path: "/",
    exact: true,
    pageTitle: "Trang chủ",
    main: () => <Home></Home>,
  },

  // teacher
  {
    path: "/teachers/edit/:id",
    exact: true,
    pageTitle: "Edit Teacher",
    main: () => <TeacherAddEditComponent></TeacherAddEditComponent>,
  },
  {
    path: "/teachers/add",
    exact: true,
    pageTitle: "Add Teacher",
    main: () => <TeacherAddEditComponent></TeacherAddEditComponent>,
  },
  {
    path: "/teachers",
    exact: true,
    pageTitle: "List Teacher",
    main: () => <TeacherComponent></TeacherComponent>,
  },

  //student
  {
    path: "/students",
    exact: true,
    pageTitle: "List Student",
    main: () => <StudentComponent></StudentComponent>,
  },
  {
    path: "/students/edit/:id",
    exact: true,
    pageTitle: "Edit Student",
    main: () => <StudentComponent></StudentComponent>,
  },
  {
    path: "/students/add",
    exact: true,
    pageTitle: "Add Student",
    main: () => <TeacherAddEditComponent></TeacherAddEditComponent>,
  },

  //admin
  {
    path: "/admins",
    exact: true,
    pageTitle: "List Admin",
    main: () => <AdminComponent></AdminComponent>,
  },
  {
    path: "/admins/edit/:id",
    exact: true,
    pageTitle: "Edit Admin",
    main: () => <AdminComponent></AdminComponent>,
  },
  {
    path: "/admins/add",
    exact: true,
    pageTitle: "Add Admin",
    main: () => <AdminComponent></AdminComponent>,
  },

  //admin
  {
    path: "/admins",
    exact: true,
    pageTitle: "List Admin",
    main: () => <AdminComponent></AdminComponent>,
  },
  {
    path: "/admins/edit/:id",
    exact: true,
    pageTitle: "Edit Admin",
    main: () => <AdminComponent></AdminComponent>,
  },
  {
    path: "/admins/add",
    exact: true,
    pageTitle: "Add Admin",
    main: () => <AdminComponent></AdminComponent>,
  },

  //class
  {
    path: "/classes",
    exact: true,
    pageTitle: "List Class",
    main: () => <ClassComponent></ClassComponent>,
  },
  {
    path: "/classes/edit/:id",
    exact: true,
    pageTitle: "Edit Class",
    main: () => <ClassComponent></ClassComponent>,
  },
  {
    path: "/classes/add",
    exact: true,
    pageTitle: "Add Class",
    main: () => <ClassComponent></ClassComponent>,
  },

  //course
  {
    path: "/courses",
    exact: true,
    pageTitle: "List Course",
    main: () => <CourseComponent></CourseComponent>,
  },
  {
    path: "/courses/edit/:id",
    exact: true,
    pageTitle: "Edit Course",
    main: () => <CourseComponent></CourseComponent>,
  },
  {
    path: "/courses/add",
    exact: true,
    pageTitle: "Add Course",
    main: () => <CourseComponent></CourseComponent>,
  },

  //Document
  {
    path: "/documents",
    exact: true,
    pageTitle: "List Document",
    main: () => <DocumentComponent></DocumentComponent>,
  },
  {
    path: "/documents/edit/:id",
    exact: true,
    pageTitle: "Edit Document",
    main: () => <DocumentComponent></DocumentComponent>,
  },
  {
    path: "/documents/add",
    exact: true,
    pageTitle: "Add Document",
    main: () => <DocumentComponent></DocumentComponent>,
  },

  //Exercise
  {
    path: "/exercises",
    exact: true,
    pageTitle: "List Exercise",
    main: () => <ExerciseComponent></ExerciseComponent>,
  },
  {
    path: "/exercises/edit/:id",
    exact: true,
    pageTitle: "Edit Exercise",
    main: () => <ExerciseComponent></ExerciseComponent>,
  },
  {
    path: "/exercises/add",
    exact: true,
    pageTitle: "Add Exercise",
    main: () => <ExerciseComponent></ExerciseComponent>,
  },

  //login
  {
    path: "/login",
    exact: true,
    pageTitle: "Login",
    // main:()=><LoginComponent></LoginComponent>
  },

  //login
  {
    path: "/register",
    exact: true,
    pageTitle: "Register",
    // main:()=><RegisterComponent></RegisterComponent>
  },

  //feedback
  {
    path: "/feedbacks",
    exact: true,
    pageTitle: "List Feedback",
    main: () => <FeedbackComponent></FeedbackComponent>,
  },
  {
    path: "/feedbacks/edit/:id",
    exact: true,
    pageTitle: "Edit Feedback",
    main: () => <FeedbackComponent></FeedbackComponent>,
  },
  {
    path: "/feedbacks/add",
    exact: true,
    pageTitle: "Add Feedback",
    main: () => <FeedbackComponent></FeedbackComponent>,
  },

  //profile
  {
    path: "/my-profile",
    exact: true,
    pageTitle: "Get My Account",
    // main:()=><ProfileComponent></ProfileComponent>
  },
  {
    path: "/change-password",
    exact: true,
    pageTitle: "Change password ",
    // main:()=><ProfileChangPasswordComponent></ProfileChangPasswordComponent>
  },

  //not found
  {
    path: "",
    exact: true,
    main: () => <NotFound></NotFound>,
  },
];

export default routes;
