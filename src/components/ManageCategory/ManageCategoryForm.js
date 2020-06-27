// @ts-nocheck
import React, { useState, useEffect } from "react";
import {
  HashRouter as Router,
  Link,
  Route,
  Redirect,
  withRouter,
} from "react-router-dom";
import { connect } from "react-redux";

import * as api from "../../utils/api";
import { Checkbox, DatePicker, Input, Radio } from "antd";
import moment from "moment";

function ManageCategoryForm (props) {
  const [model, setModel] = useState({
    name: "",
    icons: "",
    level: "",
    status: false,
    typeID: "",
  });

  useEffect(() => {
    if (idUrl) {
      api.getCategory(idUrl)
        .then((res) => {
          let _data = res.data.data;
          setModel(_data);
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
  }, []);

  const idUrl = props.match.params.id;

  const handleSubmit = (e) => {
    e.preventDefault();
    let _model = {
      ...model,
    };

    if (idUrl) {
      api
        .updateCategory(idUrl, _model)
        .then((res) => {
          console.log("edit success");
          props.history.push("/categories");
        })
        .catch((err) => {
          console.log("err", err);
        });
    } else {
      api
        .createCategory(_model)
        .then((res) => {
          console.log("create success");
          props.history.push("/categories");
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
  };

  const handleOnchange = (e) => {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;

    setModel({
      ...model,
      [target.name]: value,
    });
  };

  const showForm = () => {
    return (
      <form className="mt-4" onSubmit={handleSubmit} onKeyPress={(event) => { if (event.which === 13) event.preventDefault(); }}>
        <div className="form-body">
          <div className="card-body">
            <div className="row pt-3">
              <h4 className="card-title">Thông tin cơ bản</h4>
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="name">Tên</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Category name"
                    id="name"
                    name="name"
                    value={model.name}
                    onChange={handleOnchange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="icons">Icon</label>
                  <Input
                    type="text"
                    className="form-control"
                    id="icons"
                    name="icons"
                    placeholder="Icon"
                    value={model.icons}
                    onChange={handleOnchange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row pt-3">
              <h4 className="card-title"></h4>
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="level">Level</label>
                  <Input
                    type="number"
                    className="form-control"
                    id="level"
                    name="level"
                    placeholder="Icon"
                    value={model.level}
                    onChange={handleOnchange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label className="control-label">Loại</label>
                  <select
                    className="form-control"
                    name="typeID"
                    value={model.typeID}
                    onChange={handleOnchange}>
                    <React.Fragment>
                      <option value="news"> News</option>
                      <option value="mocktest"> MockTest</option>
                    </React.Fragment>
                  </select>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <Checkbox
                    name="status"
                    onChange={handleOnchange}
                    // @ts-ignore
                    checked={model.status}
                  ></Checkbox>
                  <label className="control-label m-l-10">Trạng thái</label>
                </div>
              </div>
              <div className="col-md-12">
                <button
                  className="btn btn-success"
                  onClick={() => props.history.push("/categories")}
                >
                  {" "}
                  Cancel{" "}
                </button>
                <button type="submit" className="btn btn-primary m-l-5">
                  {" "}
                  {idUrl ? "Update" : "Create"}
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
                <li className="breadcrumb-item active">Category</li>
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

export default connect(null, null)(withRouter(ManageCategoryForm));
