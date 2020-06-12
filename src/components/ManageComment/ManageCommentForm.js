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
import { useToasts } from "react-toast-notifications";
import Select from "react-select";

import * as api from "../../utils/api";
import { Checkbox, DatePicker, Input, Radio } from "antd";
import moment from "moment";
import TextArea from "antd/lib/input/TextArea";

function ManageCommentForm(props) {
  const [model, setModel] = useState({
    title: "",
    content: "",
    datePosted: "",
    like: "",
    authorId: "",
    isBlock: "",
  });

  const dateFormatList = ["DD/MM/YYYY"];

  useEffect(() => {}, []);

  const showForm = () => {
    return (
      <form
        className="mt-4"
        onKeyPress={(event) => {
          if (event.which === 13) event.preventDefault();
        }}
      >
        <div className="form-body">
          <div className="card-body">
            <div className="row pt-3">
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="name">Tiêu đề</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    value={model.title}
                    disabled
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="content">Nội dung</label>
                  <TextArea
                    type="text"
                    row="3"
                    className="form-control"
                    id="content"
                    name="content"
                    value={model.content}
                    disabled
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="birthdate">Ngày bình luận</label>
                  <DatePicker
                    className="form-control"
                    id="postedDate"
                    name="postedDate"
                    value={moment(model.postedDate, dateFormatList[0])}
                    format={dateFormatList}
                    disabled
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="authorID">Người bình luận</label>
                  <Input
                    type="text"
                    className="form-control"
                    id="authorID"
                    name="authorID"
                    value={model.authorID}
                  />
                </div>
              </div>

              <div className="col-md-12">
                <button
                  className="btn btn-success"
                  onClick={() => props.history.push("/comments")}
                >
                  {" "}
                  Cancel{" "}
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
                <li className="breadcrumb-item active">Comment</li>
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

export default connect(null, null)(withRouter(ManageCommentForm));
