/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Prompt } from "react-router-dom";

class AdminComponent extends Component {
  render() {
    return (
      <div className="Contact">
        <div class="row page-titles">
          <div class="col-md-5 align-self-center">
            <h4 class="text-themecolor">Widget Data</h4>
          </div>
          <div class="col-md-7 align-self-center text-right">
            <div class="d-flex justify-content-end align-items-center">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a>Home</a>
                </li>
                <li class="breadcrumb-item active">Widget Data</li>
              </ol>
              <a type="button" class="btn btn-info d-none d-lg-block m-l-15">
                <i class="fa fa-plus-circle"></i> Create New
              </a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Tabel name</h4>
                <a
                  type="button"
                  class="btn waves-effect waves-light block btn-primary m-l-5"
                  data-toggle="collapse"
                  data-target="#search-form"
                  aria-expanded="false"
                >
                  <i
                    class="fa fa-search-plus"
                    style={{ fontSize: "20px", verticalAlign: "middle" }}
                  ></i>
                </a>
                <div
                  id="search-form"
                  class="collapse"
                  role="tabpanel"
                  aria-labelledby="headingThree3"
                >
                  <div class="card">
                    <form action="#">
                      <div class="form-body">
                        <div class="card-body">
                          <div class="row pt-3">
                            <div class="col-md-4">
                              <div class="form-group">
                                <label class="control-label">Tên</label>
                                <input
                                  type="text"
                                  id="firstName"
                                  class="form-control"
                                  placeholder="Tên"
                                />
                              </div>
                            </div>
                            <div class="col-md-4">
                              <div class="form-group">
                                <label class="control-label">Email</label>
                                <input
                                  type="text"
                                  id="firstName"
                                  class="form-control"
                                  placeholder="Email"
                                />
                              </div>
                            </div>
                            <div class="col-md-4">
                              <div class="form-group">
                                <label class="control-label">Giới tính</label>
                                <select class="form-control custom-select">
                                  <option value=""> --- Tất cả ---</option>
                                  <option value="">Nam</option>
                                  <option value="">Nữ</option>
                                  <option value="">Khác</option>
                                </select>
                              </div>
                            </div>
                            <div class="col-md-4">
                              <div class="form-group">
                                <label class="control-label"></label>
                                <button
                                  type="submit"
                                  class="btn btn-success form-control"
                                  style={{ marginTop: "7px" }}
                                >
                                  {" "}
                                  <i class="fa fa-search-plus"></i>
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
                <div class="table-responsive">
                  <table
                    id="demo-foo-addrow"
                    class="table m-t-30 table-hover no-wrap contact-list"
                    data-paging="true"
                    data-paging-size="7"
                  >
                    <thead>
                      <tr>
                        <th>ID #</th>
                        <th>Tên</th>
                        <th>Email</th>
                        <th>Địa chỉ</th>
                        <th>Điện thoại</th>
                        <th>Giới tính</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1011</td>
                        <td>Johnathon</td>
                        <td>genelia@gmail.com</td>
                        <td>HCM city</td>
                        <td>14102017</td>
                        <th>Nam</th>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan="6">
                          <div class="text-right">
                            <nav aria-label="Page navigation example">
                              <ul class="pagination justify-content-end">
                                <li class="page-item disabled">
                                  <a class="page-link" href="#" tabIndex="-1">
                                    Previous
                                  </a>
                                </li>
                                <li class="page-item">
                                  <a class="page-link" href="#">
                                    1
                                  </a>
                                </li>
                                <li class="page-item">
                                  <a class="page-link" href="#">
                                    2
                                  </a>
                                </li>
                                <li class="page-item">
                                  <a class="page-link" href="#">
                                    3
                                  </a>
                                </li>
                                <li class="page-item">
                                  <a class="page-link" href="#">
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

export default AdminComponent;
