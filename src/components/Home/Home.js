import React from 'react';
import { HashRouter as Router, Link, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from 'react-redux';

import './Home.scss';

function Home(props) {
   
    return (
        <div className="Home">
            <div className="Home__table">
                <span> TABLE </span>
            </div>
        </div>
    );
}

export default withRouter(Home);
