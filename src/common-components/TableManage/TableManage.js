import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Link, Route, Redirect, withRouter } from "react-router-dom";
import { useToasts } from 'react-toast-notifications'
import { connect } from 'react-redux'

import { Input, Pagination, Table, Modal, Button } from 'antd';
import * as cssContants from '../../constants/css.contants';

import './TableManage.scss';

function TableManage(props) {
    const {columns, tableDatas, onSearchChange, typeTable, url} = props;
    const { Search } = Input;
    const [ customTable, setTable] = useState(tableDatas);
    const [ isShowDeleteModal, setDeleteModal] = useState(false);
    const [idClient, setIdClient] = useState(null);
    
    const deleteClient = (id) => {
        // props.delete(idClient);
        handleCancel();
        console.log('ok');
    }

    const showModal = (id) => {
        setDeleteModal(true);
        setIdClient(id);
        console.log('id', id);
    }

    const handleCancel = () => {
        setDeleteModal(false);
    }

    const onSearch = (event) => {
        event.preventDefault();
        let value = event.target.value;
        let results = props.onSearchChange(value);
        results.length ? setTable(results) : setTable([]);
    }

    return (
        <React.Fragment>
            <div className="TableManage">
                <div className="row">
                    <div className="col-md-12">
                        <div className="panel panel-inverse">
                            <div className="panel-body">
                                <div className="TableManage__header-table">
                                    <div className="m-b-5 text-left">
                                        <button className="btn btn-primary" onClick={() => props.history.push('/clients/add')}> Create new Client</button>
                                    </div>
                                    <Search
                                        placeholder="Search by name"
                                        onChange={onSearch}
                                        style={{ width: 200, marginBottom: '2rem' }}
                                    />
                                </div>
                                <Table bordered columns={columns} dataSource={customTable}
                                    rowKey={item => item.id}
                                    pagination={{
                                        pageSizeOptions: ["10", "25", "50", "100"],
                                        showSizeChanger: true,
                                        locale: { items_per_page: "" }
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
                onOk={deleteClient}
                okType={'danger'}
                onCancel={handleCancel}
            >
                <p style={cssContants.firstContent}>Do you really want to delete this record?</p>
                <p style={cssContants.secondContent}>You can recover from unintentional deletions later.</p>
            </Modal>
        </React.Fragment>
    )

}

export default connect(null, null)(withRouter(TableManage));