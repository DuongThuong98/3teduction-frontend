// @ts-nocheck
import React, { useState, useEffect } from "react";
import { HashRouter as Router, withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import 'antd/dist/antd.css'
import * as api from "../../../utils/api";
import * as cssContants from "../../../constants/css.contants";
import { Checkbox, DatePicker, Input, Table, Modal } from "antd";
import moment from 'moment';

function TableDocument (props) {
  const [documents, setDocuments] = useState([]);
  const [customTable, setTable] = useState(documents);
  const [isShowDeleteModal, setDeleteModal] = useState(false);
  const [idDocuments, setIdDocuments] = useState(null);

  const [classes, setClasses] = useState([]);
  const dateFormat = "DD/MM/YYYY";
  const dateFormatList = ['DD/MM/YYYY'];

  const [searchModel, setSearchModel] = useState({
    timeIn: "",
    timeOut: "",
    classID: "",
    status: '',
  });

  useEffect(() => {
    getDocuments();
  }, []);

  const getDocuments = () => {
    api
      .getAllDocuments()
      .then((res) => {
        const data = res.data.data;
        data.map(el => {
          let update = moment(new Date(el.update));
          el.update = update.format("DD/MM/YYYY");
        })
        setTable(data);
        setDocuments(data);
      })
      .catch((error) => { });

    api
      .getClassDropdown()
      .then((res) => {
        let list = res.data.data.map((c) => {
          return c;
        });
        setClasses(list);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const deleteDocumentApi = (id) => {
    api
      .deleteDocument(id)
      .then((res) => {
        getDocuments();
      })
      .catch((err) => { });
  };

  const showModal = (id) => {
    setDeleteModal(true);
    setIdDocuments(id);
  };

  const handleCancel = () => {
    setDeleteModal(false);
  };

  const deleteDocument = () => {
    deleteDocumentApi(idDocuments);
    handleCancel();
    console.log("ok");
  };

  const editTable = (id) => {
    props.history.push(`/documents-edit/${id}`);
  };

  const onSearchChange = (event) => {
    event.preventDefault();
    let value = event.target.value;
    let results = documents.filter((x, idx) => {
      if (x.name.toLowerCase().includes(value.toLowerCase())) {
        return x;
      }
    });
    setTable(results);
  };

  const onClearSearch = () => {
    let _model = {
      name: "",
      status: '',
      categoryID: "",
      courseID: "",
    }
    setSearchModel(_model);
  }

  const columns = [
    {
      title: "Tên",
      dataIndex: "name",
      sorter: (a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1),
      width: "20%",
    },
    {
      title: "Mô tả",
      dataIndex: "shortDesc",
      width: "30%",
    },
    {
      title: "Loại tài liệu",
      dataIndex: "categoryName",
      width: "15%",
    },
    {
      title: "Tác giả",
      dataIndex: "userName",
      width: "25%",
    },
    {
      title: "Lượt xem",
      dataIndex: "views",
      width: "5%",
    },
    {
      title: "Action",
      key: "action",
      width: "5%",
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

  const handleOnchange = (e) => {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;

    setSearchModel({
      ...searchModel,
      [target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(searchModel);
    console.log(documents);
    let results = [];
    results = documents.filter((x, idx) => {
      let cat = searchModel.categoryID;
      let cou = searchModel.courseID;
      let nam = searchModel.name;

      if ((cat.trim() && x.categoryName === cat.trim()) || (cou && cou.trim() && x.categoryName === cou.trim()) || (nam && nam.trim() && x.name.includes(nam.trim()))) {
        return x;
      }
      if (cat === "" && cou === "" && nam === "") {
        return x;
      }
    })
    setTable(results);
  }

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
            {/* <button
              type="button"
              onClick={() => props.history.push("/documents-test/add")}
              className="btn btn-info d-none d-lg-block m-l-15"
            >
              <i className="fa fa-plus-circle" /> Create New
            </button> */}
            <Link
              type="button"
              className="btn btn-info d-none d-lg-block m-l-15"
              to="/documents-add"
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
              <div
                id="search-form"
                className="collapse"
                role="tabpanel"
                aria-labelledby="headingThree3">
                <div className="card">
                  <form onSubmit={handleSubmit} onKeyPress={(event) => { if (event.which === 13) event.preventDefault(); }}>
                    <div className="form-body">
                      <div className="card-body">
                        <div className="row pt-3">
                          <div className="col-md-3">
                            <div className="form-group">
                              <label className="control-label">Khóa</label>
                              <select
                                className="form-control"
                                name="classID"
                                value={searchModel.classID}
                                onChange={handleOnchange}>
                                {classes.map((x) => {
                                  return (
                                    <React.Fragment key={x._id}>
                                      <option
                                        value={x.name}
                                      >
                                        {x.name}
                                      </option>
                                    </React.Fragment>
                                  );
                                })}
                              </select>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="form-group">
                              <DatePicker
                                className="form-control"
                                id="dateOpening"
                                name="dateOpening"
                                value={moment(searchModel.timeIn, dateFormatList[0])} format={dateFormatList}
                                onChange={(date, dateString) => {
                                  setSearchModel({
                                    ...searchModel,
                                    timeIn: dateString
                                  })
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="form-group">
                              <DatePicker
                                className="form-control"
                                id="dateOpening"
                                name="dateOpening"
                                value={moment(searchModel.timeOut, dateFormatList[0])} format={dateFormatList}
                                onChange={(date, dateString) => {
                                  setSearchModel({
                                    ...searchModel,
                                    timeOut: dateString
                                  })
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="form-group">
                              <div className="button-group">
                                <button type="submit" className="btn waves-effect waves-light btn-primary">Tìm</button>
                                <button type="button" className="btn waves-effect waves-light btn-secondary" onClick={() => onClearSearch()}>Hủy</button>
                              </div>
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
        onOk={deleteDocument}
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

export default connect(null, null)(withRouter(TableDocument));
