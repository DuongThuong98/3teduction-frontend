/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import jwt_decode from "jwt-decode";
import * as api from "./../../utils/api";
import { connect } from "react-redux";


//const socket = io.connect("http://localhost:8080");

function Home () {
  const [role, setRole] = useState(null);
  const [data, setData] = useState({});

  useEffect(() => {
    getRoleFromLocalStorage();
    getDataDashboardByRole(role);
  }, [role]);

  const getRoleFromLocalStorage = () => {
    var token = localStorage.getItem("token");
    if (token) {
      var decoded = jwt_decode(token);
      setRole(decoded.role.toString());
    }
  }

  const getDataDashboardByRole = (role) => {
    if (role) {
      if (role === "Admin") {
        api.getDataDashboardAdmin()
          .then((res) => {
            const data = res.data.data;
            setData(data);
          })
          .catch((error) => {
            console.log(error);
          });
      } else if (role === "Teacher") {
        api.getDataDashboardTeacher()
          .then((res) => {
            const data = res.data.data;
            setData(data);
          })
          .catch((error) => {
            console.log(error);
          });
      } else if (role === "Student") {
        api.getDataDashboardStudent()
          .then((res) => {
            const data = res.data.data;
            setData(data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  }
  const showCourses = (length) => {
    return (
      <div className="col-sm-6 col-md-4 col-lg-3 col-xlg-3">
        <div className="card">
          <div className="box bg-cyan text-center">
            <h4 className="text-white">Khóa học</h4>
            <h2 className="font-light text-white">
              {length ? length : ''}<i className="fas fa-gem ml-2"></i>
            </h2>
          </div>
        </div>
      </div>
    )
  }

  const showBasicInfoForAdmin = (data) => {
    return (
      <div className="row">
        <div className="col-sm-6 col-md-4 col-lg-3 col-xlg-3">
          <div className="card">
            <div className="box bg-info text-center">
              <h4 className="text-white">Admins</h4>
              <h2 className="font-light text-white">
                {data.admins ? data.admins : ''}<i className="fas fa-male ml-2"></i>
              </h2>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 col-xlg-3">
          <div className="card">
            <div className="box bg-primary text-center">
              <h4 className="text-white">Giáo viên</h4>
              <h2 className="font-light text-white">
                {data.teachers ? data.teachers : ''}<i className="fas fa-male ml-2"></i>
              </h2>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 col-xlg-3">
          <div className="card">
            <div className="box bg-success text-center">
              <h4 className="text-white">Học viên</h4>
              <h2 className="font-light text-white">
                {data.students ? data.students : ''}<i className="fas fa-male ml-2"></i>
              </h2>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 col-xlg-3">
          <div className="card">
            <div className="box bg-dark text-center">
              <h4 className="text-white">Người dùng</h4>
              <h2 className="font-light text-white">
                {data.standards ? data.standards : ''}<i className="fas fa-male ml-2"></i>
              </h2>
            </div>
          </div>
        </div>
        {showCourses(data.courses)}
        <div className="col-sm-6 col-md-4 col-lg-3 col-xlg-3">
          <div className="card">
            <div className="box bg-purple text-center">
              <h4 className="text-white">Tài liệu</h4>
              <h2 className="font-light text-white">
                {data.documents ? data.documents : ''}<i className="fas fa-address-book"></i></h2>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 col-xlg-3">
          <div className="card">
            <div className="box bg-warning text-center">
              <h4 className="text-white">Video stream</h4>
              <h2 className="font-light text-white">
                {data.videos ? data.videos : ''}<i className="fas fa-video"></i></h2>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 col-xlg-3">
          <div className="card">
            <div className="box bg-danger text-center">
              <h4 className="text-white">Mocking Test</h4>
              <h2 className="font-light text-white">
                {data.mocktests ? data.mocktests : ''}<i className="fas fa-gem"></i></h2>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const showBasicInfoForTeacher = (data) => {
    return (
      <>
        {showCourses(data.courses)}
        <div className="col-sm-6 col-md-4 col-lg-3 col-xlg-3">
          <div className="card">
            <div className="box bg-purple text-center">
              <h4 className="text-white">Tài liệu</h4>
              <h2 className="font-light text-white">
                {data.documents ? data.documents : ''}<i className="fas fa-address-book"></i></h2>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 col-xlg-3">
          <div className="card">
            <div className="box bg-warning text-center">
              <h4 className="text-white">Video stream</h4>
              <h2 className="font-light text-white">
                {data.videos ? data.videos : ''}<i className="fas fa-video"></i></h2>
            </div>
          </div>
        </div>
      </>
    )
  }

  const showBasicInfoForStudent = (data) => {
    return (
      <>
        {showCourses(data.courses)}
      </>
    )
  }

  return (
    <div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Thống kê</h4>
              <div className="row m-t-40">
                {role && role === "Admin" ?
                  showBasicInfoForAdmin(data) :
                  ''}
                {role && role === "Teacher" ?
                  showBasicInfoForTeacher(data) :
                  ''}
                {role && role === "Student" ?
                  showBasicInfoForStudent(data) :
                  ''}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(null, null)(withRouter(Home));
