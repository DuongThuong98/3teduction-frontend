import React, { useState, useEffect } from "react";
import { HashRouter as Router, withRouter } from "react-router-dom";
import TableManageRegisterCourseRequest from "./TableManageRegisterCourseRequest/TableManageRegisterCourseRequest";

function ManageRegisterCourseRequest (props) {
  return (
    <React.Fragment>
      <TableManageRegisterCourseRequest />
    </React.Fragment>
  );
}

export default withRouter(ManageRegisterCourseRequest);
