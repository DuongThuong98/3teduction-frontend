// @ts-nocheck
import React, { useState, useEffect } from "react";
import { HashRouter as Router, withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { Input, Table, Modal } from "antd";
import 'antd/dist/antd.css'
import * as api from "../../../utils/api";

function TableManageRegisterCourseRequest (props) {
  const [courseRequests, setCourseRequests] = useState([]);
  const [customTable, setTable] = useState(courseRequests);
  const [isShowModal, setModal] = useState(false);
  const [id, setId] = useState(null);

  useEffect(() => {
    getCourseRequests();
  }, []);

  const getCourseRequests = () => {
    api.getCourseRequests()
      .then((res) => {
        const data = res.data.data;
        setTable(data);
        setCourseRequests(data);
      })
      .catch((error) => { });

  };

  const showModal = (id) => {
    setModal(true);
    setId(id);
  };

  const handleCancel = () => {
    setModal(false);
  };

  const updateStatus = () => {
    updateStatusApi(id);
    handleCancel();
  };

  const updateStatusApi = (id) => {
    const data = {
      id: id,
      status: "Confirmed"
    }
    api.updateStatusCourseRequest(id, data).then((res) => { getCourseRequests(); }).catch((err) => { });
  };

  const columns = [
    {
      title: "Học sinh",
      dataIndex: "studentName",
      sorter: (a, b) => (a.username.toLowerCase() > b.username.toLowerCase() ? 1 : -1),
      width: "30%",
    },
    {
      title: "Khóa",
      dataIndex: "courseName",
      width: "30%",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      width: "20%",
    },
    {
      title: "Action",
      key: "action",
      width: "20%",
      render: (row) => {
        return (
          <React.Fragment>
            <div className="container-btn">
              {row.status === "Pending" ?
                <button className="btn btn-sm btn-success width-60 container-btn__delete m-l-10"
                  onClick={() => showModal(row.id)}>
                  Cập nhật trạng thái
              </button>
                : ""
              }
            </div>
          </React.Fragment>
        );
      },
    },
  ];

  const onChangeTable = () => {
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
        visible={isShowModal}
        onOk={updateStatus}
        okType={"success"}
        onCancel={handleCancel}>
        <p>Do you really want to update status Confirm for Student?</p>
      </Modal>
    </React.Fragment>
  );
}

export default connect(null, null)(withRouter(TableManageRegisterCourseRequest));
