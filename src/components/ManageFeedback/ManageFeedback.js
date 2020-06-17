import React, { useState, useEffect } from "react";
import { HashRouter as Router, withRouter } from "react-router-dom";
import TableFeedback from "./TableFeedback/TableFeedback";

function ManageFeedback(props) {
  return (
    <React.Fragment>
      <TableFeedback />
    </React.Fragment>
  );
}

export default withRouter(ManageFeedback);
