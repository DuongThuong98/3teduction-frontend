// @ts-nocheck
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import './ModalCurriculum.scss'

import React from 'react'
import { Modal, Button, Select, Form, Input } from 'antd'

const { Option } = Select

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
  },
}

const ModelSKill = ({ visible, handleOk, handleCancel, loading, form, options, title, data }) => {
  const handleSubmit = e => {
    e.preventDefault()
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        handleOk(values)
      }
    })
  }
  const { getFieldDecorator } = form
  return (
    <Modal
      visible={visible}
      title={title}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel} type="link">
          Hủy
        </Button>,
        <Button key="submit" type="primary" loading={loading} onClick={handleSubmit}>
          Lưu
        </Button>,
      ]}
    >
      <Form {...formItemLayout}>
        <Form.Item label="Nhập tên buổi học" hasFeedback>
          {getFieldDecorator('name', {
            initialValue: data ? data.name : '',
            rules: [{ required: true, message: 'Vui lòng nhập tên kĩ năng', whitespace: true }],
          })(<Input />)}
        </Form.Item>
      
        <Form.Item label="Chọn khóa học" hasFeedback>
          {getFieldDecorator('courseID', {
            initialValue: Option.initialValue || (data ? data.courseID._id : ''),
            rules: [{ required: true, message: 'Vui lòng chọn ngành học' }],
          })(
            <Select>
              {options.dataMajor
                ? options.dataMajor.map((item, key) => (
                    <Option key={key} value={item.id}>
                      {item.name}
                    </Option>
                  ))
                : null}
            </Select>
          )}
        </Form.Item>
        <Form.Item label="Chọn bài test" hasFeedback>
          {getFieldDecorator('linkHomework', {
            initialValue: Option.initialValue || (data ? data.linkHomework._id : ''),
            rules: [{ required: true, message: 'Vui lòng chọn ngành học' }],
          })(
            <Select>
              {options.dataTest
                ? options.dataTest.map((item, key) => (
                    <Option key={key} value={item._id}>
                      {item.name}
                    </Option>
                  ))
                : null}
            </Select>
          )}
        </Form.Item>
        <Form.Item label="Chọn video bài giảng" hasFeedback>
          {getFieldDecorator('linkVideo', {
            initialValue: Option.initialValue || (data ? data.linkVideo._id : ''),
            rules: [{ required: true, message: 'Vui lòng chọn ngành học' }],
          })(
            <Select>
              {options.dataVideo
                ? options.dataVideo.map((item, key) => (
                    <Option key={key} value={item._id}>
                      {item.originalName}
                    </Option>
                  ))
                : null}
            </Select>
          )}
        </Form.Item>
      </Form>
    </Modal>
  )
}
const WrappedModelSKillForm = Form.create({ name: 'register' })(ModelSKill)

export default WrappedModelSKillForm
