// @ts-nocheck
import React, { useState, useEffect } from "react";
import { HashRouter as Router, withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { Input, Table, Modal } from "antd";
import 'antd/dist/antd.css'
import * as api from "../../../utils/api";
import * as cssContants from "../../../constants/css.contants";
import moment from 'moment';

function TableAbsence (props) {
  const [absences, setAbsences] = useState([]);
  const [customTable, setTable] = useState(absences);
  const [isShowDeleteModal, setDeleteModal] = useState(false);
  const [idAbsence, setIdAbsence] = useState(null);

  useEffect(() => {
    getAbsences();
  }, []);

  const getAbsences = () => {
    api.getAllAbsencees()
      .then((res) => {
        const data = res.data.data;
        data.map(el => {
          let dateFrom = moment(new Date(el.dateFrom));
          el.dateFrom = dateFrom.format("DD/MM/YYYY");
          let dateTo = moment(new Date(el.dateTo));
          el.dateTo = dateTo.format("DD/MM/YYYY")
        })
        setTable(data);
        setAbsences(data);
      })
      .catch((error) => { });

  };

  const deleteAbsenceApi = (id) => {
    api
      .deleteAbsence(id)
      .then((res) => {
        getAbsences();
      })
      .catch((err) => { });
  };

  const showModal = (id) => {
    setDeleteModal(true);
    setIdAbsence(id);
  };

  const handleCancel = () => {
    setDeleteModal(false);
  };

  const deleteAbsence = () => {
    deleteAbsenceApi(idAbsence);
    handleCancel();
    console.log("ok");
  };

  const editTable = (id) => {
    props.history.push(`/absences-edit/${id}`);
  };

  const columns = [
    {
      title: "Lí do",
      dataIndex: "reason",
      sorter: (a, b) => (a.reason.toLowerCase() > b.reason.toLowerCase() ? 1 : -1),
      width: "25%",
    },
    {
      title: "Ngày bắt đầu",
      dataIndex: "dateFrom",
      width: "15%",
    },
    {
      title: "Ngày kết thúc",
      dataIndex: "dateTo",
      width: "15%",
    },
    {
      title: "Hoc sinh",
      dataIndex: "studentID",
      width: "15%",
    },
    {
      title: "Lớp",
      dataIndex: "classID",
      width: "15%",
    },
    {
      title: "Status",
      dataIndex: "status",
      width: "5%",
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

  const handleOnchange = (e) => {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;

    setSearchModel({
      ...searchModel,
      [target.name]: value,
    });
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
              to="/absences-add"
            ><i className="fa fa-plus-circle" /> Create New</Link>
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
                aria-expanded="false">
                <i
                  className="fa fa-search"
                  style={{ fontSize: "20px", verticalAlign: "middle" }}
                />
              </a>
             <div className="table-responsive">
                <div
                  id="demo-foo-addrow" className="table m-t-30 table-hover no-wrap contact-list">
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
        onOk={deleteAbsence}
        okType={"danger"}
        onCancel={handleCancel}>
        <p
          // @ts-ignore
          style={cssContants.firstContent, cssContants.dangerColor}>
          Do you really want to delete this record?
        </p>
      </Modal>
    </React.Fragment>
  );
}

export default connect(null, null)(withRouter(TableAbsence));
