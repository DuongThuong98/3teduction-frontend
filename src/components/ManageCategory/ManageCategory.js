import React, { useState, useEffect } from "react";
import { HashRouter as Router, withRouter } from "react-router-dom";
import TableCategory from "./TableCategory/TableCategory";

function ManageCategory(props) {
  return (
    <React.Fragment>
      <TableCategory />
    </React.Fragment>
  );
}

export default withRouter(ManageCategory);
