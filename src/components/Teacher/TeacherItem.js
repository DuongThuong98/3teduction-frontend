/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, Fragment } from "react";
import { Prompt, Link } from "react-router-dom";

class TeacherItem extends Component {
  render() {
    return (
      <React.Fragment>
        <tr>
          <td>1011</td>
          <td>Johnathon</td>
          <td>genelia@gmail.com</td>
          <td>How to customize the template?</td>
          <td>14-10-2017</td>
          <td>Nam</td>
          <td>
            <a
              id="edit"
              className="btn btn-info"
              href="./_admin-add-teacher.html"
            >
              <i className=""></i> Edit
            </a>
            <button id="remove" className="btn btn-danger">
              <i className="ti-trash"></i> Delete
            </button>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}

export default TeacherItem;
