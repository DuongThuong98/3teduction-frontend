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

function ManageAdminForm (props) {
  const [model, setModel] = useState({
    displayName: "",
    email: '',
    password: "",
    phone: "",
    birthdate: "",
    address: "",
    gender: "",
    confirmPassword:"", 
  });

  const dateFormat = "DD/MM/YYYY";
  const dateFormatList = ['DD/MM/YYYY'];

  useEffect(() => {
  }, []);

  const handleOnchange = (e) => {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;

    setModel({
      ...model,
      [target.name]: value,
    });
  };

  const onChange =(e) =>{
    let target = e.target;
    let value = target.type;

    setModel({
      ...model,
      [target.name]: value,
    });
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    let _model = {
      ...model,
    };
      api.createAdmin(_model)
        .then((res) => {
          console.log("create success");
          props.history.push("/admins");
        })
        .catch((err) => {
          console.log("err", err);
        });
  };

  const showForm = () => {
    return (
      <form className="mt-4" onSubmit={handleSubmit} onKeyPress={(event) => {if (event.which === 13) event.preventDefault(); }}>
        <div className="form-body">
          <div className="card-body">
            <div className="row pt-3">
              <h4 className="card-title">Thông tin cơ bản</h4>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="name">Tên hiển thị</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tên hiển thị"
                    id="displayName"
                    name="displayName"
                    value={model.displayName}
                    onChange={handleOnchange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={model.email}
                    onChange={handleOnchange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="password">Mật khẩu</label>
                  <Input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Mật khẩu"
                    value={model.password}
                    onChange={handleOnchange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="confirmPassword">Xác nhận Mật khẩu</label>
                  <Input
                    type="confirmPassword"
                    className="form-control"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Mật khẩu"
                    value={model.confirmPassword}
                    onChange={handleOnchange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="birthdate">Ngày sinh</label>
                  <DatePicker
                    className="form-control"
                    id="birthdate"
                    name="birthdate"
                    value={moment(model.birthdate, dateFormatList[0])} format={dateFormatList}
                    onChange={(date, dateString) => {
                      setModel({
                        ...model,
                        birthdate: dateString
                      })
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="address">Địa chỉ</label>
                  <Input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    placeholder="Mật khẩu"
                    value={model.address}
                    onChange={handleOnchange}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                <Radio.Group onChange={this.onChange} name="gender">
                  <Radio value={0}>Nam</Radio>
                  <Radio value={1}>Nữ</Radio>
               </Radio.Group>
                </div>
              </div>
              <div className="col-md-12">
                <button className="btn btn-success"
                  onClick={() => props.history.push("/admins")}>
                  {" "}
                  Cancel{" "}
                </button>
                <button type="submit" className="btn btn-primary m-l-5">
                 Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  };

  const showCommon = () => {
    return (
      <React.Fragment>
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
                <li className="breadcrumb-item active">Admin</li>
              </ol>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  };

  return (
    <div className="text-left">
      <React.Fragment>
        {showCommon()}
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Create/Edit</h4>
                {showForm()}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
}

export default connect(null, null)(withRouter(ManageAdminForm));
