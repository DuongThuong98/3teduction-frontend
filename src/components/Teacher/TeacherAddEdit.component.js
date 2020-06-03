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
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Create/Edit</h4>

                <form class="mt-4">
                  <div class="form-body">
                    <div class="card-body">
                      <div class="row pt-3">
                        <h4 class="card-title">Thông tin cơ bản</h4>
                        <div class="col-md-12">
                          <div class="form-group">
                            <label for="exampleInputEmail1">Tên</label>
                            <input
                              type="text"
                              class="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              placeholder="Tiêu đề"
                            />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <label for="exampleInputPassword1">Email</label>
                            <input
                              type="email"
                              class="form-control"
                              id="exampleInputPassword1"
                              placeholder="Nguồn"
                            />
                          </div>
                        </div>
                        <div class="col-md-12">
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
                      </div>
                      <div class="row pt-3">
                        <h4 class="card-title">Chọn lớp</h4>
                        <div class="col-md-12">
                          <div class="form-group">
                            <label class="control-label">Loại Lớp</label>
                            <select class="form-control custom-select">
                              <option value="">Nghe</option>
                              <option value="">Nói</option>
                              <option value="">Viết</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <label class="control-label">Lớp</label>
                            <select class="form-control custom-select">
                              <option value="">Nghe 1</option>
                              <option value="">Nghe 2</option>
                              <option value="">Nghe 3</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <label class="control-label">Ca</label>
                            <select class="form-control custom-select">
                              <option value="">1:00</option>
                              <option value="">2:00</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-md-12">
                          <button type="submit" class="btn btn-primary">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TeacherAddEditComponent;
