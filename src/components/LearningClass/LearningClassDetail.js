import React, { useState, useEffect } from "react";
import {
  HashRouter as Router,
  Link,
  Route,
  Redirect,
  withRouter,
} from "react-router-dom";
import { connect } from "react-redux";
import { useToasts } from "react-toast-notifications";
import Select from "react-select";

import * as api from "../../utils/api";
import { Checkbox, DatePicker, Input, Radio } from "antd";
import moment from "moment";

function LearningClassDetail (props) {
  const [model, setModel] = useState({
    displayName: "",
    email: '',
    password: "",
    phone: "",
    birthdate: "",
    address: "",
    gender: "",
    confirmPassword: "",
  });



  useEffect(() => {
  }, []);

  return (
    <div className="text-left">
      <React.Fragment>
        <div>
          <div className="row">
            <div className="col-lg-8 col-xlg-9 col-md-7">
              <div className="button-group">
                <button type="button" className="btn waves-effect waves-light btn-primary"><i className="mdi mdi-speaker-wireless" title="bật loa" /></button>
                <button type="button" className="btn waves-effect waves-light btn-primary"><i className="mdi mdi-speaker-off" title="tắt loa" /></button>
              </div>
            </div>
            <div className="col-lg-4 col-xlg-3 col-md-5">
              <div className="card">
                <div className="box bg-info text-center">
                  <h4 className="font-light text-white">Thời gian : <span> 06:40</span></h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-xlg-9 col-md-7">
              <div className="card"> <img className="card-img" src="../assets/images/background/socialbg.jpg" height={656} alt="Card image" />
                <div className="card-img-overlay card-inverse text-white social-profile d-flex justify-content-center">
                  <div className="align-self-center">
                  </div>
                </div>
              </div>
              <div className="card" style={{ marginTop: '10px' }}>
                <div className="card-body">
                  <h4 className="card-title">Đây là tên bài học nè</h4>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="row">
                  <div className="col text-center">
                    <a className="btn btn-info btn-block waves-effect waves-light" href="#">Download file</a>
                  </div>
                  <div className="col text-center">
                    <a className="btn btn-success btn-block waves-effect waves-light" href="./_submit_exercise.html">Nộp bài</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-xlg-3 col-md-5">
              <div className="card">
                <ul className="nav nav-tabs profile-tab" role="tablist">
                  <li className="nav-item"> <a className="nav-link active" data-toggle="tab" href="#webcam" role="tab">Trực tuyến</a> </li>
                  <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="#home" role="tab">Trò
                    chuyện</a> </li>
                  <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="#profile" role="tab">Học viên</a> </li>
                  <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="#settings" role="tab">Thông tin lớp</a> </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" id="webcam" role="tabpanel">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-lg-12 col-md-12">
                          <div className="card">
                            <img className="card-img-top img-responsive" src="../assets/images/big/img3.jpg" alt="Card image cap" />
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                          <span className="heading">Đánh giá</span>
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star" />
                          <p>4.1 average based on 254 reviews.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane " id="home" role="tabpanel">
                    <div className="card-body">
                      <div className="chat-right-aside">
                        <div className="chat-main-header">
                          <div className="b-b">
                            <h4 className="box-title">Chat Message</h4>
                          </div>
                        </div>
                        <div className="chat-rbox">
                          <ul className="chat-list">
                            <li>
                              <div className="chat-img"><img src="../assets/images/users/1.jpg" alt="user" /></div>
                              <div className="chat-content">
                                <h5>James Anderson</h5>
                                <div className="box bg-light-info">Lorem Ipsum is simply dummy text of the printing &amp; type setting industry.</div>
                                <div className="chat-time">10:56 am</div>
                              </div>
                            </li>
                            <li>
                              <div className="chat-img"><img src="../assets/images/users/2.jpg" alt="user" /></div>
                              <div className="chat-content">
                                <h5>Bianca Doe</h5>
                                <div className="box bg-light-info">It’s Great opportunity to work.</div>
                                <div className="chat-time">10:57 am</div>
                              </div>
                            </li>
                            <li className="reverse">
                              <div className="chat-content">
                                <h5>Steave Doe</h5>
                                <div className="box bg-light-inverse">It’s Great opportunity to work.</div>
                                <div className="chat-time">10:57 am</div>
                              </div>
                              <div className="chat-img"><img src="../assets/images/users/5.jpg" alt="user" /></div>
                            </li>
                            <li className="reverse">
                              <div className="chat-content">
                                <h5>Steave Doe</h5>
                                <div className="box bg-light-inverse">It’s Great opportunity to work.</div>
                                <div className="chat-time">10:57 am</div>
                              </div>
                              <div className="chat-img"><img src="../assets/images/users/5.jpg" alt="user" /></div>
                            </li>
                            <li>
                              <div className="chat-img"><img src="../assets/images/users/3.jpg" alt="user" /></div>
                              <div className="chat-content">
                                <h5>Angelina Rhodes</h5>
                                <div className="box bg-light-info">Well we have good budget for the project</div>
                                <div className="chat-time">11:00 am</div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="border-top border-bottom">
                          <div className="row">
                            <div className="col-10">
                              <textarea placeholder="Type your message here" className="form-control border-0" defaultValue={""} />
                            </div>
                            <div className="col-2 text-right mt-1 p-1">
                              <button type="button" className="btn btn-info btn-circle"><i className="fas fa-paper-plane" /> </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="profile" role="tabpanel">
                    <div className="card">
                      <div className="card-body">
                        <div className="message-box">
                          <div className="message-widget message-scroll">
                            <a href="javascript:void(0)">
                              <div className="user-img">
                                <img src="../assets/images/users/1.jpg" alt="user" className="img-circle" />
                                <span className="profile-status online pull-right" />
                              </div>
                              <div className="mail-contnet">
                                <h5>Pavan kumar</h5>
                                <i className="fas fa-microphone-slash fa-pull-right mb-1" style={{ fontSize: '26px' }} />
                                <span className="time">Học viên</span>
                              </div>
                            </a>
                            <a href="javascript:void(0)">
                              <div className="user-img">
                                <img src="../assets/images/users/2.jpg" alt="user" className="img-circle" />
                                <span className="profile-status busy pull-right" />
                              </div>
                              <div className="mail-contnet">
                                <h5>Sonu Nigam</h5>
                                <i className="fa fa-microphone fa-pull-right mb-1" style={{ fontSize: '26px' }} />
                                <span className="time">Học viên</span>
                              </div>
                            </a>
                            <a href="javascript:void(0)">
                              <div className="user-img">
                                <span className="round">A</span>
                                <span className="profile-status online pull-right" />
                              </div>
                              <div className="mail-contnet">
                                <h5>Arijit Sinh</h5>
                                <i className="fas fa-microphone-slash fa-pull-right mb-1" style={{ fontSize: '26px' }} />
                                <span className="time">Học viên</span>
                              </div>
                            </a>
                            <a href="javascript:void(0)">
                              <div className="user-img">
                                <img src="../assets/images/users/4.jpg" alt="user" className="img-circle" />
                                <span className="profile-status online pull-right" />
                              </div>
                              <div className="mail-contnet">
                                <h5>Pavan kumar</h5>
                                <i className="fa fa-microphone fa-pull-right mb-1" style={{ fontSize: '26px' }} />
                                <span className="time">Học viên</span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="settings" role="tabpanel">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-4 col-xs-6 b-r"> <strong>Tên lớp</strong>
                          <br />
                          <p className="text-muted">Johnathan Deo</p>
                        </div>
                        <div className="col-md-4 col-xs-6 b-r"> <strong>Ca</strong>
                          <br />
                          <p className="text-muted">16:00</p>
                        </div>
                        <div className="col-md-4 col-xs-6 b-r"> <strong>Giáo viên</strong>
                          <br />
                          <p className="text-muted">johnathan@admin.com</p>
                        </div>
                      </div>
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="row">
                  <div className="col text-center">
                    <a className="btn btn-primary btn-block waves-effect waves-light" data-toggle="modal" data-target="#show-modal-feedback">Đánh giá</a>
                  </div>
                  <div className="col text-center">
                    <a className="btn btn-secondary btn-block waves-effect waves-light" data-toggle="modal" data-target="#show-modal">Thoát</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade none-border" id="show-modal-feedback">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Thông báo</h4>
                  <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                </div>
                <div className="modal-body">
                  <form role="form">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="control-label">Đánh giá giáo viên</label>
                          <input type="text" id="firstName" className="form-control" placeholder="John doe" />
                          <div className="col-lg-12 col-md-12 mt-1">
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label">Đánh giá chất lượng bài học</label>
                          <input type="text" id="firstName" className="form-control" placeholder="John doe" />
                          <div className="col-lg-12 col-md-12 mt-1">
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label">Đánh giá chất lượng kĩ thuật(audio, hình ảnh...)</label>
                          <input type="text" id="firstName" className="form-control" placeholder="John doe" />
                          <div className="col-lg-12 col-md-12 mt-1">
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label">Góp ý</label>
                          <input type="text" id="firstName" className="form-control" placeholder="John doe" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-danger waves-effect waves-light save-category" data-dismiss="modal">Đánh giá</button>
                  <button type="button" className="btn btn-secondary waves-effect" data-dismiss="modal">Hủy</button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade none-border" id="show-modal">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Thông báo</h4>
                  <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                </div>
                <div className="modal-body">
                  <form role="form">
                    <div className="row">
                      <div className="col-md-12">
                        <label className="control-label">Bạn có muốn rời khỏi lớp ngay bây giờ?</label>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-danger waves-effect waves-light save-category" data-dismiss="modal">Có</button>
                  <button type="button" className="btn btn-secondary waves-effect" data-dismiss="modal">Hủy</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
      </React.Fragment>
    </div>
  );
}

export default connect(null, null)(withRouter(LearningClassDetail));
