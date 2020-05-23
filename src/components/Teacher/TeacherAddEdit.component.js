import React, { Component } from "react";
import { Prompt } from "react-router-dom";

class TeacherAddEditComponent extends Component {
  render() {
    return (
      <div className="Contact">
        <div className="row page-titles">
          <div className="col-md-5 align-self-center">
            <h4 className="text-themecolor">Widget Data</h4>
          </div>
          <div className="col-md-7 align-self-center text-right">
            <div className="d-flex justify-content-end align-items-center">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a>Home</a>
                </li>
                <li className="breadcrumb-item active">Teacher</li>
              </ol>
              <a
                type="button"
                className="btn btn-info d-none d-lg-block m-l-15"
                href="./_admin-add-teacher.html"
              >
                <i className="fa fa-plus-circle"></i> Submit
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TeacherAddEditComponent;
