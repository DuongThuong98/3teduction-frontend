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
import { Editor } from "@tinymce/tinymce-react";

function ManageCourseForm (props) {
  const [model, setModel] = useState({
    name: "",
    shortDesc: "",
    new: "",
    tuition: "",
    content: "",
    lecturer: "",
    category: "",
    dateStart: "",
    dateEnd: "",
  });

  const [categories, setCategories] = useState([]);
  const [teachers, setTeachers] = useState([]);

  const dateFormat = "YYYY-MM-DD";
  const dateFormatList = ['DD/MM/YYYY'];

  const editorConfig = {
    height: 200,
    menubar: true,
    plugins: [
      'advlist autolink lists link image charmap hr',
      'searchreplace visualblocks visualchars code media table',
      'paste textcolor colorpicker textpattern imagetools'
    ],
    toolbar: `styleselect | bold italic underline | forecolor backcolor | bullist numlist | link image | media`,
    convert_fonts_to_spans: true,
    paste_word_valid_elements: "b,strong,i,em,h1,h2,u,p,ol,ul,li,a[href],span,color,font-size,font-color,font-family,mark,table,tr,td",
    paste_retain_style_properties: "all",
  };

  useEffect(() => {
    api
      .getCategoryDropdown()
      .then((res) => {
        let list = res.data.data.map((c) => {
          return c;
        });
        setCategories(list);
      })
      .catch((err) => {
        console.log("err", err);
      });

    api
      .getTeacherDropdown()
      .then((res) => {
        let list = res.data.data.map((c) => {
          return c;
        });
        setTeachers(list);
      })
      .catch((err) => {
        console.log("err", err);
      });

    if (idUrl) {
      api
        .getCourse(idUrl)
        .then((res) => {
          setModel(res.data.data);
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

    setModel({
      ...model,
      [target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let _model = {
      ...model,
    };

    if (idUrl) {
      api.updateCourse(idUrl, _model)
        .then((res) => {
          console.log("edit success");
          props.history.push("/courses");
        })
        .catch((err) => {
          console.log("err", err);
        });
    } else {
      api
        .createCourse(_model)
        .then((res) => {
          console.log("create success");
          props.history.push("/courses");
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
  };

  const showForm = () => {
    return (
      <form
        className="mt-4"
        onSubmit={handleSubmit}
        onKeyPress={(event) => {
          if (event.which === 13) event.preventDefault();
        }}
      >
        <div className="form-body">
          <div className="card-body">
            <div className="row pt-3">
              <h4 className="card-title">Thông tin cơ bản</h4>

              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="name">Tên khóa</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tên hiển thị"
                    id="name"
                    name="name"
                    value={model.name}
                    onChange={handleOnchange}
                    required
                    disabled={idUrl ? true : false}
                  />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="category">Chọn category</label>
                  <select
                    className="form-control"
                    name="category"
                    value={model.category}
                    onChange={handleOnchange}
                    required
                  >
                    <option value="">Chọn</option>
                    {categories.map((x) => {
                      return (
                        <React.Fragment key={x}>
                          <option value={x}>{x}</option>
                        </React.Fragment>
                      );
                    })}
                  </select>
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="lecturer">Chọn giáo viên</label>
                  <select
                    className="form-control"
                    name="lecturer"
                    value={model.lecturer}
                    onChange={handleOnchange}
                  >
                    <option value="">Chọn giáo viên</option>
                    {teachers.map((x) => {
                      return (
                        <React.Fragment key={x._id}>
                          <option value={x._id}>{x.username}</option>
                        </React.Fragment>
                      );
                    })}
                  </select>
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="shortDesc">Mô tả ngắn</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Mô tả"
                    id="shortDesc"
                    name="shortDesc"
                    value={model.shortDesc}
                    onChange={handleOnchange}
                    required
                  />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="dateStart">Thời gian bắt đầu</label>
                  <DatePicker
                    className="form-control"
                    id="dateStart"
                    name="dateStart"
                    value={moment(model.dateStart, dateFormat)} format={dateFormat}
                    onChange={(date, dateString) => {
                      setModel({
                        ...model,
                        dateStart: dateString
                      })
                    }}
                  />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="dateEnd">Thời gian kết thúc</label>
                  <DatePicker
                    className="form-control"
                    id="dateEnd"
                    name="dateEnd"
                    value={moment(model.dateEnd, dateFormat)} format={dateFormat}
                    onChange={(date, dateString) => {
                      setModel({
                        ...model,
                        dateEnd: dateString
                      })
                    }}
                  />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <Editor
                    value={model.content}
                    init={editorConfig}
                    onEditorChange={(content) => handleOnchange({ target: { name: 'content', value: content } })}
                  />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="tuition">Giá</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Giá tiền"
                    id="tuition"
                    name="tuition"
                    value={model.tuition}
                    onChange={handleOnchange}
                  />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <Checkbox
                    name="new"
                    onChange={handleOnchange}
                    // @ts-ignore
                    checked={model.new}
                  ></Checkbox>
                  <label className="control-label m-l-10">Khóa mới</label>
                </div>
              </div>
              <div className="col-md-12">
                <button
                  className="btn btn-success"
                  onClick={() => props.history.push("/courses")}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary m-l-5">
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
                <li className="breadcrumb-item active">Course</li>
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

export default connect(null, null)(withRouter(ManageCourseForm));
