/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Prompt, Link } from "react-router-dom";
import TeacherSearch from "./TeacherSearch";
import TeacherTable from "./TeacherTable";

class TeacherComponent extends Component {
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
                <li className="breadcrumb-item active">Widget Data</li>
              </ol>
              <Link
                type="button"
                className="btn btn-info d-none d-lg-block m-l-15"
                to="/teachers/add"
              >
                <i className="fa fa-plus-circle"></i> Create New
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <TeacherSearch />
                <TeacherTable />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TeacherComponent;
