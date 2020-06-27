import React, { useState, useEffect } from "react";
import { HashRouter as Router, withRouter } from "react-router-dom";
import TableStudent from "./TableStudent/TableStudent";

function ManageStudent(props) {
  return (
    <React.Fragment>
      <TableStudent />
    </React.Fragment>
  );
}

export default withRouter(ManageStudent);
