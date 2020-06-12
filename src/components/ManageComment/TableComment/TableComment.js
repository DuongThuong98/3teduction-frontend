// @ts-nocheck
import React, { useState, useEffect } from "react";
import { HashRouter as Router, withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { Input, Table, Modal } from "antd";
import "antd/dist/antd.css";
import * as api from "../../../utils/api";
import * as cssContants from "../../../constants/css.contants";
import moment from "moment";

function TableComment(props) {
  const [comments, setComments] = useState([]);
  const [customTable, setTable] = useState(comments);
  const [isShowModal, setModal] = useState(false);
  const [isShowModalDelete, setModalDelete] = useState(false);
  const [idComment, setIdComment] = useState(null);

  useEffect(() => {
    getComments();
  }, []);

  const getComments = () => {
    api
      .getAllComments()
      .then((res) => {
        const data = res.data.data;
        data.map((el) => {
          let bd = moment(new Date(el.datePosted));
          el.datePosted = bd.format("DD/MM/YYYY");
        });
        setTable(data);
        setComments(data);
      })
      .catch((error) => {});
  };

  const showModal = (id) => {
    setModal(true);
    setIdComment(id);
  };

  const handleCancel = () => {
    setModal(false);
  };

  const blockComment = () => {
    blockCommentApi(idComment);
    handleCancel();
  };

  const blockCommentApi = (id) => {
    api
      .blockComment(id)
      .then((res) => {
        getComments();
      })
      .catch((err) => {});
  };

  const deleteCommentApi = (id) => {
    api
      .deleteComment(id)
      .then((res) => {
        getComments();
      })
      .catch((err) => {});
  };

  const showModalDelete = (id) => {
    setModalDelete(true);
    setIdComment(id);
  };

  const handleCancelDelete = () => {
    setModalDelete(false);
  };

  const deleteComment = () => {
    deleteCommentApi(idComment);
    handleCancel();
  };

  const editTable = (id) => {
    props.history.push(`/teachers-view/${id}`);
  };

  const columns = [
    {
      title: "Tiêu đề",
      dataIndex: "title",
      sorter: (a, b) =>
        a.displayname.toLowerCase() > b.displayname.toLowerCase() ? 1 : -1,
      width: "20%",
    },
    {
      title: "Nội dung",
      dataIndex: "content",
      width: "45%",
    },
    {
      title: "Lượt thích",
      dataIndex: "like",
      width: "5%",
    },
    {
      title: "Người bình luận",
      dataIndex: "authorName",
      width: "15%",
    },
    {
      title: "Blocked",
      dataIndex: "isBlock",
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
                View
              </button>
              <button
                className="btn btn-sm btn-warning width-60 container-btn__delete m-l-10"
                onClick={() => showModal(row.id)}
              >
                Block Comment
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

  const onChangeTable = () => {};

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
        onOk={blockComment}
        okType={"danger"}
        onCancel={handleCancel}
      >
        <p>Do you really want to block comment?</p>
      </Modal>

      <Modal
        title="Are you sure?"
        visible={isShowModalDelete}
        onOk={deleteComment}
        okType={"danger"}
        onCancel={handleCancelDelete}
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

export default connect(null, null)(withRouter(TableComment));
