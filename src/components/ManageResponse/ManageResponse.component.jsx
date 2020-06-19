/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import './ManageResponse.scss'
import React, { useEffect, useState } from 'react'
import { Table, Tag, Divider, Button, Modal } from 'antd'
import ModalSkill from './ModalResponse/ModalResponse.component'
import CustomPagination from '../Pagination/Pagination.component'

const { confirm } = Modal

// eslint-disable-next-line react/prop-types
const ManageMockingTest = ({
  data,
  dataMajor,
  loadingData,
  getAllMajor,
  getAllTag,
  createTag,
  editTag,
  length,
  deleteTag,
}) => {
  const [loading, setLoading] = useState(false)
  const [visible, setVisible] = useState(false)
  const [loadingEdit, setLoadingEdit] = useState(false)
  const [visibleEdit, setVisibleEdit] = useState(false)
  const [tag, setTag] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize] = useState(5)

  useEffect(() => {
    getAllMajor()
    getAllTag({ limit: pageSize, page: 1 })
  }, [getAllTag, getAllMajor, pageSize])

  const showModal = () => {
    setVisible(true)
  }

  const handleOk = values => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setVisible(false)
    }, 1000)
    createTag(values)
  }

  const handleCancel = () => {
    setVisible(false)
  }

  const showModalEdit = row => {
    setTag(row)
    setVisibleEdit(true)
  }

  const handleOkEdit = values => {
    setLoadingEdit(true)
    setTimeout(() => {
      setLoadingEdit(false)
      setVisibleEdit(false)
    }, 1000)

    editTag({ ...values, _id: tag._id })
  }

  const handleCancelEdit = () => {
    setVisibleEdit(false)
  }

  const showConfirm = row => {
    confirm({
      title: 'Bạn có muốn xóa bài tập này?',
      okText: 'Có',
      okType: 'primary',
      cancelText: 'Hủy',
      cancelButtonProps: {
        type: 'link',
      },
      onOk() {
        deleteTag({ _id: row._id })
      },
      onCancel() {},
    })
  }

  const onChangeTable = page => {
    setCurrentPage(page)
    getAllTag({ limit: pageSize, offset: page })
  }

  const columns = [
    {
      title: 'File',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Nội dung',
      dataIndex: 'contents',
      key: 'contents',
    },
    // {
    //   title: 'File',
    //   dataIndex: 'name',
    //   key: 'name',
    // },
    // {
    //   title: 'Deadline',
    //   dataIndex: 'deadline',
    //   key: 'deadline',
    // },
    // {
    //   title: 'Status',
    //   dataIndex: 'status',
    //   key: 'status',
    //   render: (_id, row) => <Tag color="cyan">{row.status === true? "Hoan thanh" : "Chua hoan thanh"}</Tag>,
    // },
    

    {
      title: 'Thao tác',
      dataIndex: 'action',
      key: 'action',
      render: (_id, row) => (
        <span>
          <Button onClick={() => showModalEdit(row)} className="link link__edit">
            Sửa
          </Button>
          <Divider type="vertical" />
          <Button onClick={() => showConfirm(row)} className="link link__delete">
            Xóa
          </Button>
        </span>
      ),
    },
  ]

  return (
    <div className="tags">
      <Button className="tags__button" type="primary" onClick={showModal}>
        Thêm bài tập
      </Button>
      {data ? (
        <Table
          rowKey={record => record._id}
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
        options={dataMajor}
        title="Tạo bài tập"
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
    </div>
  )
}

export default ManageMockingTest
