import React, { useState, useEffect, Fragment } from 'react';
import { HashRouter as Router, Link, NavLink , Redirect, withRouter } from "react-router-dom";
import { connect } from 'react-redux';

import * as actions from './../../redux/actions/actionUser';

import avatarWoman from './../../images/avatar-woman.jpg';
import './Sidebar.scss';


function Sidebar(props) {
    const [activeParentNav, setActiveParentNav] = useState(0);
    const [activeChildNav, setActiveChildNav] = useState(false);
    const {user} = props;

    const parentUrl = ['users', 'regions', 'disciplines', 'services', 'competency', 'qualifications'];
    let idUrl = props.match.url.slice(1);
    const [isOpen, setOpenNav] = useState(parentUrl.includes(idUrl.split('/')[0]));
    const [isOpenSite, setSite] = useState(false);

    useEffect(() => {
        props.getCurrentUser();
    }, [])

    const openSideNav = (type, idx) => {
        switch (type) {
            case 'parent': 
                activeParentNav == idx ? setActiveParentNav(-1) : setActiveParentNav(idx);
            break;
            case 'child': 
                setActiveParentNav(idx);
            break;
        }
    }

    const sidebarNav = [
        {
            name: 'NECIT Admin',
            children: [
                {
                    name: 'Manage User',
                    url: '/users',
                },
                {
                    name: 'Manage Regions',
                    url: '/regions',
                },
                {
                    name: 'Manage Discipline',
                    url: '/disciplines',
                },
                {
                    name: 'Manage Service',
                    url: '/services',
                },
                {
                    name: 'Manage Competency',
                    url: '/competency',
                },
                {
                    name: 'Manage Qualification',
                    url: '/qualifications',
                }
            ],
            icon: 'fa fa-sitemap'
        },
        {
            name: 'Manage Suppliers',
            url: '/suppliers',
            children: [],
            icon: 'fa fa-user-secret'
        },
        {
            name: 'Manage Clients',
            url: '/clients',
            children: [],
            icon: 'fa fa-user-secret'
        },
        {
            name: 'Manage Vendors',
            url: '/vendors',
            children: [],
            icon: 'fa fa-users'
        },
        {
            name: 'Manage Contractors',
            url: '/contractors',
            children: [],
            icon: 'fa fa-users'
        },
        {
            name: 'Manage Job',
            url: '/jobs',
            children: [],
            icon: 'fa fa-users'
        },
        // {
        //     name: 'Site Management',
        //     children: [
        //         {
        //             name: 'Audit Logs',
        //             url: '/autit',
        //         },
        //         {
        //             name: 'Backup Data',
        //             url: '/backup',
        //         },
        //     ],
        //     icon: 'fa fa-sitemap'
        // },
    ]

    let count = props.match.url.split('').length;
    let url = count > 1 ? props.match.url.slice(1) : props.match.url;
    let height = 0;

    const isCoordinator = ['Manage Clients', 'Manage Vendors', 'Manage Contractors', 'Manage Job','Manage Suppliers'];
    const isRegionalManager = ['Manage User', 'Manage Clients', 'Manage Vendors', 'Manage Contractors', 'Manage Job','Manage Suppliers'];
    const isCompanyManager = ['Manage User', 'Manage Discipline', 'Manage Service', 'Manage Competency', 'Manage Qualification', 'Manage Clients', 'Manage Vendors', 'Manage Contractors', 'Manage Job','Manage Suppliers'];


    const checkAccess = (nav) => {
        switch (user.role) {
            case 'Coordinator': {
                if (isCoordinator.includes(nav)) {
                    height = 1 + 'rem';
                    open.height = height;
                    return true;
                }
                else return false;
            }
            case 'RegionalManager': {
                if (isRegionalManager.includes(nav)) {
                    height = (isRegionalManager.length - 4) * 5 + 'rem';
                    open.height = height;
                    return true;
                }
                else return false;
            }
            case 'CompanyManager': {
                if (isCompanyManager.includes(nav)) {
                    height = (isCompanyManager.length - 4) * 3.6 + 'rem';
                    open.height = height;
                    return true;
                }
                else return false;
            }
            default: {
                height = 6 * 3.6 + 'rem';
                open.height = height;
                return true;
            }
        }
    }

    const open = {
        transition: 'height 0.2s',
        height: height
    }

    const openSite = {
        transition: 'height 0.2s',
        height: '8.6rem'
    } 

    const closeNav = {
        height: 0,
        overflow: 'hidden',
        transition: 'height 0.2s',
        paddingBottom: 0,
        paddingTop: 0,
    }

    const showNav = nav => {
        return nav.map((nav, idx) => {
                return (
                  <React.Fragment key={idx}>
                        {!nav.children.length ? (
                            <React.Fragment>
                                <li className="has-sub" style={{textAlign: 'left'}}>
                                    <NavLink to={nav.url} activeClassName="active--left-bar" >
                                        <i className={nav.icon}></i>
                                        <span>{nav.name}</span>
                                    </NavLink>
                                </li> 
                            </React.Fragment>
                        ) 
                        : (
                            <React.Fragment>
                                <li className={`has-sub ${isOpen ? 'open-parent-nav' : ''}`} 
                                    style={{textAlign: 'left',
                                            display: (user.role !== 'Coordinator' ? 'block' : 'none')
                                }}>
                                    <span className={`parent--nav ${parentUrl.includes(idUrl.split('/')[0]) ? 'active--left-bar' : ''}`} onClick={() => setOpenNav(!isOpen)}
                                    >
                                        <b className="caret pull-right" style={{marginTop: '9px'}}></b>
                                        <i className={nav.icon}></i>
                                        <span>{nav.name}</span>
                                    </span>
                                    <ul className="sub-menu" style={isOpen ? open : closeNav}>
                                        {nav.children.map((x, idx) => {
                                            return (
                                                <React.Fragment key={idx}>
                                                    <li style={{display: (checkAccess(x.name) ? 'block' : 'none')}} onClick={() => setActiveChildNav(true)}><NavLink activeStyle={{color: '#fff'}} to={x.url}>{x.name}</NavLink></li>
                                                </React.Fragment>
                                            )
                                        })}
                                    </ul>
                                </li> 
                            </React.Fragment>
                        )}
                  </React.Fragment>
                )
            })
    }

    return (
        <React.Fragment>
            <div id="sidebar" className="sidebar custome-sidebar">
                <div data-scrollbar="true" data-height="100%">
                    <ul className="nav">
                        <li className="nav-profile">
                            <div className="cover with-shadow"></div>
                            <div className="image">
                                {/* <Link to="/">
                                    <img src={avatarWoman} alt="" /> 
                                </Link> */}
                            </div>
                            {/* <div className="info" style={{textAlign: 'left'}}>
                                Sean Ngu
                                <small>Front end developer</small>
                            </div> */}
                        </li>
                    </ul>
                    <ul className="nav">
                        <li className="has-sub" style={{textAlign: 'left'}}>
                            <NavLink exact to="/" activeClassName="active--left-bar">
                                <i className="fa fa-tachometer"></i>
                                <span>Dashboard</span>
                            </NavLink>
                        </li>
                        {showNav(sidebarNav)}
                        <li className={`has-sub ${isOpenSite ? 'open-parent-nav' : ''}`} style={{textAlign: 'left'}}>
                            <span className={`parent--nav`} onClick={() => setSite(!isOpenSite)}>
                                <b className="caret pull-right" style={{marginTop: '9px'}}></b>
                                <i className="fa fa-sitemap"></i>
                                <span>Site Management</span>
                            </span>
                            <ul className="sub-menu" style={isOpenSite ? openSite : closeNav}>
                                <li><Link to="/audit-logs">Audit Logs</Link></li>
                                <li><Link to="/backup">Backup Data</Link></li>
                            </ul>
                        </li>
                        {/* <li className="has-sub">
                            <NavLink to="/users" activeClassName="active--left-bar">
                                <i className="fa fa-key"></i>
                                <span>Manage User</span>
                            </NavLink>
                        </li>*/}
                    </ul>
                </div>
            </div>
            <div className="sidebar-bg"></div>
        </React.Fragment>
    );
}


const mapStateToProps = (state) => {
    const {user} = state;
    return {user};
}

const mapDispatchToProps = (dispatch) => ({
    getCurrentUser:() => dispatch(actions.getCurrentUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Sidebar))