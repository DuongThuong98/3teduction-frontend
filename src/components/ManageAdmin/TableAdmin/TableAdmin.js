// @ts-nocheck
import React, { useState, useEffect } from "react";
import { HashRouter as Router, withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { Input, Table, Modal } from "antd";
import 'antd/dist/antd.css'
import * as api from "../../../utils/api";

function TableAdmin (props) {
  const [admins, setAdmins] = useState([]);
  const [customTable, setTable] = useState(admins);
  const [isShowModal, setModal] = useState(false);
  const [idAdmin, setIdAdmin] = useState(null);

  useEffect(() => {
    getAdmins();
  }, []);

  const getAdmins = () => {
    api
      .getAllAdmins()
      .then((res) => {
        const data = res.data.data;
        setTable(data);
        setAdmins(data);
      })
      .catch((error) => { });

  };

  const showModal = (id) => {
    setModal(true);
    setIdAdmin(id);
  };

  const handleCancel = () => {
    setModal(false);
  };

  const blockAdmin = () => {
    blockAdminApi(idAdmin);
    handleCancel();
  };

  const blockAdminApi = (id) => {
    api.blockAdmin(id).then((res) => {getAdmins();}).catch((err) => { });
  };

  const columns = [
    {
      title: "Tên hiển thị",
      dataIndex: "displayname",
      sorter: (a, b) => (a.displayname.toLowerCase() > b.displayname.toLowerCase() ? 1 : -1),
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
      width: "15%",
    },
    {
      title: "Ngày sinh",
      dataIndex: "birthdate",
      width: "15%",
    },
    {
      title: "Blocked",
      dataIndex: "isBlock",
      width: "5%",
    },
    {
      title: "Giới tính",
      dataIndex: "gender",
      width: "5%",
    },
    {
      title: "Dia chi",
      dataIndex: "address",
      width: "15%",
    },
    {
      title: "Action",
      key: "action",
      width: "5%",
      render: (row) => {
        return (
          <React.Fragment>
            <div className="container-btn">
              <button className="btn btn-sm btn-danger width-60 container-btn__delete m-l-10"
                onClick={() => showModal(row.id)}>
                Block Admin
              </button>
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
            <Link
              type="button"
              className="btn btn-info d-none d-lg-block m-l-15"
              to="/admins-add"><i className="fa fa-plus-circle" /> Create New</Link>
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
        onOk={blockAdmin}
        okType={"danger"}
        onCancel={handleCancel}>
        <p>Do you really want to block admin?</p>
      </Modal>
    </React.Fragment>
  );
}

export default connect(null, null)(withRouter(TableAdmin));
