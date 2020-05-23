import React, { Component } from "react";
import {
  HashRouter as Router,
  Link,
  Route,
  Redirect,
  withRouter,
} from "react-router-dom";
// import { connect } from 'react-redux';
import Menu from "../../common-components/Menu/Menu";
import "./Home.scss";
import Header from "../../common-components/Header/Header";
import Rightbar from "../../common-components/Rightbar/Rightbar";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="row page-titles">
          <div className="col-md-5 align-self-center">
            <h4 className="text-themecolor">Widget Data</h4>
          </div>
          <div className="col-md-7 align-self-center text-right">
            <div className="d-flex justify-content-end align-items-center">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a >Home</a>
                </li>
                <li className="breadcrumb-item active">Widget Data</li>
              </ol>
              <button
                type="button"
                className="btn btn-info d-none d-lg-block m-l-15"
                data-target="#add-class"
                data-toggle="modal"
              >
                <i className="fa fa-plus-circle" /> Create New
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Tabel name</h4>
                <a
                  type="button"
                  className="btn waves-effect waves-light block btn-primary m-l-5"
                  data-toggle="collapse"
                  data-target="#search-form"
                  aria-expanded="false"
                >
                  <i
                    className="fa fa-search-plus"
                    style={{
                      fontSize: "20px",
                      verticalAlign: "middle",
                    }}
                  />
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
                                <label className="control-label">
                                  Loại lớp
                                </label>
                                <select className="form-control custom-select">
                                  <option value>Male</option>
                                  <option value>Female</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-group">
                                <label className="control-label">Tên lớp</label>
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
                                <label className="control-label">
                                  Tình trạng
                                </label>
                                <select className="form-control custom-select">
                                  <option value>--- Tất cả ---</option>
                                  <option value>Kết thúc</option>
                                  <option value>Đang diễn ra</option>
                                  <option value>Đã kết thúc</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-group">
                                <label className="control-label" />
                                <button
                                  type="submit"
                                  className="btn btn-success form-control"
                                  style={{ marginTop: "7px" }}
                                >
                                  {" "}
                                  <i className="fa fa-search-plus" />
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
                <div className="table-responsive">
                  <div
                    id="add-class"
                    className="modal fade in"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="myModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h4 className="modal-title" id="myModalLabel">
                            Add New Class
                          </h4>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-hidden="true"
                          >
                            ×
                          </button>
                        </div>
                        <div className="modal-body">
                          <div className="form-horizontal form-material">
                            <div className="form-group">
                              <div className="col-md-12 m-b-20">
                                <div className="form-group">
                                  <label className="control-label">
                                    Chọn loại lớp
                                  </label>
                                  <select className="form-control custom-select">
                                    <option value>Male</option>
                                    <option value>Female</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-md-12 m-b-20">
                                <div className="form-group">
                                  <label className="control-label">
                                    Tên lớp lớp
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder=""
                                  />
                                </div>
                              </div>
                              <div className="col-md-12 m-b-20">
                                <div className="form-group">
                                  <label>Mô tả</label>
                                  <textarea
                                    type="text"
                                    rows={4}
                                    className="form-control"
                                    placeholder="mô tả"
                                    defaultValue={""}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-info waves-effect"
                            data-dismiss="modal"
                          >
                            Save
                          </button>
                          <button
                            type="button"
                            className="btn btn-default waves-effect"
                            data-dismiss="modal"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <table
                    id="demo-foo-addrow"
                    className="table m-t-30 table-hover no-wrap contact-list"
                    data-paging="true"
                    data-paging-size={10}
                  >
                    <thead>
                      <tr>
                        <th>ID #</th>
                        <th>Tên lớp</th>
                        <th>Loại lớp</th>
                        <th>Mô tả</th>
                        <th>Học viên</th>
                        <th>Giảng viên</th>
                        <th>Trợ giảng</th>
                        <th>Đánh giá</th>
                        <th>Tình trạng</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1011</td>
                        <td>Nghe cho người mới bắt đầu</td>
                        <td>Luyện nghe</td>
                        <td>Đây là mô tả</td>
                        <td>4</td>
                        <td>Lê Thị Thúy Hạnh, Hồ Ngọc Trâm</td>
                        <td>Lê Nhật Kha, Trương Nhật Hồng</td>
                        <td>Tốt</td>
                        <td>Đang diễn ra</td>
                        <td>
                          <button
                            id="edit"
                            className="btn btn-info"
                            data-target="#add-class"
                            data-toggle="modal"
                          >
                            <i /> Edit
                          </button>
                          <button id="remove" className="btn btn-warning">
                            <i className="ti-trash" /> Hủy lớp
                          </button>
                          <button id="remove" className="btn btn-danger">
                            <i className="ti-trash" /> Delete
                          </button>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan={6}>
                          <div className="text-right">
                            <nav aria-label="Page navigation example">
                              <ul className="pagination justify-content-end">
                                <li className="page-item disabled">
                                  <a
                                    className="page-link"
                                    href="#"
                                    tabIndex={-1}
                                  >
                                    Previous
                                  </a>
                                </li>
                                <li className="page-item">
                                  <a className="page-link" href="#">
                                    1
                                  </a>
                                </li>
                                <li className="page-item">
                                  <a className="page-link" href="#">
                                    2
                                  </a>
                                </li>
                                <li className="page-item">
                                  <a className="page-link" href="#">
                                    3
                                  </a>
                                </li>
                                <li className="page-item">
                                  <a className="page-link" href="#">
                                    Next
                                  </a>
                                </li>
                              </ul>
                            </nav>
                          </div>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export default withRouter(Home);
export default Home;
