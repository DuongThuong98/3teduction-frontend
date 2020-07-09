/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import "./ManageCurriculum.scss";
import React, { useEffect, useState } from "react";
import { Table, Tag, Divider, Button, Modal } from "antd";
import ModalSkill from "./ModalCurriculum/ModalCurriculum.component";
import CustomPagination from "../Pagination/Pagination.component";

const { confirm } = Modal;

// eslint-disable-next-line react/prop-types
const ManageMockingTest = ({
  data,
  dataCourse,
  dataTest,
  dataVideo,
  dataDoc,
  loadingData,
  getAllMajor,
  getAllTest,
  getAllVideo,
  getAllTag,
  createTag,
  editTag,
  length,
  deleteTag,
}) => {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [loadingEdit, setLoadingEdit] = useState(false);
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [tag, setTag] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(5);

  useEffect(() => {
    getAllMajor();
    console.log("dataMajor:", dataCourse);
    getAllTest();
    console.log("dataTest:", dataTest);
    getAllVideo();
    getAllTag({ limit: pageSize, page: 1 });
  }, [getAllTag, getAllMajor, getAllTest, getAllVideo, pageSize]);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (values) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    }, 1000);
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
      title: "Bạn có muốn xóa bài tập này?",
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
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Course",
      dataIndex: "course",
      key: "course",
      render: (_id, row) => <p>{row.courseID.name}</p>,
    },

    {
      title: "Homework",
      dataIndex: "homework",
      key: "homework",
      render: (_id, row) => {
        if (row.linkHomework) {
          return (
            <p>
              {row.linkHomework.name}
              <br />
              <a href={"https://mielts.herokuapp.com/user/mocktest/" + row.linkHomework._id}>{"https://mielts.herokuapp.com/user/mocktest/" + row.linkHomework._id}</a>
            </p>
          );
        }
      },
    },
    {
      title: "Video",
      dataIndex: "video",
      key: "video",
      render: (_id, row) => {
        if (row.linkVideo) {
          return (
            <p>
              {row.linkVideo.originalName}
              <br />
              <a href={row.linkVideo.url}>{row.linkVideo.url}</a>
            </p>
          );
        }
      }
    },
    {
      title: "Document",
      dataIndex: "document",
      key: "document",
      render: (_id, row) => {
        if (row.linkDoc) {
          return (
            <p>
              {row.linkDoc.originalName}
              <br />
              <a href={row.linkDoc.url}>{row.linkDoc.url}</a>
            </p>
          );
        }
      }
    },
    {
      title: "Thao tác",
      dataIndex: "action",
      key: "action",
      render: (_id, row) => (
        <span>
          <Button
            onClick={() => showModalEdit(row)}
            className="link link__edit"
          >
            Sửa
          </Button>
          <Divider type="vertical" />
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

  return (
    <div className="tags">
      <Button className="tags__button" type="primary" onClick={showModal}>
        Thêm bài tập
      </Button>
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
        loading={loading}
        visible={visible}
        handleOk={handleOk}
        handleCancel={handleCancel}
        options={{ dataCourse, dataTest, dataVideo, dataDoc }}
        title="Tạo bài tập"
      />
      <ModalSkill
        showModal={showModalEdit}
        loading={loadingEdit}
        visible={visibleEdit}
        handleOk={handleOkEdit}
        handleCancel={handleCancelEdit}
        options={{ dataCourse, dataTest, dataVideo, dataDoc }}
        data={tag}
        title="Chỉnh sửa bài tập"
      />
    </div>
  );
};

export default ManageMockingTest;
