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
// import ShiftComponent from "./components/Shift/Shift.component";
import NotFound from "./components/PageNotFound/PageNotFound";
import Login from "./components/Login/Login";
import ManageClass from "./components/ManageClass/ManageClass";
import ManageClassForm from "./components/ManageClass/ManageClassForm";

/** @type{import("react-router-config").RouteConfig} */
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
    exact: false,
    pageTitle: "Edit Teacher",
    main: ({ match, history }) => (
      <TeacherAddEditComponent
        match={match}
        history={history}
      ></TeacherAddEditComponent>
    ),
  },
  {
    path: "/teachers/add",
    exact: false,
    pageTitle: "Add Teacher",
    main: ({ history }) => (
      <TeacherAddEditComponent history={history}></TeacherAddEditComponent>
    ),
  },
  {
    path: "/teachers",
    exact: false,
    pageTitle: "List Teacher",
    main: () => <TeacherComponent></TeacherComponent>,
  },

  //student
  {
    path: "/students",
    exact: false,
    pageTitle: "List Student",
    main: () => <StudentComponent></StudentComponent>,
  },
  {
    path: "/students/edit/:id",
    exact: false,
    pageTitle: "Edit Student",
    main: () => <StudentComponent></StudentComponent>,
  },
  {
    path: "/students/add",
    exact: false,
    pageTitle: "Add Student",
    main: () => <TeacherAddEditComponent></TeacherAddEditComponent>,
  },

  //admin
  {
    path: "/admins",
    exact: false,
    pageTitle: "List Admin",
    main: () => <AdminComponent></AdminComponent>,
  },
  {
    path: "/admins/edit/:id",
    exact: false,
    pageTitle: "Edit Admin",
    main: () => <AdminComponent></AdminComponent>,
  },
  {
    path: "/admins/add",
    exact: false,
    pageTitle: "Add Admin",
    main: () => <AdminComponent></AdminComponent>,
  },

  //admin
  {
    path: "/admins",
    exact: false,
    pageTitle: "List Admin",
    main: () => <AdminComponent></AdminComponent>,
  },
  {
    path: "/admins/edit/:id",
    exact: false,
    pageTitle: "Edit Admin",
    main: () => <AdminComponent></AdminComponent>,
  },
  {
    path: "/admins/add",
    exact: false,
    pageTitle: "Add Admin",
    main: () => <AdminComponent></AdminComponent>,
  },

  //class
  {
    path: "/classes",
    exact: false,
    pageTitle: "List Class",
    main: () => <ClassComponent/>,
  },
  {
    path: "/classes/edit/:id",
    exact: false,
    pageTitle: "Edit Class",
    main: () => <ManageClassForm/>,
  },
  {
    path: "/classes/add",
    exact: false,
    pageTitle: "Add Class",
    main: () => <ManageClassForm/>,
  },

  //class test
  {
    path: "/classes-test",
    exact: false,
    pageTitle: "List Class",
    main: () => <ManageClass></ManageClass>,
  },
  {
    path: "/classes-test/edit/:id",
    exact: false,
    pageTitle: "Edit Class",
    main: () => <ManageClassForm/>,
  },
  {
    path: "/classestest/add",
    exact: true,
    pageTitle: "Add Class",
    main: () => <ManageClassForm/>,
  },

  //course
  {
    path: "/courses",
    exact: false,
    pageTitle: "List Course",
    main: () => <CourseComponent></CourseComponent>,
  },
  {
    path: "/courses/edit/:id",
    exact: false,
    pageTitle: "Edit Course",
    main: () => <CourseComponent></CourseComponent>,
  },
  {
    path: "/courses/add",
    exact: false,
    pageTitle: "Add Course",
    main: () => <CourseComponent></CourseComponent>,
  },

  //Document
  {
    path: "/documents",
    exact: false,
    pageTitle: "List Document",
    main: () => <DocumentComponent></DocumentComponent>,
  },
  {
    path: "/documents/edit/:id",
    exact: false,
    pageTitle: "Edit Document",
    main: () => <DocumentComponent></DocumentComponent>,
  },
  {
    path: "/documents/add",
    exact: false,
    pageTitle: "Add Document",
    main: () => <DocumentComponent></DocumentComponent>,
  },

  //Exercise
  {
    path: "/exercises",
    exact: false,
    pageTitle: "List Exercise",
    main: () => <ExerciseComponent></ExerciseComponent>,
  },
  {
    path: "/exercises/edit/:id",
    exact: false,
    pageTitle: "Edit Exercise",
    main: () => <ExerciseComponent></ExerciseComponent>,
  },
  {
    path: "/exercises/add",
    exact: false,
    pageTitle: "Add Exercise",
    main: () => <ExerciseComponent></ExerciseComponent>,
  },

  //feedback
  {
    path: "/feedbacks",
    exact: false,
    pageTitle: "List Feedback",
    main: () => <FeedbackComponent></FeedbackComponent>,
  },
  {
    path: "/feedbacks/edit/:id",
    exact: false,
    pageTitle: "Edit Feedback",
    main: () => <FeedbackComponent></FeedbackComponent>,
  },
  {
    path: "/feedbacks/add",
    exact: false,
    pageTitle: "Add Feedback",
    main: () => <FeedbackComponent></FeedbackComponent>,
  },

  //profile
  {
    path: "/my-profile",
    exact: false,
    pageTitle: "Get My Account",
    // main:()=><ProfileComponent></ProfileComponent>
  },
  {
    path: "/change-password",
    exact: false,
    pageTitle: "Change password ",
    // main:()=><ProfileChangPasswordComponent></ProfileChangPasswordComponent>
  },
  //Shift
  // {
  //   path: "/shifts",
  //   exact: false,
  //   pageTitle: "List Shift",
  //   main: () => <ShiftComponent />,
  // },
  // {
  //   path: "/shifts/edit/:id",
  //   exact: false,
  //   pageTitle: "Edit Shift",
  //   main: () => <ShiftComponent />,
  // },
  // {
  //   path: "/shifts/add",
  //   exact: false,
  //   pageTitle: "Add Shift",
  //   main: () => <ShiftComponent />,
  // },

  {
    path: "/login",
    exact: false,
    pageTitle: "Login",
    main: Login,
    auth: true,
  },
  //not found
  {
    path: "",
    exact: false,
    auth: true,
    main: () => <NotFound />,
  },

  //register
  {
    path: "/register",
    exact: false,
    pageTitle: "Register",
    // main:()=><RegisterComponent></RegisterComponent>
  },
];

const publicRoutes = [
  //login
  {
    path: "/login",
    exact: false,
    pageTitle: "Login",
    main: () => <Login></Login>,
  },

  //register
  {
    path: "/register",
    exact: false,
    pageTitle: "Register",
    // main:()=><RegisterComponent></RegisterComponent>
  },
];

export default routes;
