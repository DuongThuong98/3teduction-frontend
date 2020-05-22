import React, { Component } from "react";
import { Prompt } from "react-router-dom";

class CourseComponent extends Component {
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
        <div class="row" style={{paddingLeft: '10px'}}>
                    <div class="card">
                        <div class="box bg-info text-center">
                            <h4 class="font-light text-white">Các khóa</h4>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="button-group">
                            <button type="button" class="btn waves-effect waves-light btn-outline-warning active">1:00</button>
                            <button type="button" class="btn waves-effect waves-light btn-outline-warning">2:00</button>
                            <button type="button" class="btn waves-effect waves-light btn-outline-warning">3:00</button>
                            <button type="button" class="btn waves-effect waves-light btn-outline-warning">4:00</button>
                            <button type="button" class="btn waves-effect waves-light btn-outline-warning">5:00</button>
                            <button type="button" class="btn waves-effect waves-light btn-outline-warning">6:00</button>
                            <button type="button" class="btn waves-effect waves-light btn-outline-warning">7:00</button>
                            <button type="button" class="btn waves-effect waves-light btn-outline-warning">8:00</button>
                            <button type="button" class="btn waves-effect waves-light btn-outline-warning">9:00</button>
                            <button type="button"
                                class="btn waves-effect waves-light btn-outline-warning">10:00</button>
                            <button type="button"
                                class="btn waves-effect waves-light btn-outline-warning">11:00</button>
                            <button type="button"
                                class="btn waves-effect waves-light btn-outline-warning">12:00</button>
                            <button type="button"
                                class="btn waves-effect waves-light btn-outline-warning">13:00</button>
                            <button type="button"
                                class="btn waves-effect waves-light btn-outline-warning">14:00</button>
                            <button type="button"
                                class="btn waves-effect waves-light btn-outline-warning">15:00</button>
                            <button type="button"
                                class="btn waves-effect waves-light btn-outline-warning">16:00</button>
                        </div>
                    </div>
                </div>
                <div class="row mt-2" style={{paddingLeft: '10px'}}>
                    <div class="card">
                        <div class="box bg-info text-center">
                            <h4 class="font-light text-white">Học giao tiếp với giáo viên nước ngoài</h4>
                        </div>
                    </div>
                </div>
                <div class="row el-element-overlay">
                    <div class="col-lg-4 col-md-6">
                        <div class="card">
                            <div class="el-card-item">
                                <div class="el-card-avatar el-overlay-1">
                                    <img src="../assets/images/big/img1.jpg" alt="user" />
                                    <div class="el-overlay">
                                        <ul class="el-info">
                                            <li>
                                                <a class="btn default btn-outline image-popup-vertical-fit"
                                                    href="../assets/images/big/img1.jpg">
                                                    <i class="icon-paper-plane" title="Vào lớp"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="btn default btn-outline" href="javascript:void(0);"
                                                    data-toggle="modal" data-target="#show-modal-du-thinh">
                                                    <i class="icon-earphones" title="Dự thính"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="el-card-content">
                                    <h4 class="box-title">Học về đồ đạc trong nhà</h4>
                                    <div class="card-body" style={{padding: '0.25rem'}}>
                                        <button type="button"
                                            class="btn waves-effect waves-light btn-rounded btn-primary m-t-10">Vào
                                            lớp</button>
                                        <button class="btn btn-success btn-rounded waves-effect waves-light m-t-10"
                                            data-toggle="modal" data-target="#show-modal-du-thinh">Dự
                                            thính</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="card">
                            <div class="el-card-item">
                                <div class="el-card-avatar el-overlay-1">
                                    <img src="../assets/images/big/img2.jpg" alt="user" />
                                    <div class="el-overlay">
                                        <ul class="el-info">
                                            <li>
                                                <a class="btn default btn-outline image-popup-vertical-fit"
                                                    href="../assets/images/big/img2.jpg">
                                                    <i class="icon-paper-plane" title="Vào lớp"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="btn default btn-outline" href="javascript:void(0);">
                                                    <i class="icon-earphones" title="Dự thính"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="el-card-content">
                                    <h4 class="box-title">Học về đồ đạc trong nhà</h4>
                                    <div class="card-body" style={{padding: '0.25rem'}}>
                                        <button type="button"
                                            class="btn waves-effect waves-light btn-rounded btn-primary m-t-10">Vào
                                            lớp</button>
                                        <button class="btn btn-success btn-rounded waves-effect waves-light m-t-10">Dự
                                            thính</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="card">
                            <div class="el-card-item">
                                <div class="el-card-avatar el-overlay-1">
                                    <img src="../assets/images/big/img3.jpg" alt="user" />
                                    <div class="el-overlay">
                                        <ul class="el-info">
                                            <li>
                                                <a class="btn default btn-outline image-popup-vertical-fit"
                                                    href="../assets/images/big/img3.jpg">
                                                    <i class="icon-paper-plane" title="Vào lớp"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="btn default btn-outline" href="javascript:void(0);">
                                                    <i class="icon-earphones" title="Dự thính"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="el-card-content">
                                    <h4 class="box-title">Học về đồ đạc trong nhà</h4>
                                    <div class="card-body" style={{padding: '0.25rem'}}>
                                        <button type="button"
                                            class="btn waves-effect waves-light btn-rounded btn-primary m-t-10">Vào
                                            lớp</button>
                                        <button class="btn btn-success btn-rounded waves-effect waves-light m-t-10">Dự
                                            thính</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="card">
                            <div class="el-card-item">
                                <div class="el-card-avatar el-overlay-1">
                                    <img src="../assets/images/big/img4.jpg" alt="user" />
                                    <div class="el-overlay">
                                        <ul class="el-info">
                                            <li>
                                                <a class="btn default btn-outline image-popup-vertical-fit"
                                                    href="../assets/images/big/img4.jpg">
                                                    <i class="icon-paper-plane" title="Vào lớp"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="btn default btn-outline" href="javascript:void(0);">
                                                    <i class="icon-earphones" title="Dự thính"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="el-card-content">
                                    <h4 class="box-title">Học về các bộ phận trên có thể người</h4>
                                    <div class="card-body" style={{padding: '0.25rem'}}>
                                        <button type="button"
                                            class="btn waves-effect waves-light btn-rounded btn-primary m-t-10">Vào
                                            lớp</button>
                                        <button class="btn btn-success btn-rounded waves-effect waves-light m-t-10">Dự
                                            thính</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="card">
                            <div class="el-card-item">
                                <div class="el-card-avatar el-overlay-1">
                                    <img src="../assets/images/big/img5.jpg" alt="user" />
                                    <div class="el-overlay">
                                        <ul class="el-info">
                                            <li>
                                                <a class="btn default btn-outline image-popup-vertical-fit"
                                                    href="../assets/images/big/img5.jpg">
                                                    <i class="icon-paper-plane" title="Vào lớp"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="btn default btn-outline" href="javascript:void(0);">
                                                    <i class="icon-earphones" title="Dự thính"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="el-card-content">
                                    <h4 class="box-title">Học về du lịch</h4>
                                    <div class="card-body" style={{padding: '0.25rem'}}>
                                        <button type="button"
                                            class="btn waves-effect waves-light btn-rounded btn-primary m-t-10">Vào
                                            lớp</button>
                                        <button class="btn btn-success btn-rounded waves-effect waves-light m-t-10">Dự
                                            thính</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-2" style="padding-left: 10px;">
                    <div class="card">
                        <div class="box bg-info text-center">
                            <h4 class="font-light text-white">Học giao tiếp song ngữ</h4>
                        </div>
                    </div>
                </div>
                <div class="row el-element-overlay">
                    <div class="col-lg-4 col-md-6">
                        <div class="card">
                            <div class="el-card-item">
                                <div class="el-card-avatar el-overlay-1">
                                    <img src="../assets/images/big/img1.jpg" alt="user" />
                                    <div class="el-overlay">
                                        <ul class="el-info">
                                            <li>
                                                <a class="btn default btn-outline image-popup-vertical-fit"
                                                    href="../assets/images/big/img1.jpg">
                                                    <i class="icon-paper-plane" title="Vào lớp"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="btn default btn-outline" href="javascript:void(0);"
                                                    data-toggle="modal" data-target="#show-modal-du-thinh">
                                                    <i class="icon-earphones" title="Dự thính"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="el-card-content">
                                    <h4 class="box-title">Học về đồ đạc trong nhà</h4>
                                    <div class="card-body" style={{padding: '0.25rem'}}>
                                        <button type="button"
                                            class="btn waves-effect waves-light btn-rounded btn-primary m-t-10">Vào
                                            lớp</button>
                                        <button class="btn btn-success btn-rounded waves-effect waves-light m-t-10"
                                            data-toggle="modal" data-target="#show-modal-du-thinh">Dự
                                            thính</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="card">
                            <div class="el-card-item">
                                <div class="el-card-avatar el-overlay-1">
                                    <img src="../assets/images/big/img2.jpg" alt="user" />
                                    <div class="el-overlay">
                                        <ul class="el-info">
                                            <li>
                                                <a class="btn default btn-outline image-popup-vertical-fit"
                                                    href="../assets/images/big/img2.jpg">
                                                    <i class="icon-paper-plane" title="Vào lớp"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="btn default btn-outline" href="javascript:void(0);">
                                                    <i class="icon-earphones" title="Dự thính"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="el-card-content">
                                    <h4 class="box-title">Học về đồ đạc trong nhà</h4>
                                    <div class="card-body" style={{padding: '0.25rem'}}>
                                        <button type="button"
                                            class="btn waves-effect waves-light btn-rounded btn-primary m-t-10">Vào
                                            lớp</button>
                                        <button class="btn btn-success btn-rounded waves-effect waves-light m-t-10">Dự
                                            thính</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="card">
                            <div class="el-card-item">
                                <div class="el-card-avatar el-overlay-1">
                                    <img src="../assets/images/big/img3.jpg" alt="user" />
                                    <div class="el-overlay">
                                        <ul class="el-info">
                                            <li>
                                                <a class="btn default btn-outline image-popup-vertical-fit"
                                                    href="../assets/images/big/img3.jpg">
                                                    <i class="icon-paper-plane" title="Vào lớp"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="btn default btn-outline" href="javascript:void(0);">
                                                    <i class="icon-earphones" title="Dự thính"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="el-card-content">
                                    <h4 class="box-title">Học về đồ đạc trong nhà</h4>
                                    <div class="card-body" style={{padding: '0.25rem'}}>
                                        <button type="button"
                                            class="btn waves-effect waves-light btn-rounded btn-primary m-t-10">Vào
                                            lớp</button>
                                        <button class="btn btn-success btn-rounded waves-effect waves-light m-t-10">Dự
                                            thính</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-2" style="padding-left: 10px;">
                    <div class="card">
                        <div class="box bg-info text-center">
                            <h4 class="font-light text-white">Học nghe</h4>
                        </div>
                    </div>
                </div>
                <div class="row el-element-overlay">
                    <div class="col-lg-4 col-md-6">
                        <div class="card">
                            <div class="el-card-item">
                                <div class="el-card-avatar el-overlay-1">
                                    <img src="../assets/images/big/img6.jpg" alt="user" />
                                    <div class="el-overlay">
                                        <ul class="el-info">
                                            <li>
                                                <a class="btn default btn-outline image-popup-vertical-fit"
                                                    href="../assets/images/big/img6.jpg">
                                                    <i class="icon-paper-plane" title="Vào lớp"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="btn default btn-outline" href="javascript:void(0);"
                                                    data-toggle="modal" data-target="#show-modal-du-thinh">
                                                    <i class="icon-earphones" title="Dự thính"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="el-card-content">
                                    <h4 class="box-title">Học về đồ đạc trong nhà</h4>
                                    <div class="card-body" style={{padding: '0.25rem'}}>
                                        <button type="button"
                                            class="btn waves-effect waves-light btn-rounded btn-primary m-t-10">Vào
                                            lớp</button>
                                        <button class="btn btn-success btn-rounded waves-effect waves-light m-t-10"
                                            data-toggle="modal" data-target="#show-modal-du-thinh">Dự
                                            thính</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="card">
                            <div class="el-card-item">
                                <div class="el-card-avatar el-overlay-1">
                                    <img src="../assets/images/big/img5.jpg" alt="user" />
                                    <div class="el-overlay">
                                        <ul class="el-info">
                                            <li>
                                                <a class="btn default btn-outline image-popup-vertical-fit"
                                                    href="../assets/images/big/img5.jpg">
                                                    <i class="icon-paper-plane" title="Vào lớp"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="btn default btn-outline" href="javascript:void(0);">
                                                    <i class="icon-earphones" title="Dự thính"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="el-card-content">
                                    <h4 class="box-title">Học về đồ đạc trong nhà</h4>
                                    <div class="card-body" style={{padding: '0.25rem'}}>
                                        <button type="button"
                                            class="btn waves-effect waves-light btn-rounded btn-primary m-t-10">Vào
                                            lớp</button>
                                        <button class="btn btn-success btn-rounded waves-effect waves-light m-t-10">Dự
                                            thính</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="card">
                            <div class="el-card-item">
                                <div class="el-card-avatar el-overlay-1">
                                    <img src="../assets/images/big/img3.jpg" alt="user" />
                                    <div class="el-overlay">
                                        <ul class="el-info">
                                            <li>
                                                <a class="btn default btn-outline image-popup-vertical-fit"
                                                    href="../assets/images/big/img3.jpg">
                                                    <i class="icon-paper-plane" title="Vào lớp"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="btn default btn-outline" href="javascript:void(0);">
                                                    <i class="icon-earphones" title="Dự thính"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="el-card-content">
                                    <h4 class="box-title">Học về đồ đạc trong nhà</h4>
                                    <div class="card-body" style={{padding: '0.25rem'}}>
                                        <button type="button"
                                            class="btn waves-effect waves-light btn-rounded btn-primary m-t-10">Vào
                                            lớp</button>
                                        <button class="btn btn-success btn-rounded waves-effect waves-light m-t-10">Dự
                                            thính</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-2" style="padding-left: 10px;">
                    <div class="card">
                        <div class="box bg-info text-center">
                            <h4 class="font-light text-white">Ôn tập</h4>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="row mt-1">
                            <div class="col-lg-3 col-md-6">
                                <div class="card">
                                    <img class="card-img-top img-responsive" src="../assets/images/big/img1.jpg"
                                        alt="Card image cap"/>
                                    <div class="card-body h-100">
                                        <h4 class="card-title">Ôn tập ngữ pháp</h4>
                                        <p class="card-text">Some quick example text to build on the card title and make
                                            up the bulk of the card's content.</p>
                                        <a href="javascript:void(0)" class="btn btn-primary">Ôn tập</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="card">
                                    <img class="card-img-top img-responsive" src="../assets/images/big/img2.jpg"
                                        alt="Card image cap"/>
                                    <div class="card-body h-100">
                                        <h4 class="card-title">Ôn tập từ vừng</h4>
                                        <p class="card-text">Some quick example text to build on the card title and make
                                            up the bulk of the card's content.</p>
                                        <a href="javascript:void(0)" class="btn btn-primary">Ôn tập</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="card">
                                    <img class="card-img-top img-responsive" src="../assets/images/big/img3.jpg"
                                        alt="Card image cap"/>
                                    <div class="card-body h-100">
                                        <h4 class="card-title">ABC</h4>
                                        <p class="card-text">Some quick example text to build on the card title and make
                                            up the bulk of the card's content.</p>
                                        <a href="javascript:void(0)" class="btn btn-primary">Ôn tập</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 img-responsive">
                                <div class="card">
                                    <img class="card-img-top img-responsive" src="../assets/images/big/img4.jpg"
                                        alt="Card image cap"/>
                                    <div class="card-body h-100">
                                        <h4 class="card-title">Card title</h4>
                                        <p class="card-text">Some quick example text to build on the card title and make
                                            up the bulk of the card's content.</p>
                                        <a href="javascript:void(0)" class="btn btn-primary">Ôn tập</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal fade none-border" id="show-modal-du-thinh">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title">Thông báo</h4>
                                <button type="button" class="close" data-dismiss="modal"
                                    aria-hidden="true">&times;</button>
                            </div>
                            <div class="modal-body">
                                <form role="form">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <label class="control-label">Bạn có muốn vào lớp với tư cách Dự thính
                                                không?</label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-success waves-effect waves-light save-category"
                                    data-dismiss="modal">Có</button>
                                <button type="button" class="btn btn-secondary waves-effect"
                                    data-dismiss="modal">Hủy</button>
                            </div>
                        </div>
                    </div>
                </div>
      </div>
    );
  }
}

export default CourseComponent;
