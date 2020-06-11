import React, { useState, useEffect } from "react";
import { HashRouter as Router, withRouter } from "react-router-dom";
import TableClass from "./TableAdmin/TableAdmin";

function ManageClass(props) {
  return (
    <React.Fragment>
      <TableClass />
    </React.Fragment>
  );
}

export default withRouter(ManageClass);
