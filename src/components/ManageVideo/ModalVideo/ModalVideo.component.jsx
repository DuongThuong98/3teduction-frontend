// @ts-nocheck
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import "./ModalVideo.scss";

import React, { useState } from "react";
import { Modal, Button, Select, Form, Input, Upload, Icon } from "antd";

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 14,
      offset: 0,
    },
  },
};

const ModelSKill = ({
  visible,
  handleOk,
  handleCancel,
  loading,
  form,
  options,
  title,
  data,
}) => {
  const [file, setFile]= useState( '' );
  const handleSubmit = (e) => {
    e.preventDefault();
    // form.validateFields((err, values) => {
    //   if (!err) {
    //     console.log("Received values of form: ", values);
    //     handleOk(values);
    //   }
    // });
    handleOk(file);
  };
  const handleUpload = (info) => {
    let files = info.fileList;
    console.log(files[0]);
    setFile(files[0]);
  };
  const { getFieldDecorator } = form;
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
        <Button
          key="submit"
          type="primary"
          loading={loading}
          onClick={handleSubmit}
        >
          Lưu
        </Button>,
      ]}
    >
      <Form>
        {/* <Form.Item {...formItemLayout} label="Nhập tên bài" hasFeedback>
          {getFieldDecorator("content", {
            initialValue: data ? data.content : "",
            rules: [
              {
                required: true,
                message: "Vui lòng nhập tên kĩ năng",
                whitespace: true,
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="Nhập nội dung bài tập"
          hasFeedback
        >
          {getFieldDecorator("title", {
            initialValue: data ? data.title : "",
            rules: [
              {
                required: true,
                message: "Vui lòng nhập tên kĩ năng",
                whitespace: true,
              },
            ],
          })(<Input />)}
        </Form.Item>
       */}
        <Form.Item {...tailFormItemLayout}>
          <Upload onChange={handleUpload}>
            <Button>
              <Icon type="upload" /> Click to Upload
            </Button>
          </Upload>
        </Form.Item>
        
        {/* <Form.Item label="Nhập tên kĩ năng" hasFeedback>
          {getFieldDecorator('deadline', {
            initialValue: data ? data.deadline : '',
            rules: [{  message: 'Vui lòng nhập tên kĩ năng', whitespace: true }],
          })(<Input />)}
        </Form.Item> */}
        {/* <Form.Item label="Chọn ngành học" hasFeedback>
          {getFieldDecorator('majorId', {
            initialValue: Option.initialValue || (data ? data.majorId._id : ''),
            rules: [{ required: true, message: 'Vui lòng chọn ngành học' }],
          })(
            <Select>
              {options
                ? options.map((item, key) => (
                    <Option key={key} value={item._id}>
                      {item.name}
                    </Option>
                  ))
                : null}
            </Select>
          )}
        </Form.Item> */}
      </Form>
    </Modal>
  );
};
const WrappedModelSKillForm = Form.create({ name: "register" })(ModelSKill);

export default WrappedModelSKillForm;
