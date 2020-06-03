import React, { Component } from "react";
import { Prompt } from "react-router-dom";

class StudentComponent extends Component {
  render() {
    return <div className="Contact">
        <div className="row page-titles">
                    <div className="col-md-5 align-self-center">
                        <h4 className="text-themecolor">Widget Data</h4>
                    </div>
                    <div className="col-md-7 align-self-center text-right">
                        <div className="d-flex justify-content-end align-items-center">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a >Home</a></li>
                                <li className="breadcrumb-item active">Widget Data</li>
                            </ol>
                            <a type="button" className="btn btn-info d-none d-lg-block m-l-15"
                            ><i className="fa fa-plus-circle"></i> Create
                                New</a>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Tabel name</h4>
                                <a type="button" className="btn waves-effect waves-light block btn-primary m-l-5"
                                    data-toggle="collapse" data-target="#search-form" aria-expanded="false"><i
                                        className="fa fa-search-plus" style={{fontSize: '20px',verticalAlign: 'middle'}}></i>
                                </a>
                                <div id="search-form" className="collapse" role="tabpanel" aria-labelledby="headingThree3">
                                    <div className="card">
                                        <form action="#">
                                            <div className="form-body">
                                                <div className="card-body">
                                                    <div className="row pt-3">
                                                        <div className="col-md-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Tên</label>
                                                                <input type="text" id="firstName" className="form-control"
                                                                    placeholder="John doe"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Email</label>
                                                                <input type="text" id="firstName" className="form-control"
                                                                placeholder="John doe"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Loại tài khoản</label>
                                                                <select className="form-control custom-select">
                                                                    <option value=""> --- Tất cả ---</option>
                                                                    <option value="">Học viên</option>
                                                                    <option value="">Người dùng thường</option>
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
                                                                <label className="control-label">Lớp</label>
                                                                <select className="form-control custom-select">
                                                                    <option value=""> --- Tất cả ---</option>
                                                                    <option value="">Nghe</option>
                                                                    <option value="">Nói</option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-4">
                                                            <div className="form-group">
                                                                <label className="control-label"></label>
                                                                <button type="submit"
                                                                    className="btn btn-success form-control"
                                                                    style={{marginTop:'7px'}}> <i
                                                                        className="fa fa-search-plus"></i>
                                                                    Search</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table id="demo-foo-addrow" className="table m-t-30 table-hover no-wrap contact-list"
                                        data-paging="true" data-paging-size="7">
                                        <thead>
                                            <tr>
                                                <th>ID #</th>
                                                <th>Tên</th>
                                                <th>Email</th>
                                                <th>Loại tài khoản</th>
                                                <th>Giới tính</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1011</td>
                                                <td>Johnathon</td>
                                                <td>genelia@gmail.com</td>
                                                <td>Học viên</td>
                                                <td>Nam</td>
                                                <td>
                                                    <a id="edit" className="btn btn-secondary">
                                                        <i className="" ></i> Nâng cấp học viên
                                                    </a>
                                                    <a id="edit" className="btn btn-info">
                                                        <i className="" ></i> Edit
                                                    </a>
                                                    <button id="remove" className="btn btn-danger">
                                                        <i className="ti-trash"></i> Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td colSpan="6">
                                                    <div className="text-right">
                                                        <nav aria-label="Page navigation example">
                                                            <ul className="pagination justify-content-end">
                                                                <li className="page-item disabled">
                                                                    <a className="page-link" href="#"
                                                                        tabIndex="-1">Previous</a>
                                                                </li>
                                                                <li className="page-item"><a className="page-link"
                                                                        href="#">1</a></li>
                                                                <li className="page-item"><a className="page-link"
                                                                        href="#">2</a></li>
                                                                <li className="page-item"><a className="page-link"
                                                                        href="#">3</a></li>
                                                                <li className="page-item">
                                                                    <a className="page-link" href="#">Next</a>
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
    </div>;
  }
}

export default StudentComponent;
