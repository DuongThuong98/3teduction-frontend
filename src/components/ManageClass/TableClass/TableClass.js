import React, { useState, useEffect } from "react";
import { HashRouter as Router, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Input, Table, Modal } from "antd";

import * as api from "../../../utils/api";
import * as cssContants from "../../../constants/css.contants";

function TableClass(props) {
  let { loading } = props;
  const { Search } = Input;
  const [classes, setClasss] = useState([]);
  const [customTable, setTable] = useState(classes);
  const [isShowDeleteModal, setDeleteModal] = useState(false);
  const [idClass, setIdClass] = useState(null);

  useEffect(() => {
    getClasss();
  }, []);

  const getClasss = () => {
    loading(true);
    api
      .getAllClasses()
      .then((res) => {
        setTable(res.data.data);
        setClasss(res.data.data);
        console.log("res", res.data.data);
        loading(false);
      })
      .catch((error) => {
        loading(false);
      });
  };

  const deleteClassApi = (id) => {
    loading(true);
    api
      .deleteClass(id)
      .then((res) => {
        getClasss();
        loading(false);
      })
      .catch((err) => {
        loading(false);
      });
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
      width: "80%",
    },
    {
      key: "action",
      width: "20%",
      render: (id) => {
        return (
          <React.Fragment>
            <div className="container-btn">
              <button
                className="btn btn-sm btn-success width-60 m-r-2 container-btn__edit"
                onClick={() => editTable(id.id)}
              >
                Edit
              </button>
              <button
                className="btn btn-sm btn-purple width-60 container-btn__delete"
                onClick={() => showModal(id.id)}
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
      <div className="TableClass">
        <div className="row">
          <div className="col-md-12">
            <div className="panel panel-inverse">
              <div className="panel-body">
                <div className="TableClass__header-table">
                  <div className="m-b-5 text-left">
                    <button
                      className="btn btn-primary"
                      onClick={() => props.history.push("/classes/add")}
                    >
                      {" "}
                      Create new Class
                    </button>
                  </div>
                  <Search
                    placeholder="Search by name"
                    onChange={onSearchChange}
                    style={{ width: 200, marginBottom: "2rem" }}
                  />
                </div>
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
