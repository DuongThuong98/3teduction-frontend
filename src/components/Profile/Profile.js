import React, { useState, useEffect } from 'react';
import { HashRouter as Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import { useToasts } from 'react-toast-notifications'

import * as actions from './../../redux/actions/actionUser';
import ProfileInfo from './ProfileInfo';
import ProfilePassword from './ProfilePassword';

import avatarWoman from './../../images/avatar-woman.jpg';

import './Profile.scss';

function Profile(props) {
    if (props.pageTitle) {
        window.document.title = props.pageTitle;
    }

    const url = props.match.params.id;
    const [tabActive, setTabActive] = useState('Profile');
    const {user} = props;
    const [info, setInfo] = useState({});
   
    console.log('getUser', user, url, tabActive);

    useEffect(() => {
        props.getCurrentUser();
    }, [])

    if (tabActive === 'Profile' && url === 'changepassword') {
        setTabActive('Password');
    } 
    else if (tabActive === 'Password' && url === 'info') {
        setTabActive('Profile');
    }

    const onChangeTab = (tab) => {
        if (tab === 'Profile') {
            props.history.replace('/profile/info');
            setTabActive('Profile');
        } else {
            props.history.replace('/profile/changepassword')
            setTabActive('Password');
        }
    }

    const handleInfo = (event) => {
        event.preventDefault();
        let target = event.target;

        setInfo({
            ...info,
            [target.name]: target.value
        })
    }

    const renderTab = () => {
        const tabs = ['Profile', 'Password'];
        return tabs.map((tab, idx) => {
            return (
                <React.Fragment key={idx}>
                    <span className={`${tabActive === tab ? 'active' : ''}`} onClick={() => onChangeTab(tab)}
                        style={{marginRight: '2rem', cursor: 'pointer'}}>
                            {tab}
                    </span>
                </React.Fragment>
            )
        });
    }

    return (
        <div className="Profile">
            <div className="row">
                {/* <div className="col-md-4 col-lg-4">
                    <div className="text-center" style={{position: 'relative'}}>
                        <input type="file" className="Profile__custome-upload-img" />
                        <img src={avatarWoman} className="Profile__avatar img-circle img-thumbnail" alt="avatar" />
                        <span className="Profile__update-img"> Update Avatar </span>
                    </div><br/>
                </div> */}
                <div className="col-md-12 col-lg-12 text-left bg-white" style={{padding: '1rem 2rem'}}>
                    <div className="Profile__Tab">
                        {renderTab()}
                    </div>
                   {tabActive === 'Profile' ? (<ProfileInfo user={user} />) : (<ProfilePassword />)}
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    const { alert, user } = state;
    return { alert, user };
}

const mapDispatchToProps = (dispatch) => ({
    getCurrentUser:() => dispatch(actions.getCurrentUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Profile));
