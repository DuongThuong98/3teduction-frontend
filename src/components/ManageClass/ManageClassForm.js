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

import * as api from "./../../utils/api";
import { Checkbox, DatePicker } from "antd";

function ManageClassForm (props) {
  const [classModel, setClassModel] = useState({
    name: "",
    status: 0,
    categoryID: "",
    courseID: "",
    dateOpening: "",
    dateClosed: "",
    content:''
  });

  const [categories, setCategories] = useState([]);
  const [courses, setCourses] = useState([]);
  const dateFormat = 'DD/MM/YYYY';

  useEffect(() => {
    api
      .getCategoryDropdown()
      .then(res => {
        let list = res.data.data.map(c => {
          return c;
        });
        setCategories(list);
      })
      .catch(err => {
        console.log("err", err);
      });

    api
      .getCourseDropdown()
      .then(res => {
        let list = res.data.data.map(c => {
          return c;
        });
        setCourses(list);
      })
      .catch(err => {
        console.log("err", err);
      });

    if (idUrl) {
      api
        .getClassById(idUrl)
        .then((res) => {
          setClassModel(res.data.data);
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
  }, []);

  const idUrl = props.match.params.id;

  const handleOnchange = (e) => {
    let target = e.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;

    setClassModel({
      ...classModel,
      [target.name]: value,
    });
    console.log("handleOnchange", classModel);
  };

  function onChangeDateOpen(date, dateString) {
    classModel.dateOpening = dateString;
    setClassModel({
      ...classModel
    });
    console.log("handleOnchange", classModel);
  }

  function onChangeDateClose(date, dateString) {
    classModel.dateClosed = dateString;
    setClassModel({
      ...classModel
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let _classModel = {
      ...classModel,
    };

    console.log("_classModel", _classModel);

    if (idUrl) {
      api
        .updateClass(idUrl, _classModel)
        .then((res) => {
          console.log("edit success");
          props.history.push("/classes");
        })
        .catch((err) => {
          console.log("err", err);
        });
    } else {
      api
        .createClass(_classModel)
        .then((res) => {
          console.log("create success");
          props.history.push("/classes");
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
  };

  const handleChangeCheckbox = () => {
    // setContractor({ ...contractor, approved: !contractor.approved })
  }

  const showForm = () => {
    return (
      <form className="mt-4" onSubmit={handleSubmit}
        onKeyPress={(event) => {
          if (event.which === 13) event.preventDefault();
        }}>
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
                    placeholder="Class name"
                    id="name"
                    name="name"
                    value={classModel.name}
                    onChange={handleOnchange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="content">Content</label>
                  <input
                    type="text"
                    className="form-control"
                    id="content"
                    placeholder="Nội dung"
                    value={classModel.content}
                    onChange={handleOnchange}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="dateOpening">Thời gian bắt đầu</label>
                  <DatePicker  className="form-control"
                    id="dateOpening" name="dateOpening" onChange={onChangeDateOpen} format={dateFormat}/>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="dateClosed">Thời gian kết thúc</label>
                  <DatePicker  className="form-control"
                    id="dateClosed" name="dateClosed" onChange={onChangeDateClose} format={dateFormat}/>
                </div>
              </div>
            </div>
            <div className="row pt-3">
              <h4 className="card-title">Chọn lớp</h4>
              <div className="col-md-12">
                <div className="form-group">
                  <label className="control-label">Loại Lớp</label>
                  <select
                    className="form-control"
                    name="category"
                    onChange={handleOnchange}>
                    {categories.map(x => {
                      return (
                        <React.Fragment key={x._id}>
                          <option
                            //  selected={updateUser.regionId == x.id}
                            value={x._id}>{x.name}</option>
                        </React.Fragment>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label className="control-label">Khóa</label>
                  <select
                    className="form-control"
                    name="course"
                    onChange={handleOnchange}>
                    {courses.map(x => {
                      return (
                        <React.Fragment key={x._id}>
                          <option
                            //  selected={updateUser.regionId == x.id}
                            value={x._id}>{x.name}</option>
                        </React.Fragment>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <Checkbox name="status" onChange={handleOnchange}
                  // checked={contractor.status}
                  >
                  </Checkbox>
                  <label className="control-label m-l-10">Ca</label>
                </div>
              </div>
              <div className="col-md-12">
                <button
                  className="btn btn-success"
                  onClick={() => props.history.push("/classes-test")}>
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
                <li className="breadcrumb-item active">Teacher</li>
              </ol>
              {/* <a
                type="button"
                className="btn btn-info d-none d-lg-block m-l-15"
                href="./_admin-add-teacher.html"
              >
                <i className="fa fa-plus-circle"></i> Submit
              </a> */}
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

export default connect(null, null)(withRouter(ManageClassForm));