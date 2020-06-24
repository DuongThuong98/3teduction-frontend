import React, { useState, useEffect } from "react";
import { HashRouter as Router, withRouter } from "react-router-dom";
import ListTeachingClass from "./TeachingClass/ListTeachingClass";

function TeachingClass (props) {
  return (
    <React.Fragment>
      <ListTeachingClass />
    </React.Fragment>
  );
}

export default withRouter(TeachingClass);
