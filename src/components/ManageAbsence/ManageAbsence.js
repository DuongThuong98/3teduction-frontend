import React, { useState, useEffect } from "react";
import { HashRouter as Router, withRouter } from "react-router-dom";
import TableAbsence from "./TableAbsence/TableAbsence";

function ManageAbsence(props) {
  return (
    <React.Fragment>
      <TableAbsence />
    </React.Fragment>
  );
}

export default withRouter(ManageAbsence);
