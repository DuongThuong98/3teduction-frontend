/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./App.css";
import StudentComponent from "./components/Student/Student.component";
import Home from "./components/Home/Home";
import LearningClass from "./components/LearningClass/LearningClass";
import LearningClassDetail from "./components/LearningClass/LearningClassDetail";
import ExerciseComponent from "./components/Exercise/Exercise.component";
import FeedbackComponent from "./components/Feedback/Feedback.component";
import NotFound from "./components/PageNotFound/PageNotFound";
import Login from "./components/Login/Login";
import ManagerTagSkill from "./view/ManagerTagSkill/ManagerTagSkill.container";
import ManageClass from "./components/ManageClass/ManageClass";
import ManageClassForm from "./components/ManageClass/ManageClassForm";
import ManageShift from "./components/ManageShift/ManageShift";
import ManageShiftForm from "./components/ManageShift/ManageShiftForm";
import ManageDocument from "./components/ManageDocument/ManageDocument";
import ManageDocumentForm from "./components/ManageDocument/ManageDocumentForm";
import ManageAdmin from "./components/ManageAdmin/ManageAdmin";
import ManageAdminForm from "./components/ManageAdmin/ManageAdminForm";
import ManageTeacher from "./components/ManageTeacher/ManageTeacher";
import ManageTeacherForm from "./components/ManageTeacher/ManageTeacherForm";
import ManageComment from "./components/ManageComment/ManageComment";
import ManageCommentForm from "./components/ManageComment/ManageCommentForm";
import TeachingClass from "./components/TeachingClass/TeachingClass";

/** @type{import("react-router-config").RouteConfig} */
const routes = [
  {
    path: "/test",
    exact: true,
    pageTitle: "Trang chủ",
    main: () => <ManagerTagSkill />,
  },
  {
    path: "/",
    exact: true,
    pageTitle: "Trang chủ",
    main: () => <Home></Home>,
  },
  {
    path: "/home",
    exact: false,
    pageTitle: "Trang chủ",
    main: () => <Home></Home>,
  },

  // teacher
  {
    path: "/teachers",
    exact: false,
    pageTitle: "List Teacher",
    main: () => <ManageTeacher />,
  },
  {
    path: "/teachers-edit/:id",
    exact: false,
    pageTitle: "Edit Teacher",
    main: ({ match, history }) => (
      <ManageTeacherForm match={match} history={history} />
    ),
  },
  {
    path: "/teachers-add",
    exact: false,
    pageTitle: "Add Teacher",
    main: ({ history }) => <ManageTeacherForm history={history} />,
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
    main: () => <StudentComponent></StudentComponent>,
  },

  //admin
  {
    path: "/admins",
    exact: false,
    pageTitle: "List Admin",
    main: () => <ManageAdmin />,
  },
  {
    path: "/admins/add",
    exact: false,
    pageTitle: "Add Admin",
    main: () => <ManageAdminForm />,
  },

  //class-is used for manage
  {
    path: "/classes",
    exact: false,
    pageTitle: "List Class",
    main: () => <ManageClass></ManageClass>,
  },
  {
    path: "/classes-edit/:id",
    exact: false,
    pageTitle: "Edit Class",
    main: () => <ManageClassForm />,
  },
  {
    path: "/classes-add",
    exact: true,
    pageTitle: "Add Class",
    main: () => <ManageClassForm />,
  },

  // class is used for learning 
  {
    path: "/l-classes",
    exact: false,
    pageTitle: "List Learning Class",
    main: () => <LearningClass />,
  },
  {
    path: "/l-classes-detail/:id",
    exact: false,
    pageTitle: "Learning Class",
    main: () => <LearningClassDetail />,
  },

  // class is used for teaching 
  {
    path: "/t-classes",
    exact: false,
    pageTitle: "List Teaching Class",
    main: () => <TeachingClass />,
  },

  //admin
  {
    path: "/admins",
    exact: false,
    pageTitle: "List Admin",
    main: () => <ManageAdmin />,
  },
  {
    path: "/admins/edit/:id",
    exact: false,
    pageTitle: "Edit Admin",
    main: () => <ManageAdminForm />,
  },
  {
    path: "/admins/add",
    exact: false,
    pageTitle: "Add Admin",
    main: () => <ManageAdminForm />,
  },
  //Document
  {
    path: "/documents",
    exact: false,
    pageTitle: "List Document",
    main: () => <ManageDocument />,
  },
  {
    path: "/documents-edit/:id",
    exact: false,
    pageTitle: "Edit Document",
    main: () => <ManageDocumentForm />,
  },
  {
    path: "/documents-add",
    exact: false,
    pageTitle: "Add Document",
    main: () => <ManageDocumentForm />,
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
  // Shift
  {
    path: "/shifts",
    exact: false,
    pageTitle: "List Shift",
    main: () => <ManageShift />,
  },
  {
    path: "/shifts-edit/:id",
    exact: false,
    pageTitle: "Edit Shift",
    main: () => <ManageShiftForm />,
  },
  {
    path: "/shifts-add",
    exact: false,
    pageTitle: "Add Shift",
    main: () => <ManageShiftForm />,
  },
  // Comment
  {
    path: "/comments",
    exact: false,
    pageTitle: "List Comment",
    main: () => <ManageComment />,
  },
  {
    path: "/comments-view/:id",
    exact: false,
    pageTitle: "View Comment",
    main: () => <ManageCommentForm />,
  },

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
