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

function ManageClassForm(props) {
  const [classModel, setClassModel] = useState({
    className: "",
    note: "",
  });

  useEffect(() => {
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
    setClassModel({
      ...classModel,
      [target.name]: target.value,
    });
    console.log("handleOnchange", classModel);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newClassModel = {
      ...classModel,
    };
    if (idUrl) {
      api
        .updateClass(idUrl, newClassModel)
        .then((res) => {
          console.log("edit success");
          props.history.push("/classs");
        })
        .catch((err) => {
          console.log("err", err);
        });
    } else {
      api
        .createClass(newClassModel)
        .then((res) => {
          console.log("create success");
          props.history.push("/classs");
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
  };

  console.log("classModel", classModel);

  const showBasicInfor = () => {
    return (
      <div className="panel panel-inverse">
        <div className="panel-heading">
          <h4 className="panel-title">Basic Information</h4>
        </div>
        <div className="panel-body">
          <React.Fragment>
            <div className="form-group">
              <label className="col-md-3 control-label">
                Class Name<span style={{ color: "red" }}>*</span>
              </label>
              <div className="col-md-9">
                <input
                  type="text"
                  className="form-control"
                  placeholder="ClassName"
                  name="className"
                  value={classModel.className}
                  onChange={handleOnchange}
                  required
                />
              </div>
            </div>
          </React.Fragment>
        </div>
      </div>
    );
  };

  const showNote = () => {
    return (
      <React.Fragment>
        <div className="panel panel-inverse" data-sortable-id="form-stuff-3">
          <div className="panel-heading">
            <h4 className="panel-title">Note Information</h4>
          </div>
          <div className="panel-body">
            <div className="form-group">
              <label className="col-md-3 control-label">Note</label>
              <div className="col-md-9">
                <input
                  type="text"
                  className="form-control"
                  placeholder="ClassName"
                  name="className"
                  value={classModel.className}
                  onChange={handleOnchange}
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  };

  return (
    <div className="text-left">
      <React.Fragment>
        <form
          className="form-horizontal"
          onSubmit={handleSubmit}
          onKeyPress={(event) => {
            if (event.which === 13 /* Enter */) event.preventDefault();
          }}
        >
          <div className="row d-flex d-flex__row">
            <div className="d-flex d-flex__column col-md-6 col-xs-12">
              <div className="col-md-12">{showBasicInfor()}</div>
            </div>
            <div className="d-flex d-flex__column col-md-6 col-xs-12">
              <div className="col-md-12">{showNote()}</div>
            </div>
          </div>
          <div className="row text-right">
            <div className="col-md-12">
              <button
                className="btn btn-purple"
                onClick={() => props.history.push("/classs")}
              >
                {" "}
                Cancel{" "}
              </button>
              <button type="submit" className="btn btn-success m-l-5">
                {" "}
                {idUrl ? "Update" : "Create"}
              </button>
            </div>
          </div>
        </form>
      </React.Fragment>
    </div>
  );
}

export default connect(null, null)(withRouter(ManageClassForm));
