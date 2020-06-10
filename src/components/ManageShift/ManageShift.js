import React, { useState, useEffect } from "react";
import { HashRouter as Router, withRouter } from "react-router-dom";
import TableShift from "./TableShift/TableShift";

function ManageShift(props) {
  return (
    <React.Fragment>
      <TableShift />
    </React.Fragment>
  );
}

export default withRouter(ManageShift);
