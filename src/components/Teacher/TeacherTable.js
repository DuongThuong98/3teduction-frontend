/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, Fragment } from "react";
import { Prompt, Link } from "react-router-dom";
import TeacherItem from "./TeacherItem";

class TeacherTable extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="table-responsive">
          <table
            id="demo-foo-addrow"
            className="table m-t-30 table-hover no-wrap contact-list"
            data-paging="true"
            data-paging-size="7"
          >
            <thead>
              <tr>
                <th>ID #</th>
                <th>Tên</th>
                <th>Email</th>
                <th>Địa chỉ</th>
                <th>Điện thoại</th>
                <th>Giới tính</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <TeacherItem />
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="6">
                  <div className="text-right">
                    <nav aria-label="Page navigation example">
                      <ul className="pagination justify-content-end">
                        <li className="page-item disabled">
                          <a className="page-link" href="#" tabIndex="-1">
                            Previous
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            Next
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default TeacherTable;
