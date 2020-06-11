import React, { useState, useEffect } from "react";
import { HashRouter as Router, withRouter } from "react-router-dom";
import TableTeacher from "./TableTeacher/TableTeacher";

function ManageTeacher(props) {
  return (
    <React.Fragment>
      <TableTeacher />
    </React.Fragment>
  );
}

export default withRouter(ManageTeacher);
