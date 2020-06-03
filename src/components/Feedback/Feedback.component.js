import React, { Component } from "react";
import { Prompt } from "react-router-dom";

class FeedbackComponent extends Component {
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
              <button
                type="button"
                className="btn btn-info d-none d-lg-block m-l-15"
                data-target="#add-contact"
                data-toggle="modal"
              >
                <i className="fa fa-plus-circle"></i> Create New
              </button>
            </div>
          </div>
        </div>{" "}
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Tabel name</h4>
                {/* <button type="button" className="btn btn-info btn-rounded float-right"
                                    >New Absent
                                </button> */}
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
                            <div className="col-md-3">
                              <div className="form-group">
                                <label className="control-label">Lớp</label>
                                <select className="form-control custom-select">
                                  <option value="">Male</option>
                                  <option value="">Female</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="form-group">
                                <label className="control-label">Ca</label>
                                <select className="form-control custom-select">
                                  <option value="">Male</option>
                                  <option value="">Female</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="form-group">
                                <label className="control-label">
                                  Giao vien
                                </label>
                                <select className="form-control custom-select">
                                  <option value="">Male</option>
                                  <option value="">Female</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="form-group">
                                <label className="control-label">
                                  Người duyệt
                                </label>
                                <select className="form-control custom-select">
                                  <option value="">Male</option>
                                  <option value="">Female</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="form-group">
                                <label className="control-label">Từ ngày</label>
                                <input type="date" className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="form-group">
                                <label className="control-label">
                                  Đến ngày
                                </label>
                                <input type="date" className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-3">
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
                <div className="table-responsive">
                  <table
                    id="demo-foo-addrow"
                    className="table m-t-30 table-hover no-wrap contact-list"
                    data-paging="true"
                    data-paging-size="8"
                  >
                    <thead>
                      <tr>
                        <th>ID #</th>
                        <th>Opened By</th>
                        <th>Cust. Email</th>
                        <th>Sbuject</th>
                        <th>Status</th>
                        <th>Assign to</th>
                        <th>Date</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1011</td>
                        <td>
                          <a>
                            <img
                              src="images/users/1.jpg"
                              alt="user"
                              className="img-circle"
                            />{" "}
                            Genelia Deshmukh
                          </a>
                        </td>
                        <td>genelia@gmail.com</td>
                        <td>How to customize the template?</td>
                        <td>
                          <span className="label label-warning">New</span>{" "}
                        </td>
                        <td>Johnathon</td>
                        <td>14-10-2017</td>
                        <td>
                          <button id="edit" className="btn btn-info">
                            <i className=""></i> Edit
                          </button>
                          <button id="remove" className="btn btn-danger">
                            <i className="ti-trash"></i> Delete
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>1224</td>
                        <td>
                          <a>
                            <img
                              src="images/users/7.jpg"
                              alt="user"
                              className="img-circle"
                            />{" "}
                            adfh abraham
                          </a>
                        </td>
                        <td>ritesh@gmail.com</td>
                        <td>How to change colors</td>
                        <td>
                          <span className="label label-success">Complete</span>{" "}
                        </td>
                        <td>Salman khan</td>
                        <td>13-10-2017</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <div
                          id="add-feedback"
                          className="modal fade in"
                          tabIndex="-1"
                          role="dialog"
                          aria-labelledby="myModalLabel"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h4 className="modal-title" id="myModalLabel">
                                  Add New Feedback
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
                                          <option value="">Male</option>
                                          <option value="">Female</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="col-md-12 m-b-20">
                                      <div className="form-group">
                                        <label className="control-label">
                                          Chọn lớp
                                        </label>
                                        <select className="form-control custom-select">
                                          <option value="">Male</option>
                                          <option value="">Female</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="col-md-12 m-b-20">
                                      <div className="form-group">
                                        <label>Chọn người duyệt</label>
                                        <select className="form-control custom-select">
                                          <option value="">Male</option>
                                          <option value="">Female</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="col-md-12 m-b-20">
                                      <div className="form-group">
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="Lí do"
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
                        <td colSpan="6">
                          <div className="text-right">
                            <nav aria-label="Page navigation example">
                              <ul className="pagination justify-content-end">
                                <li className="page-item disabled">
                                  <a
                                    className="page-link"
                                    href="#"
                                    tabIndex="-1"
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

export default FeedbackComponent;
