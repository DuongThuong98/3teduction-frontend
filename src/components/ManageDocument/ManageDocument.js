import React, { useState, useEffect } from "react";
import { HashRouter as Router, withRouter } from "react-router-dom";
import TableDocument from "./TableDocument/TableDocument";

function ManageDocument(props) {
  return (
    <React.Fragment>
      <TableDocument />
    </React.Fragment>
  );
}

export default withRouter(ManageDocument);
