// @ts-nocheck
import React, { useState, useEffect } from "react";
import { HashRouter as Router, withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import "antd/dist/antd.css";
import * as api from "../../../utils/api";
import * as cssContants from "../../../constants/css.contants";
import { Checkbox, DatePicker, Input, Table, Modal } from "antd";
import moment from "moment";

function TableCourse(props) {
  const [courses, setCourses] = useState([]);
  const [customTable, setTable] = useState(courses);
  const [isShowDeleteModal, setDeleteModal] = useState(false);
  const [idCourse, setIdCourse] = useState(null);

  const [categories, setCategories] = useState([]);
  const dateFormat = "DD/MM/YYYY";
  const dateFormatList = ["DD/MM/YYYY"];

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = () => {
    api
      .getAllCourses()
      .then((res) => {
        const data = res.data.data;
        setTable(data);
        setCourses(data);
      })
      .catch((error) => {});
  };

  const deleteCourseApi = (id) => {
    api
      .deleteCourse(id)
      .then((res) => {
        getCourses();
      })
      .catch((err) => {});
  };

  const showModal = (id) => {
    setDeleteModal(true);
    setIdCourse(id);
  };

  const handleCancel = () => {
    setDeleteModal(false);
  };

  const deleteCourse = () => {
    deleteCourseApi(idCourse);
    handleCancel();
    console.log("ok");
  };

  const editTable = (id) => {
    props.history.push(`/courses-edit/${id}`);
  };

  const columns = [
    {
      title: "Lớp",
      dataIndex: "className",
      sorter: (a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1),
      width: "30%",
    },
    {
      title: "Thời gian bắt đầu",
      dataIndex: "timeIn",
      width: "20%",
    },
    {
      title: "Thời gian kết thúc",
      dataIndex: "timeOut",
      width: "20%",
    },
    {
      title: "Status",
      dataIndex: "status",
      width: "20%",
    },
    {
      title: "Action",
      key: "action",
      width: "10%",
      render: (row) => {
        return (
          <React.Fragment>
            <div className="container-btn">
              <button
                className="btn btn-sm btn-success width-60 m-r-2 container-btn__edit"
                onClick={() => editTable(row.id)}
              >
                Edit
              </button>
              <button
                className="btn btn-sm btn-danger width-60 container-btn__delete m-l-10"
                onClick={() => showModal(row.id)}
              >
                Delete
              </button>
            </div>
          </React.Fragment>
        );
      },
    },
  ];

  const onChangeTable = () => {
    console.log("table is changed");
  };

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
              <li className="breadcrumb-item active">Widget Data</li>
            </ol>
            <Link
              type="button"
              className="btn btn-info d-none d-lg-block m-l-15"
              to="/courses-add"
            >
              <i className="fa fa-plus-circle" /> Create New
            </Link>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Tabel name</h4>
              <a
                type="button"
                className="btn waves-effect waves-light block btn-primary m-l-5"
                data-toggle="collapse"
                data-target="#search-form"
                aria-expanded="false"
              >
                <i
                  className="fa fa-search"
                  style={{ fontSize: "20px", verticalAlign: "middle" }}
                />
              </a>
              <div className="table-responsive">
                <div
                  id="demo-foo-addrow"
                  className="table m-t-30 table-hover no-wrap contact-list"
                >
                  <Table
                    bordered
                    columns={columns}
                    dataSource={customTable}
                    onChange={onChangeTable}
                    rowKey={(item) => item.id}
                    pagination={{
                      pageSizeOptions: ["10", "25", "50", "100"],
                      showSizeChanger: true,
                      locale: { items_per_page: "" },
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        title="Are you sure?"
        visible={isShowDeleteModal}
        onOk={deleteCourse}
        okType={"danger"}
        onCancel={handleCancel}
      >
        <p
          // @ts-ignore
          style={(cssContants.firstContent, cssContants.dangerColor)}
        >
          Do you really want to delete this record?
        </p>
      </Modal>
    </React.Fragment>
  );
}

export default connect(null, null)(withRouter(TableCourse));
