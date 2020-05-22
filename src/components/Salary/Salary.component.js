import React, { Component } from "react";
import { Prompt } from "react-router-dom";

class SalaryComponent extends Component {
  render() {
    return (
      <div className="Contact">
        <div class="row page-titles">
          <div class="col-md-5 align-self-center">
            <h4 class="text-themecolor">Widget Data</h4>
          </div>
          <div class="col-md-7 align-self-center text-right">
            <div class="d-flex justify-content-end align-items-center">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a>Home</a>
                </li>
                <li class="breadcrumb-item active">Widget Data</li>
              </ol>
              <button
                type="button"
                class="btn btn-info d-none d-lg-block m-l-15"
                data-target="#add-contact"
                data-toggle="modal"
              >
                <i class="fa fa-plus-circle"></i> Create New
              </button>
            </div>
          </div>
        </div>{" "}
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <div class="card-body b-l calender-sidebar">
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

export default SalaryComponent;
