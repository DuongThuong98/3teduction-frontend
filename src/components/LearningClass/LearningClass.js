import React, { useState, useEffect } from "react";
import { HashRouter as Router, withRouter } from "react-router-dom";
import ListLearningClass from "./LearningClass/ListLearningClass";

function LearningClass (props) {
  return (
    <React.Fragment>
      <ListLearningClass />
    </React.Fragment>
  );
}

export default withRouter(LearningClass);
