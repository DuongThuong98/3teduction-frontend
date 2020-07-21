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
import { Editor } from '@tinymce/tinymce-react';

function ManageDocumentForm (props) {
  const [documentModel, setDocumentModel] = useState({
    isRecommend: Boolean,
    name: "",
    shortDesc: "",
    contents: "",
    categoryId: "",
  });

  const [categories, setCategories] = useState([]);
  const dateFormat = "DD/MM/YYYY";
  const dateFormatList = ['DD/MM/YYYY HH:mm'];

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

    if (idUrl) {
      api
        .getDocument(idUrl)
        .then((res) => {
          let _data = res.data;
          let update = moment(new Date(_data.update));
          _data.update = update.format("DD/MM/YYYY");

          setDocumentModel(_data);
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

    setDocumentModel({
      ...documentModel,
      [target.name]: value,
    });
  };

  function isValidDate (str1, str2) {
    return new Date(str2) > new Date(str1);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let _documentModel = {
      ...documentModel,
    };

    // if (_documentModel.dateIn != null && _documentModel.dateOut != null) {
    //   if (!isValidDate(_documentModel.dateOut, _documentModel.dateIn)) {
    //     return;
    //   }
    // }

    console.log("_documentModel", _documentModel);
    if (idUrl) {
      api
        .updateDocument(idUrl, _documentModel)
        .then((res) => {
          console.log("edit success");
          props.history.push("/documents");
        })
        .catch((err) => {
          console.log("err", err);
        });
    } else {
      api
        .createDocument(_documentModel)
        .then((res) => {
          console.log("create success");
          props.history.push("/documents");
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

              {/* name */}
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="class-content">Tên tài liệu</label>
                  <Input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Tên tài liệu"
                    value={documentModel.name}
                    onChange={handleOnchange}
                    required
                  />
                </div>
              </div>

              {/* shortDesc */}
              <div className="col-md-12">
                <div className="form-group">
                  <Input
                    type="text"
                    className="form-control"
                    id="shortDesc"
                    name="shortDesc"
                    placeholder="Mô tả"
                    value={documentModel.shortDesc}
                    onChange={handleOnchange}
                    required
                  />
                </div>
              </div>

              {/* content */}
              <div className="col-md-12">
                <div className="form-group">
                  <Editor
                    value={documentModel.contents}
                    init={editorConfig}
                    onEditorChange={(content) => handleOnchange({ target: { name: 'contents', value: content } })}
                  />
                </div>
              </div>

              {/* category */}
              <div className="col-md-12">
                <div className="form-group">
                  <label className="control-label">Loại tài liệu</label>
                  <select required
                    className="form-control"
                    name="categoryId"
                    value={documentModel.categoryId}
                    onChange={handleOnchange}>
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

              {/* recommend */}
              <div className="col-md-12">
                <div className="form-group">
                  <Checkbox
                    name="isRecommend"
                    onChange={handleOnchange}
                    // @ts-ignore
                    checked={documentModel.isRecommend}
                  ></Checkbox>
                  <label className="control-label m-l-10">Trạng thái</label>
                </div>
              </div>


              <div className="col-md-12">
                <button
                  className="btn btn-success"
                  onClick={() => props.history.push("/documents")}>
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
                <li className="breadcrumb-item active">Document</li>
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

export default connect(null, null)(withRouter(ManageDocumentForm));
