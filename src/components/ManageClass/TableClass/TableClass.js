// @ts-nocheck
import React, { useState, useEffect } from "react";
import { HashRouter as Router, withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { Input, Table, Modal } from "antd";
import 'antd/dist/antd.css'
import * as api from "../../../utils/api";
import * as cssContants from "../../../constants/css.contants";
import moment from 'moment';

function TableClass (props) {
  const [classes, setClasss] = useState([]);
  const [customTable, setTable] = useState(classes);
  const [isShowDeleteModal, setDeleteModal] = useState(false);
  const [idClass, setIdClass] = useState(null);

  const [categories, setCategories] = useState([]);
  const [courses, setCourses] = useState([]);

  const [searchModel, setSearchModel] = useState({
    name: "",
    status: '',
    categoryID: "",
    courseID: "",
  });

  useEffect(() => {
    getClasss();
  }, []);

  const getClasss = () => {
    api
      .getAllClasses()
      .then((res) => {
        const data = res.data.data;
        console.log(" res", res.data.data);
        data.map(el => {
          let dateOpening = moment(new Date(el.dateOpening));
          el.dateOpening = dateOpening.format("DD/MM/YYYY");
          let dateClosed = moment(new Date(el.dateClosed));
          el.dateClosed = dateClosed.format("DD/MM/YYYY")
        })
        setTable(data);
        setClasss(data);
      })
      .catch((error) => { });

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
      .getCourseDropdown()
      .then((res) => {
        let list = res.data.data.map((c) => {
          return c;
        });
        setCourses(list);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const deleteClassApi = (id) => {
    api
      .deleteClass(id)
      .then((res) => {
        getClasss();
      })
      .catch((err) => { });
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
    props.history.push(`/classestest/edit/${id}`);
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
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1),
      width: "20%",
    },
    {
      title: "Category",
      dataIndex: "categoryName",
      width: "15%",
    },
    {
      title: "Course",
      dataIndex: "courseName",
      width: "20%",
    },
    {
      title: "Date Opening",
      dataIndex: "dateOpening",
      width: "15%",
    },
    {
      title: "Date Closed",
      dataIndex: "dateClosed",
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

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(searchModel);
    console.log(classes);
    let results = [];
    results = classes.filter((x, idx) => {
      let cat = searchModel.categoryID;
      let cou = searchModel.courseID;
      let nam = searchModel.name;

      if ((cat.trim() && x.categoryName === cat.trim()) || (cou && cou.trim() && x.categoryName === cou.trim()) || (nam && nam.trim() && x.name.includes(nam.trim()))) {
        return x;
      }
      if(cat ==="" && cou==="" && nam ===""){
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
              onClick={() => props.history.push("/classes-test/add")}
              className="btn btn-info d-none d-lg-block m-l-15"
            >
              <i className="fa fa-plus-circle" /> Create New
            </button> */}
            <Link
              type="button"
              className="btn btn-info d-none d-lg-block m-l-15"
              to="/classestest/add"
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
                          <div className="col-md-4">
                            <div className="form-group">
                              <label className="control-label">Loại lớp</label>
                              <select className="form-control" name="categoryID" value={searchModel.categoryID} onChange={handleOnchange}>
                                <option value=''>--- Tất cả ---</option>
                                {categories.map((x) => {
                                  return (
                                    <React.Fragment key={x._id}>
                                      <option value={x.name}>{x.name}</option>
                                    </React.Fragment>
                                  );
                                })}
                              </select>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group">
                              <label className="control-label">Khóa học</label>
                              <select className="form-control" name="courseID" value={searchModel.courseID} onChange={handleOnchange}>
                                <option value=''>--- Tất cả ---</option>
                                {courses.map((x) => {
                                  return (
                                    <React.Fragment key={x._id}>
                                      <option value={x.name}>{x.name}</option>
                                    </React.Fragment>
                                  );
                                })}
                              </select>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group">
                              <label className="control-label">Tên lớp</label>
                              <input value={searchModel.name} name="name" onChange={handleOnchange}
                                type="text"
                                id="firstName"
                                className="form-control"
                                placeholder="Nhập tên lớp"
                              />
                            </div>
                          </div>
                          {/* <div className="col-md-4">
                            <div >
                              <label className="control-label">
                                Tình trạng
                              </label>
                              <select className="form-control custom-select" name="status" value={searchModel.status} onChange={handleOnchange}>
                                <option >--- Tất cả ---</option>
                                <option value="0">Active</option>
                                <option value="1">Inactive</option>
                              </select>
                            </div>
                          </div> */}
                          <div className="col-md-4">
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
        onOk={deleteClass}
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

export default connect(null, null)(withRouter(TableClass));
