// @ts-nocheck
import React, { useState, useEffect, Fragment } from "react";
import { HashRouter as Router, withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { Input, Table, Modal } from "antd";
import "antd/dist/antd.css";
import * as api from "../../../utils/api";
import * as cssContants from "../../../constants/css.contants";
import moment from "moment";
import classHours from '../../../constants/hours'

function ListMyCourses (props) {
  const [myCourses, setMyCourses] = useState([]);
  const [id, setId] = useState(null);

  useEffect(() => {
    getMyCourses();
  }, []);

  const getMyCourses = () => {
    api
      .getAllMyCourses()
      .then((res) => {
        const data = res.data.data;
        setMyCourses(data);
      })
      .catch((error) => { });
  };


  const goToCurriculum = (id) => {
    props.history.push(`/my-courses-detail/${id}`);
  };

  const showMyCourses = (courses) => {
    const data = courses;
    const element = data.map((c, index) => (

      <React.Fragment key={c.id}>
        <div className="col-lg-3 col-md-4">
          <div className="card h-100">
            <div className="el-card-item">
              <div className="el-card-avatar el-overlay-1">
                <img src="images/big/img1.jpg" alt="user" />
                <div className="el-overlay">
                  <ul className="el-info">
                    <li>
                      <button className="btn default btn-outline image-popup-vertical-fit" onClick={() => goToCurriculum(c.id)}>
                        <i className="icon-paper-plane" title="Vào học" />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="el-card-content">
                <h4 className="box-title" style={{ color: "#03a9f3" }}>{c.name}</h4>
                <h6 className="box-title text-left ml-1">Mô tả: {c.shortDesc}</h6>
                <div className="card-body" style={{ padding: '0.25rem' }}>
                  <button type="button" className="btn waves-effect waves-light btn-rounded btn-primary m-t-10"
                    onClick={() => goToCurriculum(c.id)}>Vào học</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>

    ));
    return element;
  }

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
          </div>
        </div>
      </div>
      <div className="row mt-2" style={{
        paddingleft: '10px'
      }}>
        <div className="card">
          <div className="box bg-info text-center">
            <h4 className="font-light text-white">Khóa học của tôi</h4>
          </div>
        </div>
      </div >
      <div className="row el-element-overlay">

        {showMyCourses(myCourses)}

      </div >
      <div className="row mt-2" style={{ paddingleft: '10px' }}>
        <div className="card">
          <div className="box bg-info text-center">
            <h4 className="font-light text-white">Học giao tiếp song ngữ</h4>
          </div>
        </div>
      </div >
      <div className="row el-element-overlay">
        <div className="col-lg-4 col-md-6">
          <div className="card">
            <div className="el-card-item">
              <div className="el-card-avatar el-overlay-1">
                <img src="images/big/img1.jpg" alt="user" />
                <div className="el-overlay">
                  <ul className="el-info">
                    <li>
                      <a className="btn default btn-outline image-popup-vertical-fit" href="images/big/img1.jpg">
                        <i className="icon-paper-plane" title="Vào học" />
                      </a>
                    </li>
                    <li>
                      <a className="btn default btn-outline" data-toggle="modal" data-target="#show-modal-du-thinh">
                        <i className="icon-earphones" title="Dự thính" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="el-card-content">
                <h4 className="box-title">Học về đồ đạc trong nhà</h4>
                <div className="card-body" style={{ padding: '0.25rem' }}>
                  <button type="button" className="btn waves-effect waves-light btn-rounded btn-primary m-t-10">Vào
                      lớp</button>
                  <button className="btn btn-success btn-rounded waves-effect waves-light m-t-10" data-toggle="modal" data-target="#show-modal-du-thinh">Dự
                      thính</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
      <div className="row mt-2" style={{ paddingleft: '10px' }}>
        <div className="card">
          <div className="box bg-info text-center">
            <h4 className="font-light text-white">Học nghe</h4>
          </div>
        </div>
      </div >
      <div className="row el-element-overlay">
        <div className="col-lg-4 col-md-6">
          <div className="card">
            <div className="el-card-item">
              <div className="el-card-avatar el-overlay-1">
                <img src="images/big/img6.jpg" alt="user" />
                <div className="el-overlay">
                  <ul className="el-info">
                    <li>
                      <a className="btn default btn-outline image-popup-vertical-fit" href="images/big/img6.jpg">
                        <i className="icon-paper-plane" title="Vào học" />
                      </a>
                    </li>
                    <li>
                      <a className="btn default btn-outline" data-toggle="modal" data-target="#show-modal-du-thinh">
                        <i className="icon-earphones" title="Dự thính" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="el-card-content">
                <h4 className="box-title">Học về đồ đạc trong nhà</h4>
                <div className="card-body" style={{ padding: '0.25rem' }}>
                  <button type="button" className="btn waves-effect waves-light btn-rounded btn-primary m-t-10">Vào
                      lớp</button>
                  <button className="btn btn-success btn-rounded waves-effect waves-light m-t-10" data-toggle="modal" data-target="#show-modal-du-thinh">Dự
                      thính</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
      <div className="row mt-2" style={{ paddingleft: '10px' }}>
        <div className="card">
          <div className="box bg-info text-center">
            <h4 className="font-light text-white">Ôn tập</h4>
          </div>
        </div>
      </div >
      <div className="row">
        <div className="col-12">
          <div className="row mt-1">
            <div className="col-lg-3 col-md-6">
              <div className="card">
                <img className="card-img-top img-responsive" src="images/big/img1.jpg" alt="Card image cap" />
                <div className="card-body h-100">
                  <h4 className="card-title">Ôn tập ngữ pháp</h4>
                  <p className="card-text">Some quick example text to build on the card title and make
                      up the bulk of the card's content.</p>
                  <a className="btn btn-primary">Ôn tập</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card">
                <img className="card-img-top img-responsive" src="images/big/img2.jpg" alt="Card image cap" />
                <div className="card-body h-100">
                  <h4 className="card-title">Ôn tập từ vừng</h4>
                  <p className="card-text">Some quick example text to build on the card title and make
                      up the bulk of the card's content.</p>
                  <a className="btn btn-primary">Ôn tập</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade none-border" id="show-modal-du-thinh">
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
                    <label className="control-label">Bạn có muốn Vào học với tư cách Dự thính
                        không?</label>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-success waves-effect waves-light save-category" data-dismiss="modal">Có</button>
              <button type="button" className="btn btn-secondary waves-effect" data-dismiss="modal">Hủy</button>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default connect(null, null)(withRouter(ListMyCourses));
