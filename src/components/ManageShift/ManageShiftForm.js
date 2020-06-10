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
import { Checkbox, DatePicker, Input } from "antd";
import moment from "moment";
import { bool } from "prop-types";

function ManageShiftForm (props) {
  const [shiftModel, setShiftModel] = useState({
    status: Boolean,
    classID: "",
    timeIn: "",
    timeOut: "",
  });

  const [classes, setClasses] = useState([]);
  const [today, setToday] = useState(new Date());
  const dateFormat = "DD/MM/YYYY";
  const dateFormatList = ['DD/MM/YYYY HH:mm'];

  useEffect(() => {
    api
      .getClassDropdown()
      .then((res) => {
        let list = res.data.data.map((c) => {
          return c;
        });
        setClasses(list);
      })
      .catch((err) => {
        console.log("err", err);
      });

    if (idUrl) {
      api
        .getShiftById(idUrl)
        .then((res) => {
          let _data = res.data;
          let timeIn = moment(new Date(_data.timeIn));
          _data.timeIn = timeIn.format("MM/DD/YYYY");
          let timeOut = moment(new Date(_data.timeOut));
          _data.timeOut = timeOut.format("MM/DD/YYYY");

          setShiftModel(_data);
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
  }, []);

  const idUrl = props.match.params.id;

  const handleOnchange = (e) => {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;

    setShiftModel({
      ...shiftModel,
      [target.name]: value,
    });
  };

  function isValidDate (str1, str2) {
    return new Date(str2) > new Date(str1);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let _shiftModel = {
      ...shiftModel,
    };

    // if (_shiftModel.dateIn != null && _shiftModel.dateOut != null) {
    //   if (!isValidDate(_shiftModel.dateOut, _shiftModel.dateIn)) {
    //     return;
    //   }
    // }

    console.log("_shiftModel", _shiftModel);

    if (idUrl) {
      api
        .updateShift(idUrl, _shiftModel)
        .then((res) => {
          console.log("edit success");
          props.history.push("/shifts");
        })
        .catch((err) => {
          console.log("err", err);
        });
    } else {
      api
        .createShift(_shiftModel)
        .then((res) => {
          console.log("create success");
          props.history.push("/shifts");
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
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
                  <label htmlFor="classID">Chọn lớp</label>
                  <select
                    className="form-control"
                    name="classID"
                    value={shiftModel.classID}
                    onChange={handleOnchange} required>
                    <option value=''>Chọn lớp</option>
                    {classes.map((x) => {
                      return (
                        <React.Fragment key={x._id}>
                          <option value={x._id}>{x.name}</option>
                        </React.Fragment>
                      );
                    })}
                  </select>
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="timeIn">Thời gian bắt đầu</label>
                  <DatePicker
                    className="form-control"
                    id="timeIn"
                    name="timeIn"
                    value={moment(shiftModel.timeIn, dateFormatList[0])} format={dateFormatList}
                    onChange={(date, dateString) => {
                      setShiftModel({
                        ...shiftModel,
                        timeIn: dateString
                      })
                    }}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="timeOut">Thời gian kết thúc</label>
                  <DatePicker
                    className="form-control"
                    id="timeOut"
                    name="timeOut"
                    value={moment(shiftModel.timeOut, dateFormatList[0])} format={dateFormatList}
                    onChange={(date, dateString) => {
                      setShiftModel({
                        ...shiftModel,
                        timeOut: dateString
                      })
                    }}
                  />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <Checkbox
                    name="status"
                    onChange={handleOnchange}
                    // @ts-ignore
                    checked={shiftModel.status}></Checkbox>
                  <label className="control-label m-l-10">Trạng thái</label>
                </div>
              </div>
              <div className="col-md-12">
                <button
                  className="btn btn-success"
                  onClick={() => props.history.push("/shifts")}
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
                <li className="breadcrumb-item active">Shift</li>
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

export default connect(null, null)(withRouter(ManageShiftForm));
