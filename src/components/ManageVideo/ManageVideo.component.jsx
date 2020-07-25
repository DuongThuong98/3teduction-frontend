// @ts-nocheck
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import "./ManageVideo.scss";
import React, { useEffect, useState } from "react";
import { Table, Divider, Button, Modal } from "antd";
import ModalSkill from "./ModalVideo/ModalVideo.component";
import CustomPagination from "../Pagination/Pagination.component";
import { Document, Page, pdfjs } from "react-pdf";
import pdf from "./Assignment 1 - Goi y dap an-1593849242396.pdf";
import jwt_decode from "jwt-decode";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const { confirm } = Modal;

// eslint-disable-next-line react/prop-types
const ManageVideo = ({
  data,
  dataMajor,
  loadingData,
  uploading,
  isVisible,
  getAllMajor,
  getAllTag,
  createTag,
  editTag,
  length,
  deleteTag,
  setVisible
}) => {
  const [loading, setLoading] = useState(false);
  // const [visible, setVisible] = useState(false);
  const [loadingEdit, setLoadingEdit] = useState(false);
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [tag, setTag] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [numPages, setNumPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize] = useState(5);
  const [role, setRole] = useState(null);

  useEffect(() => {
    getRoleFromLocalStorage();
    getAllMajor();
    getAllTag({ limit: pageSize, page: 1 });
  }, [getAllTag, getAllMajor, pageSize, role]);

  const getRoleFromLocalStorage = () => {
    var token = localStorage.getItem("token");
    if (token) {
      var decoded = jwt_decode(token);
      setRole(decoded.role.toString());
    }
  };

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (values) => {
    setLoading(true);
    createTag(values);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const showModalEdit = (row) => {
    setTag(row);
    setVisibleEdit(true);
  };

  const handleOkEdit = (values) => {
    setLoadingEdit(true);
    setTimeout(() => {
      setLoadingEdit(false);
      setVisibleEdit(false);
    }, 1000);

    editTag({ ...values, _id: tag._id });
  };

  const handleCancelEdit = () => {
    setVisibleEdit(false);
  };

  const showConfirm = (row) => {
    confirm({
      title: "Bạn có muốn xóa?",
      okText: "Có",
      okType: "primary",
      cancelText: "Hủy",
      cancelButtonProps: {
        type: "link",
      },
      onOk() {
        deleteTag({ _id: row._id });
      },
      onCancel() {},
    });
  };

  const onChangeTable = (page) => {
    setCurrentPage(page);
    getAllTag({ limit: pageSize, offset: page });
  };

  const columns = [
    {
      title: "Desc",
      dataIndex: "desc",
      key: "desc",
    },
    {
      title: "URL",
      dataIndex: "url",
      key: "url",
      render: (_id, row) => <a href={row.url}>{row.url}</a>,
    },
    {
      title: "Name",
      dataIndex: "originalName",
      key: "originalName",
    },
    {
      title: "Type",
      dataIndex: "resourceType",
      key: "resourceType",
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
    },
    // {
    //   title: 'Status',
    //   dataIndex: 'status',
    //   key: 'status',
    //   render: (_id, row) => <Tag color="cyan">{row.status === true? "Hoan thanh" : "Chua hoan thanh"}</Tag>,
    // },
    {
      title: "Thao tác",
      dataIndex: "action",
      key: "action",
      render: (_id, row) => (
        <span>
          {/* <Button
            onClick={() => showModalEdit(row)}
            className="link link__edit"
          >
            Sửa
          </Button> */}
          {/* <Divider type="vertical" /> */}
          <Button
            onClick={() => showConfirm(row)}
            className="link link__delete"
          >
            Xóa
          </Button>
        </span>
      ),
    },
  ];

  const goToPrevPage = () => setPageNumber(pageNumber - 1);

  const goToNextPage = () => setPageNumber(pageNumber + 1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const onDocumentLoadError = (error) =>
    alert("Error while loading document! " + error.message);
  return (
    <div className="tags">
      {role === "Teacher" ? (
        <Button className="tags__button" type="primary" onClick={showModal}>
          Thêm
        </Button>
      ) : null}
      {data ? (
        <Table
          rowKey={(record) => record._id}
          columns={columns}
          dataSource={data}
          className="tags__table"
          loading={loadingData}
          pagination={false}
        />
      ) : null}
      {!loadingData ? (
        <CustomPagination
          current={currentPage}
          total={length}
          onChange={onChangeTable}
          className="pagination-custom"
          pageSize={pageSize}
        />
      ) : null}
      <ModalSkill
        showModal={showModal}
        loading={uploading}
        visible={isVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
        options={dataMajor}
        title="Upload"
      />
      <ModalSkill
        showModal={showModalEdit}
        loading={loadingEdit}
        visible={visibleEdit}
        handleOk={handleOkEdit}
        handleCancel={handleCancelEdit}
        options={dataMajor}
        data={tag}
        title="Chỉnh sửa bài tập"
      />

      {/* <div>
        <nav>
          <button onClick={goToPrevPage}>Prev</button>
          <button onClick={goToNextPage}>Next</button>
        </nav>

        <div style={{ width: 600 }}>
          <Document
            file={pdf}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
          >
            <Page pageNumber={pageNumber} width={600} />
          </Document>
        </div>

        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div> */}
    </div>
  );
};

export default ManageVideo;
