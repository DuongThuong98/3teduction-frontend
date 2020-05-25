/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, Fragment } from "react";
import { Prompt, Link } from "react-router-dom";

class TeacherSearch extends Component {
  render() {
    return (
      <React.Fragment>
        <h4 className="card-title">Teachers List</h4>
        <a
          type="button"
          className="btn waves-effect waves-light block btn-primary m-l-5"
          data-toggle="collapse"
          data-target="#search-form"
          aria-expanded="false"
        >
          <i
            className="fa fa-search-plus"
            style={{ fontSize: "20px", verticalAlign: "middle" }}
          ></i>
        </a>
        <div
          id="search-form"
          className="collapse"
          role="tabpanel"
          aria-labelledby="headingThree3"
        >
          <div className="card">
            <form action="#">
              <div className="form-body">
                <div className="card-body">
                  <div className="row pt-3">
                    <div className="col-md-4">
                      <div className="form-group">
                        <label className="control-label">Tên</label>
                        <input
                          type="text"
                          id="firstName"
                          className="form-control"
                          placeholder="John doe"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label className="control-label">Email</label>
                        <input
                          type="text"
                          id="firstName"
                          className="form-control"
                          placeholder="John doe"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label className="control-label">Lớp</label>
                        <select className="form-control custom-select">
                          <option value=""> --- Tất cả ---</option>
                          <option value="">Giao tiếp</option>
                          <option value="">Luyện nói</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label className="control-label">Giới tính</label>
                        <select className="form-control custom-select">
                          <option value=""> --- Tất cả ---</option>
                          <option value="">Nam</option>
                          <option value="">Nữ</option>
                          <option value="">Khác</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label className="control-label"></label>
                        <button
                          type="submit"
                          className="btn btn-success form-control"
                          style={{ marginTop: "7px" }}
                        >
                          {" "}
                          <i className="fa fa-search-plus"></i>
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TeacherSearch;
