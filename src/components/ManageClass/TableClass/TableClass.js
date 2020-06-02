import React, { useState, useEffect } from "react";
import { HashRouter as Router, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Input, Table, Modal } from "antd";
import 'antd/dist/antd.css'
import * as api from "../../../utils/api";
import * as cssContants from "../../../constants/css.contants";

function TableClass(props) {
  const [classes, setClasss] = useState([]);
  const [customTable, setTable] = useState(classes);
  const [isShowDeleteModal, setDeleteModal] = useState(false);
  const [idClass, setIdClass] = useState(null);

  useEffect(() => {
    getClasss();
  }, []);

  const getClasss = () => {
    api
      .getAllClasses()
      .then((res) => {
        setTable(res.data.data);
        setClasss(res.data.data);
        console.log("res", res.data.data);
      })
      .catch((error) => {});
  };

  const deleteClassApi = (id) => {
    api
      .deleteClass(id)
      .then((res) => {
        getClasss();
      })
      .catch((err) => {});
  };

  const showModal = (id) => {
    setDeleteModal(true);
    setIdClass(id);
  };

  const handleCancel = () => {
    setDeleteModal(false);
  };

  const deleteClass = () => {
    deleteClassApi(idClass);
    handleCancel();
    console.log("ok");
  };

  const editTable = (id) => {
    props.history.push(`/classes/edit/${id}`);
  };

  const onSearchChange = (event) => {
    event.preventDefault();
    let value = event.target.value;
    let results = classes.filter((x, idx) => {
      if (x.name.toLowerCase().includes(value.toLowerCase())) {
        return x;
      }
    });
    setTable(results);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1),
      width: "40%",
    },
    {
      title: "Status",
      dataIndex: "status",
      width: "40%",
    },
    {
      key: "action",
      width: "20%",
      render: (row) => {
        return (
          <React.Fragment>
            <div className="container-btn">
              <button
                className="btn btn-sm btn-success width-60 m-r-2 container-btn__edit"
                onClick={() => editTable(row._id)}
              >
                Edit
              </button>
              <button
                className="btn btn-sm btn-danger width-60 container-btn__delete m-l-10"
                onClick={() => showModal(row._id)}
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
            <button
              type="button"
              onClick={() => props.history.push("/classes/add")}
              className="btn btn-info d-none d-lg-block m-l-15"
              data-target="#add-class"
              data-toggle="modal"
            >
              <i className="fa fa-plus-circle" /> Create New
            </button>
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
                  className="fa fa-search-plus"
                  style={{ fontSize: "20px", verticalAlign: "middle" }}
                />
              </a>
              <div
                id="search-form"
                className="collapse"
                role="tabpanel"
                aria-labelledby="headingThree3"
              >
                <div className="card">
                  <form action="#">
                    <div className="form-body">
                      <div className="card-body">
                        <div className="row pt-3">
                          <div className="col-md-4">
                            <div className="form-group">
                              <label className="control-label">Loại lớp</label>
                              <select className="form-control custom-select">
                                <option value="0">--- Tất cả ---</option>
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group">
                              <label className="control-label">Tên lớp</label>
                              <input
                                type="text"
                                id="firstName"
                                className="form-control"
                                placeholder="John doe"
                              />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group">
                              <label className="control-label">
                                Tình trạng
                              </label>
                              <select className="form-control custom-select">
                                <option>--- Tất cả ---</option>
                                <option>Kết thúc</option>
                                <option>Đang diễn ra</option>
                                <option>Đã kết thúc</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group">
                              <label className="control-label" />
                              <button
                                type="submit"
                                className="btn btn-success form-control"
                                style={{ marginTop: "7px" }}
                              >
                                {" "}
                                <i className="fa fa-search-plus" />
                                Search
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
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
        onOk={deleteClass}
        okType={"danger"}
        onCancel={handleCancel}
      >
        <p
          // @ts-ignore
          style={cssContants.firstContent}
        >
          Do you really want to delete this record?
        </p>
        <p style={cssContants.secondContent}>
          You can recover from unintentional deletions later.
        </p>
      </Modal>
    </React.Fragment>
  );
}

export default connect(null, null)(withRouter(TableClass));
