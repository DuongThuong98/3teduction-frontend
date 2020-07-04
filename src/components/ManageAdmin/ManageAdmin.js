import React, { useState, useEffect } from "react";
import { HashRouter as Router, withRouter } from "react-router-dom";
import TableAdmin from "./TableAdmin/TableAdmin";

function ManageAdmin (props) {
  return (
    <React.Fragment>
      <TableAdmin />
    </React.Fragment>
  );
}

export default withRouter(ManageAdmin);
