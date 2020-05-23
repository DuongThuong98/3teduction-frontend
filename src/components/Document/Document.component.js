import React, { Component } from "react";
import { Prompt } from "react-router-dom";

class DocumentComponent extends Component {
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
          <div class="col-md-12">
            <div class="card">
              <div class="">
                <div class="row">
                  <div class="col-lg-8">
                    <div class="card-body">
                      <div class="card-body">
                        <ul class="chat-list">
                          <div class="sl-right">
                            <div class="row">
                              <div class="col-md-2 col-xs-12">
                                <img
                                  src="images/big/img1.jpg"
                                  alt="user"
                                  class="img-responsive radius"
                                />
                              </div>
                              <div class="col-md-10 col-xs-12">
                                <h4>
                                  <a
                                    href="./_document-detail.html"
                                    class="m-t-5"
                                  >
                                    Review đề thi TOEIC format mới tháng 11 tại
                                    IIG Việt Nam
                                  </a>
                                </h4>
                                <p>
                                  Reivew chi tiết đề thi thật TOEIC tại IIG Việt
                                  Nam từ Mr Đăng Trình 990 TOEIC
                                </p>
                              </div>
                            </div>
                            <hr />
                            <div class="row">
                              <div class="col-md-2 col-xs-12">
                                <img
                                  src="images/big/img1.jpg"
                                  alt="user"
                                  class="img-responsive radius"
                                />
                              </div>
                              <div class="col-md-10 col-xs-12">
                                <h4>
                                  <a
                                    href="./_document-detail.html"
                                    class="m-t-5"
                                  >
                                    Review đề thi TOEIC format mới tháng 11 tại
                                    IIG Việt Nam
                                  </a>
                                </h4>
                                <p>
                                  Reivew chi tiết đề thi thật TOEIC tại IIG Việt
                                  Nam từ Mr Đăng Trình 990 TOEIC
                                </p>
                              </div>
                            </div>
                            <hr />
                            <div class="row">
                              <div class="col-md-2 col-xs-12">
                                <img
                                  src="images/big/img1.jpg"
                                  alt="user"
                                  class="img-responsive radius"
                                />
                              </div>
                              <div class="col-md-10 col-xs-12">
                                <h4>
                                  <a
                                    href="./_document-detail.html"
                                    class="m-t-5"
                                  >
                                    Review đề thi TOEIC format mới tháng 11 tại
                                    IIG Việt Nam
                                  </a>
                                </h4>
                                <p>
                                  Reivew chi tiết đề thi thật TOEIC tại IIG Việt
                                  Nam từ Mr Đăng Trình 990 TOEIC
                                </p>
                              </div>
                            </div>
                            <hr />
                            <div class="row">
                              <div
                                class="text-center"
                                style={{ margin: "auto" }}
                              >
                                <nav aria-label="Page navigation example">
                                  <ul class="pagination justify-content-end">
                                    <li class="page-item disabled">
                                      <a
                                        class="page-link"
                                        href="#"
                                        tabIndex="-1"
                                      >
                                        Previous
                                      </a>
                                    </li>
                                    <li class="page-item">
                                      <a class="page-link" href="#">
                                        1
                                      </a>
                                    </li>
                                    <li class="page-item">
                                      <a class="page-link" href="#">
                                        2
                                      </a>
                                    </li>
                                    <li class="page-item">
                                      <a class="page-link" href="#">
                                        3
                                      </a>
                                    </li>
                                    <li class="page-item">
                                      <a class="page-link" href="#">
                                        Next
                                      </a>
                                    </li>
                                  </ul>
                                </nav>
                              </div>
                            </div>
                            </div>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="card">
                        <div class="card-body">
                          <h4 class="card-title">Liên kết nhanh</h4>
                          <ul class="feeds">
                            <li>
                              <div class="bg-info">
                                <i class="far fa-bell"></i>
                              </div>{" "}
                              You have 4 pending tasks.Server #1
                              overloaded.Server #1 overloaded.
                            </li>
                            <li>
                              <div class="bg-success">
                                <i class="ti-server"></i>
                              </div>{" "}
                              Server #1 overloaded.
                            </li>
                            <li>
                              <div class="bg-warning">
                                <i class="ti-shopping-cart"></i>
                              </div>{" "}
                              New order received.
                            </li>
                            <li>
                              <div class="bg-danger">
                                <i class="ti-user"></i>
                              </div>{" "}
                              New user registered.
                            </li>
                            <li>
                              <div class="bg-dark">
                                <i class="far fa-bell"></i>
                              </div>{" "}
                              New Version just arrived.
                            </li>
                            <li>
                              <div class="bg-info">
                                <i class="far fa-bell"></i>
                              </div>{" "}
                              You have 4 pending tasks.
                            </li>
                            <li>
                              <div class="bg-danger">
                                <i class="ti-user"></i>
                              </div>{" "}
                              New user registered.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default DocumentComponent;
