import React, { useState, useEffect } from "react";
import { HashRouter as Router, withRouter } from "react-router-dom";
import ListMyCourses from "./MyCourses/ListMyCourses";

function MyCourses (props) {
  return (
    <React.Fragment>
      <ListMyCourses />
    </React.Fragment>
  );
}

export default withRouter(MyCourses);
