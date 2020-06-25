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

function ManageAbsenceForm (props) {
  const [absenceModel, setAbsenceModel] = useState({
    reason: "",
    status: '',
    classID: "",
    dateFrom: "",
    dateTo: "",
  });

  const [classes, setClasses] = useState([]);
  const dateFormatList = ['DD/MM/YYYY'];

  useEffect(() => {
    api
      .getCategoryDropdown()
      .then((res) => {
        let list = res.data.data.map((c) => {
          return c;
        });
        setClasses(list);
      })
      .catch((err) => {
        console.log("err", err);
      });

    api
      .getCourseDropdown()
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
        .getAbsence(idUrl)
        .then((res) => {
          let absenceData = res.data;
          let dateTo = moment(new Date(absenceData.dateTo));
          absenceData.dateTo = dateTo.format("MM/DD/YYYY");
          let dateFrom = moment(new Date(absenceData.dateFrom));
          absenceData.dateFrom = dateFrom.format("MM/DD/YYYY");

          setAbsenceModel(absenceData);
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

    setAbsenceModel({
      ...absenceModel,
      [target.name]: value,
    });
  };

  function isValidDate (str1, str2) {
    return new Date(str2) > new Date(str1);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let _absenceModel = {
      ...absenceModel,
    };

    if (_absenceModel.dateTo != null && _absenceModel.dateFrom != null) {
      if (!isValidDate(_absenceModel.dateFrom, _absenceModel.dateTo)) {
        return;
      }
    }

    console.log("_absenceModel", _absenceModel);

    if (idUrl) {
      api
        .updateAbsence(idUrl, _absenceModel)
        .then((res) => {
          console.log("edit success");
          props.history.push("/absences");
        })
        .catch((err) => {
          console.log("err", err);
        });
    } else {
      api
        .createAbsence(_absenceModel)
        .then((res) => {
          console.log("create success");
          props.history.push("/absences");
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
  };

  const showForm = () => {
    return (
      <form className="mt-4" onSubmit={handleSubmit} onKeyPress={(event) => {if (event.which === 13) event.preventDefault(); }}>
        <div className="form-body">
          <div className="card-body">
            <div className="row pt-3">
              <h4 className="card-title">Thông tin cơ bản</h4>
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="reason">Tên</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Absence reason"
                    id="reason"
                    name="reason"
                    value={absenceModel.reason}
                    onChange={handleOnchange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="dateFrom">Thời gian bắt đầu</label>
                  <DatePicker
                    className="form-control"
                    id="dateFrom"
                    name="dateFrom"
                    value={moment(absenceModel.dateFrom, dateFormatList[0])} format={dateFormatList}
                    onChange={(date, dateString) => {
                      setAbsenceModel({
                        ...absenceModel,
                        dateFrom: dateString
                      })
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="dateTo">Thời gian kết thúc</label>
                  <DatePicker
                    className="form-control"
                    id="dateTo"
                    name="dateTo"
                    value={moment(absenceModel.dateTo, dateFormatList[0])} format={dateFormatList}
                    onChange={(date, dateString) => {
                      setAbsenceModel({
                        ...absenceModel,
                        dateTo: dateString
                      })
                    }}
                  />
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
                    name="classID"
                    value={absenceModel.classID}
                    onChange={handleOnchange}
                  >
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
                  <Checkbox
                    name="status"
                    onChange={handleOnchange}
                    // @ts-ignore
                    checked={absenceModel.status}
                  ></Checkbox>
                  <label className="control-label m-l-10">Đã duyệt</label>
                </div>
              </div>
              <div className="col-md-12">
                <button
                  className="btn btn-success"
                  onClick={() => props.history.push("/absencees")}
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

export default connect(null, null)(withRouter(ManageAbsenceForm));
