import React, { Component } from "react";
import { Prompt } from "react-router-dom";

class ScheduleComponent extends Component {
  render() {
    return (
      <div className="Contact">
        <div className="row page-titles">
          <div className="col-md-5 align-self-center">
            <h4 className="text-themecolor">Widget Data</h4>
          </div>
          <div className="col-md-7 align-self-center text-right">
            <div className="d-flex justify-content-end align-items-center">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a >Home</a>
                </li>
                <li className="breadcrumb-item active">Widget Data</li>
              </ol>
              <button
                type="button"
                className="btn btn-info d-none d-lg-block m-l-15"
                data-target="#add-contact"
                data-toggle="modal"
              >
                <i className="fa fa-plus-circle"></i> Create New
              </button>
            </div>
          </div>
        </div>{" "}
        <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-body b-l calender-sidebar">
                                    <div id="calendar"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
      </div>
    );
  }
}

export default ScheduleComponent;
