import React, { Component } from "react";
import { Prompt } from "react-router-dom";

class ClassComponent extends Component {
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
                                <a type="button" class="btn waves-effect waves-light block btn-primary m-l-5"
                                    data-toggle="collapse" data-target="#search-form" aria-expanded="false"><i
                                        class="fa fa-search-plus" style={{fontSize: '20px',verticalAlign: 'middle'}}></i>
                                </a>
                                <div id="search-form" class="collapse" role="tabpanel" aria-labelledby="headingThree3">
                                    <div class="card">
                                        <form action="#">
                                            <div class="form-body">
                                                <div class="card-body">
                                                    <div class="row pt-3">
                                                        <div class="col-md-4">
                                                            <div class="form-group">
                                                                <label class="control-label">Loại lớp</label>
                                                                <select class="form-control custom-select">
                                                                    <option value="">Male</option>
                                                                    <option value="">Female</option>
                                                                </select>
                                                               
                                                            </div>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <div class="form-group">
                                                                <label class="control-label">Tên lớp</label>
                                                                <input type="text" id="firstName" class="form-control"
                                                                    placeholder="John doe"/>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <div class="form-group">
                                                                <label class="control-label">Tình trạng</label>
                                                                <select class="form-control custom-select">
                                                                    <option value="">--- Tất cả ---</option>
                                                                    <option value="">Kết thúc</option>
                                                                    <option value="">Đang diễn ra</option>
                                                                    <option value="">Đã kết thúc</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <div class="form-group">
                                                                <label class="control-label"></label>
                                                                <button type="submit"
                                                                    class="btn btn-success form-control"
                                                                    style={{marginTop:'7px'}}> <i
                                                                        class="fa fa-search-plus"></i>
                                                                    Search</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="table-responsive">
                                    <table id="demo-foo-addrow" class="table m-t-30 table-hover no-wrap contact-list"
                                        data-paging="true" data-paging-size="10">
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
                                                    <button id="edit" class="btn btn-info"  data-target="#add-class" data-toggle="modal">
                                                        <i class="" ></i> Edit
                                                    </button>
                                                    <button id="remove" class="btn btn-warning">
                                                        <i class="ti-trash"></i> Hủy lớp
                                                    </button>
                                                    <button id="remove" class="btn btn-danger">
                                                        <i class="ti-trash"></i> Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <div id="add-class" class="modal fade in" tabIndex="-1" role="dialog"
                                                    aria-labelledby="myModalLabel" aria-hidden="true">
                                                    <div class="modal-dialog">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h4 class="modal-title" id="myModalLabel">Add New Class</h4>
                                                                <button type="button" class="close" data-dismiss="modal"
                                                                    aria-hidden="true">×</button>
                                                            </div>
                                                            <div class="modal-body">
                                                                <div class="form-horizontal form-material">
                                                                    <div class="form-group">
                                                                        <div class="col-md-12 m-b-20">
                                                                            <div class="form-group">
                                                                                <label class="control-label">Chọn loại
                                                                                    lớp</label>
                                                                                <select
                                                                                    class="form-control custom-select">
                                                                                    <option value="">Male</option>
                                                                                    <option value="">Female</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-md-12 m-b-20">
                                                                            <div class="form-group">
                                                                                <label class="control-label">Tên lớp
                                                                                    lớp</label>
                                                                                    <input type="text" class="form-control"
                                                                                    placeholder=""/>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-md-12 m-b-20">
                                                                            <div class="form-group">
                                                                                <label>Mô tả</label>
                                                                                <textarea type="text" rows="4" class="form-control"
                                                                                    placeholder="mô tả"></textarea>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="modal-footer">
                                                                <button type="button" class="btn btn-info waves-effect"
                                                                    data-dismiss="modal">Save</button>
                                                                <button type="button"
                                                                    class="btn btn-default waves-effect"
                                                                    data-dismiss="modal">Cancel</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <td colSpan="6">
                                                    <div class="text-right">
                                                        <nav aria-label="Page navigation example">
                                                            <ul class="pagination justify-content-end">
                                                                <li class="page-item disabled">
                                                                    <a class="page-link" href="#"
                                                                        tabIndex="-1">Previous</a>
                                                                </li>
                                                                <li class="page-item"><a class="page-link"
                                                                        href="#">1</a></li>
                                                                <li class="page-item"><a class="page-link"
                                                                        href="#">2</a></li>
                                                                <li class="page-item"><a class="page-link"
                                                                        href="#">3</a></li>
                                                                <li class="page-item">
                                                                    <a class="page-link" href="#">Next</a>
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

export default ClassComponent;
