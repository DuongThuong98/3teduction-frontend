// @ts-nocheck
import React, { useState, useEffect } from "react";
import { HashRouter as Router, withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { Input, Table, Modal } from "antd";
import "antd/dist/antd.css";
import * as api from "../../../utils/api";
import * as cssContants from "../../../constants/css.contants";
import moment from "moment";

function TableTeacher (props) {
  const [teachers, setTeachers] = useState([]);
  const [customTable, setTable] = useState(teachers);
  const [isShowModal, setModal] = useState(false);
  const [isShowModalDelete, setModalDelete] = useState(false);
  const [idTeacher, setIdTeacher] = useState(null);

  useEffect(() => {
    getTeachers();
  }, []);

  const getTeachers = () => {
    api
      .getAllTeachers()
      .then((res) => {
        const data = res.data.data;
        data.map((el) => {
          let bd = moment(new Date(el.birthdate));
          el.birthdate = bd.format("DD/MM/YYYY");
        });
        setTable(data);
        setTeachers(data);
      })
      .catch((error) => { });
  };

  const showModal = (id) => {
    setModal(true);
    setIdTeacher(id);
  };

  const handleCancel = () => {
    setModal(false);
  };

  const blockTeacher = () => {
    blockTeacherApi(idTeacher);
    handleCancel();
  };

  const blockTeacherApi = (id) => {
    api
      .blockTeacher(id)
      .then((res) => {
        getTeachers();
      })
      .catch((err) => { });
  };

  const deleteTeacherApi = (id) => {
    api
      .deleteTeacher(id)
      .then((res) => {
        getTeachers();
      })
      .catch((err) => { });
  };

  const showModalDelete = (id) => {
    setModalDelete(true);
    setIdTeacher(id);
  };

  const handleCancelDelete = () => {
    setModalDelete(false);
  };

  const deleteTeacher = () => {
    deleteTeacherApi(idTeacher);
    handleCancelDelete();
  };

  const editTable = (id) => {
    props.history.push(`/teachers-edit/${id}`);
  };

  const columns = [
    {
      title: "Tên hiển thị",
      dataIndex: "username",
      sorter: (a, b) =>
        a.username.toLowerCase() > b.username.toLowerCase() ? 1 : -1,
      width: "20%",
    },
    {
      title: "Email",
      dataIndex: "email",
      width: "20%",
    },
    {
      title: "Điện thoại",
      dataIndex: "phone",
      width: "10%",
    },
    {
      title: "Ngày sinh",
      dataIndex: "birthdate",
      width: "10%",
    },
    {
      title: "Blocked",
      dataIndex: "isBlocked",
      width: "5%",
    },
    {
      title: "Giới tính",
      dataIndex: "gender",
      width: "5%",
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      width: "15%",
    },
    {
      title: "Action",
      key: "action",
      width: "15%",
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
                className="btn btn-sm btn-warning width-60 container-btn__delete m-l-10"
                onClick={() => showModal(row.id)}
              >
                Block Teacher
              </button>
              <button
                className="btn btn-sm btn-danger width-60 container-btn__delete m-l-10"
                onClick={() => showModalDelete(row.id)}
              >
                Delete
              </button>
            </div>
          </React.Fragment>
        );
      },
    },
  ];

  const onChangeTable = () => { };

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
              to="/teachers-add"
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
        visible={isShowModal}
        onOk={blockTeacher}
        okType={"danger"}
        onCancel={handleCancel}
      >
        <p>Do you really want to block teacher?</p>
      </Modal>

      <Modal
        title="Are you sure?"
        visible={isShowModalDelete}
        onOk={deleteTeacher}
        okType={"danger"}
        onCancel={handleCancelDelete}>
        <p
          // @ts-ignore
          style={cssContants.firstContent, cssContants.dangerColor}>
          Do you really want to delete this record?
        </p>
      </Modal>
    </React.Fragment>
  );
}

export default connect(null, null)(withRouter(TableTeacher));
