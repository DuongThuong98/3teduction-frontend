import React, { useState, useEffect } from "react";
import { HashRouter as Router, withRouter } from "react-router-dom";
import TableComment from "./TableComment/TableComment";

function ManageComment(props) {
  return (
    <React.Fragment>
      <TableComment />
    </React.Fragment>
  );
}

export default withRouter(ManageComment);
