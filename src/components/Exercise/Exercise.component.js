import React, { Component } from "react";
import { Prompt } from "react-router-dom";

class ExerciseComponent extends Component {
  render () {
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
              <button
                type="button"
                class="btn btn-info d-none d-lg-block m-l-15"
                data-target="#add-contact"
                data-toggle="modal"
              >
                <i class="fa fa-plus-circle"></i> Create New
              </button>
            </div>
          </div>
        </div>{" "}
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
                            <div class="col-md-3">
                              <div class="form-group">
                                <label class="control-label">Lớp</label>
                                <select class="form-control custom-select">
                                  <option value="">Male</option>
                                  <option value="">Female</option>
                                </select>
                              </div>
                            </div>
                            <div class="col-md-3">
                              <div class="form-group">
                                <label class="control-label">Ca học</label>
                                <select class="form-control custom-select">
                                  <option value="">Male</option>
                                  <option value="">Female</option>
                                </select>
                              </div>
                            </div>
                            <div class="col-md-3">
                              <div class="form-group">
                                <label class="control-label">Trạng thái</label>
                                <select class="form-control custom-select">
                                  <option value="">Đã nộp</option>
                                  <option value="">Đã chấm</option>
                                </select>
                              </div>
                            </div>
                            <div class="col-md-3">
                              <div class="form-group">
                                <label class="control-label">Điểm</label>
                                <select class="form-control custom-select">
                                  <option value="">0 - 5</option>
                                  <option value="">5 - 10</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-md-3">
                              <div class="form-group">
                                <label class="control-label">Từ ngày</label>
                                <input type="date" class="form-control" />
                              </div>
                            </div>
                            <div class="col-md-3">
                              <div class="form-group">
                                <label class="control-label">Đến ngày</label>
                                <input type="date" class="form-control" />
                              </div>
                            </div>
                            <div class="col-md-3">
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
                    data-paging-size="8"
                  >
                    <thead>
                      <tr>
                        <th>ID #</th>
                        <th>Opened By</th>
                        <th>Nội dung</th>
                        <th>File</th>
                        <th>Status</th>
                        <th>Điểm</th>
                        <th>Date</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1011</td>
                        <td>
                          <a >
                            <img
                              src="images/users/1.jpg"
                              alt="user"
                              class="img-circle"
                            />{" "}
                            Genelia Deshmukh
                          </a>
                        </td>
                        <td>genelia@gmail.com</td>
                        <td>How to customize the template?</td>
                        <td>
                          <span class="label label-warning">New</span>{" "}
                        </td>
                        <td>Johnathon</td>
                        <td>14-10-2017</td>
                        <td>
                          <button id="edit" class="btn btn-info">
                            <i class=""></i> Edit
                          </button>
                          <button id="remove" class="btn btn-danger">
                            <i class="ti-trash"></i> Delete
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>1224</td>
                        <td>
                          <a >
                            <img
                              src="images/users/7.jpg"
                              alt="user"
                              class="img-circle"
                            />{" "}
                            adfh abraham
                          </a>
                        </td>
                        <td>ritesh@gmail.com</td>
                        <td>How to change colors</td>
                        <td>
                          <span class="label label-success">Complete</span>{" "}
                        </td>
                        <td>Salman khan</td>
                        <td>13-10-2017</td>
                        <td>
                          <button id="edit" class="btn btn-info">
                            <i class=""></i> Edit
                          </button>
                          <button id="remove" class="btn btn-danger">
                            <i class="ti-trash"></i> Delete
                          </button>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <div
                          id="add-contact"
                          class="modal fade in"
                          tabIndex="-1"
                          role="dialog"
                          aria-labelledby="myModalLabel"
                          aria-hidden="true"
                        >
                          <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h4 class="modal-title" id="myModalLabel">
                                  Add New Absent
                                </h4>
                                <button
                                  type="button"
                                  class="close"
                                  data-dismiss="modal"
                                  aria-hidden="true"
                                >
                                  ×
                                </button>
                              </div>
                              <div class="modal-body">
                                <div class="form-horizontal form-material">
                                  <div class="form-group">
                                    <div class="col-md-12 m-b-20">
                                      <div class="form-group">
                                        <label class="control-label">
                                          Chọn loại lớp
                                        </label>
                                        <select class="form-control custom-select">
                                          <option value="">Male</option>
                                          <option value="">Female</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div class="col-md-12 m-b-20">
                                      <div class="form-group">
                                        <label class="control-label">
                                          Chọn lớp
                                        </label>
                                        <select class="form-control custom-select">
                                          <option value="">Male</option>
                                          <option value="">Female</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div class="col-md-12 m-b-20">
                                      <div class="form-group">
                                        <label>Chọn người duyệt</label>
                                        <select class="form-control custom-select">
                                          <option value="">Male</option>
                                          <option value="">Female</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div class="col-md-12 m-b-20">
                                      <div class="form-group">
                                        <input
                                          type="text"
                                          class="form-control"
                                          placeholder="Lí do"
                                        />
                                      </div>
                                    </div>
                                    <div class="col-md-12 m-b-20">
                                      <div class="form-group">
                                        <label class="control-label">
                                          Từ ngày
                                        </label>
                                        <input
                                          type="date"
                                          class="form-control"
                                        />
                                      </div>
                                    </div>
                                    <div class="col-md-12 m-b-20">
                                      <div class="form-group">
                                        <label class="control-label">
                                          Đến ngày
                                        </label>
                                        <input
                                          type="date"
                                          class="form-control"
                                        />
                                      </div>
                                    </div>
                                    <div class="col-md-12 m-b-20">
                                      <div class="form-group">
                                        <label class="control-label">
                                          Chọn lớp học bù
                                        </label>
                                        <select class="form-control custom-select">
                                          <option value="">Male</option>
                                          <option value="">Female</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div class="col-md-12 m-b-20">
                                      <div class="form-group">
                                        <label class="control-label">
                                          Chọn ca học bù
                                        </label>
                                        <select class="form-control custom-select">
                                          <option value="">Male</option>
                                          <option value="">Female</option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="modal-footer">
                                <button
                                  type="button"
                                  class="btn btn-info waves-effect"
                                  data-dismiss="modal"
                                >
                                  Save
                                </button>
                                <button
                                  type="button"
                                  class="btn btn-default waves-effect"
                                  data-dismiss="modal"
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
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
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Sự kiện sắp diễn ra</h4>
                <div class="table-responsive">
                  <table
                    id="demo-foo-addrow"
                    class="table m-t-30 table-hover no-wrap contact-list"
                    data-paging="true"
                    data-paging-size="5"
                  >
                    <thead>
                      <tr>
                        <th>ID #</th>
                        <th>Lớp</th>
                        <th>Nội dung</th>
                        <th>Link</th>
                        <th>Thời gian kết thúc</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1011</td>
                        <td>genelia@gmail.com</td>
                        <td>How to customize the template?</td>
                        <td>Johnathon</td>
                        <td>14-10-2017</td>
                      </tr>
                      <tr>
                        <td>1011</td>
                        <td>genelia@gmail.com</td>
                        <td>How to customize the template?</td>
                        <td>Johnathon</td>
                        <td>14-10-2017</td>
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

export default ExerciseComponent;
