import React, { useState, useEffect } from "react";
import { HashRouter as Router, withRouter } from "react-router-dom";
import TableCourse from "./TableCourse/TableCourse";

function ManageCourse(props) {
  return (
    <React.Fragment>
      <TableCourse />
    </React.Fragment>
  );
}

export default withRouter(ManageCourse);
