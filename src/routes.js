/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./App.css";
import TeacherComponent from "./components/Teacher/Teacher.component";
import StudentComponent from "./components/Student/Student.component";
import Home from "./components/Home/Home";

const routes =[
  {
    path:'/',
    exact: true,
    pageTitle: "Trang chủ",
    main:()=><Home></Home>
  },
  {
    path:'/teachers',
    exact: true,
    pageTitle: "Teacher",
    main:()=><TeacherComponent></TeacherComponent>
  },
  {
    path:'/students',
    exact: false,
    pageTitle: "Student",
    main:()=><StudentComponent></StudentComponent>
  }
]

export default routes;
