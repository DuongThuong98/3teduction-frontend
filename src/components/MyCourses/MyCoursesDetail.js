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

function MyCoursesDetail (props) {
  const [course, setCourse] = useState({
    name: "",
    shortDesc: "",
    content: "",
    category: "",
    teacherName: ''
  });

  const idUrl = props.match.params.id;

  const [myCurriculums, setMyCurriculums] = useState([]);
  const [diligencesDate, setDiligencesDate] = useState([]);
  const [video, setVideo] = useState({
    name: "",
    linkVideo: "",
    length: "",
  });
  const [doc, setDoc] = useState();
  const [homework, setHomework] = useState();

  const [teacherName, setTeacherName] = useState(null);

  useEffect(() => {
    getMyCurriculums();
    getCourseInfo(idUrl);
    getDiligenceDateInCourse();
  }, []);

  const getMyCurriculums = () => {
    api
      .getAllCurriculumByCourseId(idUrl)
      .then((res) => {
        const data = res.data.data;
        setMyCurriculums(data);
      })
      .catch((error) => { });
  };

  const getDiligenceDateInCourse = () => {
    api
      .getDiligenceDateInCourse(idUrl)
      .then((res) => {
        const data = res.data.data;
        setDiligencesDate(data);
      })
      .catch((error) => { });
  };

  const getCourseInfo = (id) => {
    api
      .getCourse(id)
      .then((res) => {
        const data = res.data.data;
        setCourse(data);
        setTeacherName(res.data.teacher)
      })
      .catch((error) => { });
  };

  // const getAllCurriculumByCourseId = (id) => {
  //   props.history.push(`/my-courses-detail/${id}`);
  // };

  const showVideoItem = (id, linkDoc, linkHomework) => {
    api
      .getVideoItemInCurriculum(id)
      .then((res) => {
        const data = res.data.data;
        setVideo(data);
        setDoc(linkDoc);
        setHomework(linkHomework);
      })
      .catch((error) => { });

    getDiligenceDateInCourse();
  };

  const showListVideo = (myCurriculums) => {
    const data = myCurriculums;
    const element = data.map((c, index) => (
      <React.Fragment key={c._id}>
        <div className="message-widget message-scroll">
          <a style={{ display: 'flex' }}
            href="javascript:void(0)"
            onClick={() => showVideoItem(c._id, c.linkDoc.url, c.linkHomework)}
          >
            <div className="user-img" style={{ margin: '0 5px 5px 0' }}>
              <iframe src="https://drive.google.com/file/d/1UrSt0xiK1CH1_sGKr0mClGuY2peJcAM9/preview" width="40" height="40" frameBorder="false"></iframe>
            </div>
            <div className="mail-contnet">
              <h5>{c.name}</h5>
              <span className="time">Độ dài: {c.linkVideo.duration}</span>
            </div>
          </a>
        </div>
      </React.Fragment>
    ));
    return element;
  };

  const showVideo = (vid) => {
    return (
      <div className="col-lg-8 col-xlg-9 col-md-7">
        <div className="card">
          {vid.linkVideo.url !== "" ?
            <iframe src={vid.linkVideo.url} style={{ width: '100%', border: '0 solid transparent' }} height="480"></iframe>
            :
            <iframe src="https://www.youtube.com/embed/IUTRRedYWgw" style={{ width: '100%' }} height="480" frameBorder="0" allowFullScreen></iframe>
          }
        </div>
        <div className="card" style={{ marginTop: "10px" }}>
          <div className="card-body">
            {vid.name &&
              <h4 className="card-title">Bài : {vid.name}</h4>
            }
          </div>
        </div>
        {/* <div className="col-sm-6">
          <div className="row">
            <div className="col text-center">
              <a
                className="btn btn-info btn-block waves-effect waves-light"
                href="#"
              >
                Download file
              </a>
            </div>
          </div>
        </div> */}
      </div >
    )
  }

  const showDiligenceDate = () => {
    return (
      <div className="row m-2">
        <div className="button-group">
          {diligencesDate != null && diligencesDate.map((x, index) => {
            return x === true ? (
              <button
                type="button"
                className="btn waves-effect waves-light btn-success"
              >
                Chuyên cần
              </button>
            ) : (
                <button
                  type="button"
                  className="btn waves-effect waves-light btn-light"
                >
                  Chưa học
                </button>
              );
          })}
        </div>
      </div>
    );
  };

  const getOutCourse = () => {
    props.history.push(`/my-courses`);
  };

  return (
    <div className="text-left">
      <React.Fragment>
        <div>
          {/* <div className="row">
            <div className="col-lg-8 col-xlg-9 col-md-7">
              <div className="button-group">
                <button type="button" className="btn waves-effect waves-light btn-primary"><i className="mdi mdi-speaker-wireless" title="bật loa" /></button>
                <button type="button" className="btn waves-effect waves-light btn-primary"><i className="mdi mdi-speaker-off" title="tắt loa" /></button>
              </div>
            </div>
          </div> */}
          {/* {showDiligenceDate()} */}
          <div className="row">
            {showVideo(video)}

            <div className="col-lg-4 col-xlg-3 col-md-5">
              <div className="card">
                <ul className="nav nav-tabs profile-tab" role="tablist">
                  <li className="nav-item active">
                    {" "}
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#list"
                      role="tab"
                    >
                      Danh sách
                    </a>{" "}
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                    >
                      Tài liệu
                    </a>{" "}
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#settings"
                      role="tab"
                    >
                      Thông tin
                    </a>{" "}
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" id="list" role="tabpanel">
                    <div className="card">
                      <div className="card-body">
                        <div className="message-box">
                          <div className="message-widget message-scroll">
                            {showListVideo(myCurriculums)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane " id="home" role="tabpanel">
                    <div className="card-body">
                      <div className="chat-right-aside">
                        <div className="chat-main-header">
                          <div className="b-b">
                            <h4 className="box-title">Tài liệu khóa học</h4>
                          </div>
                        </div>
                        <div className="chat-rbox">
                          <ul className="chat-list">
                            <li>
                              <div className="chat-content">
                                <h5>
                                  {doc && <a
                                    // href="https://drive.google.com/file/d/1KulfnRG3_jAnmc0ageX7BZmZgubHXIXa/view"
                                    href={doc}
                                    target="_blank"
                                  >
                                    Xem tài liệu
                                  </a>}
                                  <br />
                                  <br />
                                  {homework && <a
                                    // href="https://drive.google.com/file/d/1KulfnRG3_jAnmc0ageX7BZmZgubHXIXa/view"
                                    href={"https://mielts.herokuapp.com/user/mocktest/" + homework}
                                    target="_blank"
                                  >
                                    Bài kiểm tra
                                  </a>}
                                </h5>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="settings" role="tabpanel">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-8 col-xs-8 b-r">
                          {" "}
                          <strong>Tên khóa</strong>
                          <br />
                          <p className="text-muted">{course.name}</p>
                        </div>
                        <div className="col-md-4 col-xs-4 b-r">
                          {" "}
                          <strong>Giáo viên</strong>
                          <br />
                          <p className="text-muted">
                            {teacherName}
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-8 col-xs-8 b-r">
                          {" "}
                          <strong>Mô tả</strong>
                          <br />
                          <p className="text-muted">{course.shortDesc}</p>
                        </div>
                        <div className="col-md-4 col-xs-4 b-r">
                          {" "}
                          <strong>Thể loại</strong>
                          <br />
                          <p className="text-muted">{course.category}</p>
                        </div>
                      </div>
                      {/* <div className="row">
                        <div className="col-md-12 col-xs-12 b-r">
                          {" "}
                          <strong>Nội dung</strong>
                          <br />
                          <p className="text-muted">{course.content}</p>
                        </div>
                      </div> */}
                    </div>
                    <hr />
                  </div>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="row">
                  <div className="col text-center">
                    <a
                      className="btn btn-primary btn-block waves-effect waves-light"
                      data-toggle="modal"
                      data-target="#show-modal-feedback"
                    >
                      Đánh giá
                    </a>
                  </div>
                  <div className="col text-center">
                    <a
                      className="btn btn-secondary btn-block waves-effect waves-light"
                      data-toggle="modal"
                      data-target="#show-modal"
                    >
                      Thoát
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade none-border" id="show-modal-feedback">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Đánh giá khóa học</h4>
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
                  <form role="form">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="control-label">
                            Đánh giá giáo viên
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            className="form-control"
                            placeholder="John doe"
                          />
                          <div className="col-lg-12 col-md-12 mt-1">
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label">
                            Đánh giá chất lượng bài học
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            className="form-control"
                            placeholder="John doe"
                          />
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
                          <input
                            type="text"
                            id="firstName"
                            className="form-control"
                            placeholder="John doe"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-danger waves-effect waves-light save-category"
                    data-dismiss="modal"
                  >
                    Đánh giá
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary waves-effect"
                    data-dismiss="modal"
                  >
                    Hủy
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade none-border" id="show-modal">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Thông báo</h4>
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
                  <form role="form">
                    <div className="row">
                      <div className="col-md-12">
                        <label className="control-label">
                          Bạn muốn rời khỏi ngay bây giờ?
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-danger waves-effect waves-light save-category"
                    data-dismiss="modal"
                    onClick={() => getOutCourse()}
                  >
                    Có
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary waves-effect"
                    data-dismiss="modal"
                  >
                    Hủy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
}

export default connect(null, null)(withRouter(MyCoursesDetail));
