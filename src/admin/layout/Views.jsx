import React from 'react'
import adminlogo from '../../img/logo.svg'
import profileimg from '../../img/profile_av.jpg'
import { Outlet } from 'react-router-dom'
import { NavLink, Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function Views() {

    const getLocation = useLocation()

    return (
        <>
            <div className="overlay_menu">
                <button className="btn btn-primary btn-icon btn-icon-mini btn-round"><i className="zmdi zmdi-close" /></button>
                <div className="container">
                    <div className="row clearfix">
                        <div className="card">
                            <div className="body">
                                <div className="input-group mb-0">
                                    <input type="text" className="form-control" placeholder="Search..." />
                                    <div className="input-group-append">
                                        <span className="input-group-text"><i className="zmdi zmdi-search" /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card links">
                            <div className="body">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 col-sm-12">
                                        <h6>App</h6>
                                        <ul className="list-unstyled">
                                            <li><a href="mail-inbox.html">Inbox</a></li>
                                            <li><a href="chat.html">Chat</a></li>
                                            <li><a href="events.html">Calendar</a></li>
                                            <li><a href="file-dashboard.html">File Manager</a></li>
                                            <li><a href="contact.html">Contact list</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12">
                                        <h6>User Interface (UI)</h6>
                                        <ul className="list-unstyled">
                                            <li><a href="ui_kit.html">UI KIT</a></li>
                                            <li><a href="tabs.html">Tabs</a></li>
                                            <li><a href="range-sliders.html">Range Sliders</a></li>
                                            <li><a href="modals.html">Modals</a></li>
                                            <li><a href="alerts.html">Alerts</a></li>
                                            <li><a href="dialogs.html">Dialogs</a></li>
                                            <li><a href="collapse.html">Collapse</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12">
                                        <h6>Sample Pages</h6>
                                        <ul className="list-unstyled">
                                            <li><a href="image-gallery.html">Image Gallery</a> </li>
                                            <li><a href="profile.html">Profile</a></li>
                                            <li><a href="timeline.html">Timeline</a></li>
                                            <li><a href="pricing.html">Pricing</a></li>
                                            <li><a href="invoices.html">Invoices</a></li> <li><a href="faqs.html">FAQs</a></li>
                                            <li><a href="search-results.html">Search Results</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12">
                                        <h6>About</h6>
                                        <ul className="list-unstyled">
                                            <li><a href="http://thememakker.com/about/" target="_blank">About</a></li>
                                            <li><a href="http://thememakker.com/contact/" target="_blank">Contact Us</a></li>
                                            <li><a href="http://thememakker.com/admin-templates/" target="_blank">Admin Templates</a></li>
                                            <li><a href="http://thememakker.com/services/" target="_blank">Services</a></li>
                                            <li><a href="http://thememakker.com/portfolio/" target="_blank">Portfolio</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-12 col-md-12">
                            <div className="social">
                                <a className="icon" href="https://www.facebook.com/thememakkerteam" target="_blank"><i className="zmdi zmdi-facebook" /></a>
                                <a className="icon" href="https://www.behance.net/thememakker" target="_blank"><i className="zmdi zmdi-behance" /></a>
                                <a className="icon" href="javascript:void(0);"><i className="zmdi zmdi-twitter" /></a>
                                <a className="icon" href="javascript:void(0);"><i className="zmdi zmdi-linkedin" /></a>
                                <p>Coded by WrapTheme<br /> Designed by <a href="http://thememakker.com/" target="_blank">thememakker.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="overlay" />

            <aside id="minileftbar" className="minileftbar">
                <ul className="menu_list">
                    <li>
                        <a href="javascript:void(0);" className="bars" />
                        <a className="navbar-brand" href="index.html"><img src={adminlogo} width={48} height={48} alt="Alpino" /></a>
                    </li>
                    <li><a href="javascript:void(0);" className="btn_overlay hidden-sm-down"><i className="zmdi zmdi-search" /></a></li>
                    <li><a href="javascript:void(0);" className="menu-sm"><i className="zmdi zmdi-swap" /></a></li>
                    <li className="menuapp-btn"><a href="javascript:void(0);"><i className="zmdi zmdi-apps" /></a></li>
                    <li className="notifications badgebit">
                        <a href="javascript:void(0);">
                            <i className="zmdi zmdi-notifications" />
                            <div className="notify">
                                <span className="heartbit" />
                                <span className="point" />
                            </div>
                        </a>
                    </li>
                    <li className="task badgebit">
                        <a href="javascript:void(0);">
                            <i className="zmdi zmdi-flag" />
                            <div className="notify">
                                <span className="heartbit" />
                                <span className="point" />
                            </div>
                        </a>
                    </li>
                    <li><a href="events.html" title="Events"><i className="zmdi zmdi-calendar" /></a></li>
                    <li><a href="mail-inbox.html" title="Inbox"><i className="zmdi zmdi-email" /></a></li>
                    <li><a href="contact.html" title="Contact List"><i className="zmdi zmdi-account-box-phone" /></a></li>
                    <li><a href="chat.html"><i className="zmdi zmdi-comments" /></a></li>
                    <li><a href="javascript:void(0);" className="fullscreen" data-provide="fullscreen"><i className="zmdi zmdi-fullscreen" /></a></li>
                    <li className="power">
                        <a href="javascript:void(0);" className="js-right-sidebar"><i className="zmdi zmdi-settings zmdi-hc-spin" /></a>
                        <a href="sign-in.html" className="mega-menu"><i className="zmdi zmdi-power" /></a>
                    </li>
                </ul>
            </aside>
            <aside className="right_menu">
                <div className="menu-app">
                    <div className="slim_scroll">
                        <div className="card">
                            <div className="header">
                                <h2><strong>App</strong> Menu</h2>
                            </div>
                            <div className="body">
                                <ul className="list-unstyled menu">
                                    <li><a href="events.html"><i className="zmdi zmdi-calendar-note" /><span>Calendar</span></a></li>
                                    <li><a href="file-dashboard.html"><i className="zmdi zmdi-file-text" /><span>File Manager</span></a></li>
                                    <li><a href="blog-dashboard.html"><i className="zmdi zmdi-blogger" /><span>Blog</span></a></li>
                                    <li><a href="javascript:void(0)"><i className="zmdi zmdi-arrows" /><span>Notes</span></a></li>
                                    <li><a href="javascript:void(0)"><i className="zmdi zmdi-view-column" /><span>Taskboard</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="notif-menu">
                    <div className="slim_scroll">
                        <div className="card">
                            <div className="header">
                                <h2><strong>Messages</strong></h2>
                            </div>
                            <div className="body">
                                <ul className="messages list-unstyled">
                                    <li>
                                        <a href="javascript:void(0);">
                                            <div className="media">
                                                <img className="media-object rounded-circle" src="assets/images/xs/avatar1.jpg" alt="" />
                                                <div className="media-body">
                                                    <span className="name">Alexander <small className="time">35min ago</small></span>
                                                    <p className="message">New tasks needs to be done</p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">
                                            <div className="media">
                                                <img className="media-object rounded-circle" src="assets/images/xs/avatar2.jpg" alt="" />
                                                <div className="media-body">
                                                    <span className="name">Grayson <small className="time">1hr ago</small></span>
                                                    <p className="message">New tasks needs to be done</p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">
                                            <div className="media">
                                                <img className="media-object rounded-circle" src="assets/images/xs/avatar3.jpg" alt="" />
                                                <div className="media-body">
                                                    <span className="name">Sophia <small className="time">31min ago</small></span>
                                                    <p className="message">New tasks needs to be done</p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="card">
                            <div className="header">
                                <h2><strong>Notifications</strong></h2>
                            </div>
                            <div className="body">
                                <ul className="notification list-unstyled">
                                    <li>
                                        <i className="zmdi zmdi-balance-wallet text-success" />
                                        <strong>+$30 New sale</strong>
                                        <p><a href="javascript:void(0)">Admin Template</a></p>
                                        <small className="text-muted">7 min ago</small>
                                    </li>
                                    <li>
                                        <i className="zmdi zmdi-edit text-info" />
                                        <strong>You Edited file</strong>
                                        <p><a href="javascript:void(0)">Docs.doc</a></p>
                                        <small className="text-muted">15 min ago</small>
                                    </li>
                                    <li>
                                        <i className="zmdi zmdi-delete text-danger" />
                                        <strong>Project removed</strong>
                                        <p><a href="javascript:void(0)">AdminX BS4</a></p>
                                        <small className="text-muted">1 hours ago</small>
                                    </li>
                                    <li>
                                        <i className="zmdi zmdi-account text-success" />
                                        <strong>New user</strong>
                                        <p><a href="javascript:void(0)">UI Designer</a></p>
                                        <small className="text-muted">1 hours ago</small>
                                    </li>
                                    <li>
                                        <i className="zmdi zmdi-flag text-warning" />
                                        <strong>Alpino v1.0.0 is available</strong>
                                        <p><a href="javascript:void(0)">Update now</a></p>
                                        <small className="text-muted">5 hours ago</small>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="task-menu">
                    <div className="slim_scroll">
                        <div className="card tasks">
                            <div className="header">
                                <h2><strong>Project</strong> Status</h2>
                            </div>
                            <div className="body m-b-10">
                                <a href="javascript:void(0);">
                                    <span className="text-muted">Project Name 1 <span className="float-right">29%</span></span>
                                    <div className="progress">
                                        <div className="progress-bar l-turquoise" role="progressbar" aria-valuenow={29} aria-valuemin={0} aria-valuemax={100} style={{ width: '29%' }} />
                                    </div>
                                    <ul className="list-unstyled team-info">
                                        <li className="m-r-15"><small className="text-muted">Team</small></li>
                                        <li><img src="assets/images/xs/avatar2.jpg" alt="Avatar" /></li>
                                        <li><img src="assets/images/xs/avatar3.jpg" alt="Avatar" /></li>
                                        <li><img src="assets/images/xs/avatar4.jpg" alt="Avatar" /></li>
                                    </ul>
                                </a>
                            </div>
                            <div className="body m-b-10">
                                <a href="javascript:void(0);">
                                    <span className="text-muted">Project Name 2 <span className="float-right">78%</span></span>
                                    <div className="progress">
                                        <div className="progress-bar l-slategray" role="progressbar" aria-valuenow={78} aria-valuemin={0} aria-valuemax={100} style={{ width: '78%' }} />
                                    </div>
                                    <ul className="list-unstyled team-info">
                                        <li className="m-r-15"><small className="text-muted">Team</small></li>
                                        <li><img src="assets/images/xs/avatar6.jpg" alt="Avatar" /></li>
                                        <li><img src="assets/images/xs/avatar7.jpg" alt="Avatar" /></li>
                                    </ul>
                                </a>
                            </div>
                            <div className="body">
                                <a href="javascript:void(0);">
                                    <span className="text-muted">Project Name 4 <span className="float-right">68%</span></span>
                                    <div className="progress">
                                        <div className="progress-bar l-coral" role="progressbar" aria-valuenow={68} aria-valuemin={0} aria-valuemax={100} style={{ width: '68%' }} />
                                    </div>
                                    <ul className="list-unstyled team-info">
                                        <li className="m-r-15"><small className="text-muted">Team</small></li>
                                        <li><img src="assets/images/xs/avatar8.jpg" alt="Avatar" /></li>
                                        <li><img src="assets/images/xs/avatar9.jpg" alt="Avatar" /></li>
                                    </ul>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="rightsidebar" className="right-sidebar">
                    <ul className="nav nav-tabs">
                        <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#setting">Setting</a></li>
                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#activity">Activity</a></li>
                    </ul>
                    <div className="tab-content slim_scroll">
                        <div className="tab-pane slideRight active" id="setting">
                            <div className="card">
                                <div className="header">
                                    <h2><strong>Colors</strong> Skins</h2>
                                </div>
                                <div className="body">
                                    <ul className="choose-skin list-unstyled m-b-0">
                                        <li data-theme="black" className="active">
                                            <div className="black" />
                                        </li>
                                        <li data-theme="purple">
                                            <div className="purple" />
                                        </li>
                                        <li data-theme="blue">
                                            <div className="blue" />
                                        </li>
                                        <li data-theme="cyan">
                                            <div className="cyan" />
                                        </li>
                                        <li data-theme="green">
                                            <div className="green" />
                                        </li>
                                        <li data-theme="orange">
                                            <div className="orange" />
                                        </li>
                                        <li data-theme="blush">
                                            <div className="blush" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card">
                                <div className="header">
                                    <h2><strong>General</strong> Settings</h2>
                                </div>
                                <div className="body">
                                    <ul className="setting-list list-unstyled m-b-0">
                                        <li>
                                            <div className="checkbox">
                                                <input id="checkbox1" type="checkbox" />
                                                <label htmlFor="checkbox1">Report Panel Usage</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="checkbox">
                                                <input id="checkbox2" type="checkbox" defaultChecked />
                                                <label htmlFor="checkbox2">Email Redirect</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="checkbox">
                                                <input id="checkbox3" type="checkbox" />
                                                <label htmlFor="checkbox3">Notifications</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="checkbox">
                                                <input id="checkbox4" type="checkbox" />
                                                <label htmlFor="checkbox4">Auto Updates</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="checkbox">
                                                <input id="checkbox5" type="checkbox" defaultChecked />
                                                <label htmlFor="checkbox5">Offline</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="checkbox m-b-0">
                                                <input id="checkbox6" type="checkbox" />
                                                <label htmlFor="checkbox6">Location Permission</label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card">
                                <div className="header">
                                    <h2><strong>Left</strong> Menu</h2>
                                </div>
                                <div className="body theme-light-dark">
                                    <button className="t-dark btn btn-primary btn-round btn-block">Dark</button>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane slideLeft" id="activity">
                            <div className="card activities">
                                <div className="header">
                                    <h2><strong>Recent</strong> Activity Feed</h2>
                                </div>
                                <div className="body">
                                    <div className="streamline b-accent">
                                        <div className="sl-item">
                                            <div className="sl-content">
                                                <div className="text-muted">Just now</div>
                                                <p>Finished task <a href="#" className="text-info">#features 4</a>.</p>
                                            </div>
                                        </div>
                                        <div className="sl-item b-info">
                                            <div className="sl-content">
                                                <div className="text-muted">10:30</div>
                                                <p><a href="#">@Jessi</a> retwit your post</p>
                                            </div>
                                        </div>
                                        <div className="sl-item b-primary">
                                            <div className="sl-content">
                                                <div className="text-muted">12:30</div>
                                                <p>Call to customer <a href="#" className="text-info">Jacob</a> and discuss the detail.</p>
                                            </div>
                                        </div>
                                        <div className="sl-item b-warning">
                                            <div className="sl-content">
                                                <div className="text-muted">1 days ago</div>
                                                <p><a href="#" className="text-info">Jessi</a> commented your post.</p>
                                            </div>
                                        </div>
                                        <div className="sl-item b-primary">
                                            <div className="sl-content">
                                                <div className="text-muted">2 days ago</div>
                                                <p>Call to customer <a href="#" className="text-info">Jacob</a> and discuss the detail.</p>
                                            </div>
                                        </div>
                                        <div className="sl-item b-primary">
                                            <div className="sl-content">
                                                <div className="text-muted">3 days ago</div>
                                                <p>Call to customer <a href="#" className="text-info">Jacob</a> and discuss the detail.</p>
                                            </div>
                                        </div>
                                        <div className="sl-item b-warning">
                                            <div className="sl-content">
                                                <div className="text-muted">4 Week ago</div>
                                                <p><a href="#" className="text-info">Jessi</a> commented your post.</p>
                                            </div>
                                        </div>
                                        <div className="sl-item b-warning">
                                            <div className="sl-content">
                                                <div className="text-muted">5 days ago</div>
                                                <p><a href="#" className="text-info">Jessi</a> commented your post.</p>
                                            </div>
                                        </div>
                                        <div className="sl-item b-primary">
                                            <div className="sl-content">
                                                <div className="text-muted">5 Week ago</div>
                                                <p>Call to customer <a href="#" className="text-info">Jacob</a> and discuss the detail.</p>
                                            </div>
                                        </div>
                                        <div className="sl-item b-primary">
                                            <div className="sl-content">
                                                <div className="text-muted">3 Week ago</div>
                                                <p>Call to customer <a href="#" className="text-info">Jacob</a> and discuss the detail.</p>
                                            </div>
                                        </div>
                                        <div className="sl-item b-warning">
                                            <div className="sl-content">
                                                <div className="text-muted">1 Month ago</div>
                                                <p><a href="#" className="text-info">Jessi</a> commented your post.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="leftsidebar" className="sidebar">
                    <div className="menu">
                        <ul className="list">
                            <li>
                                <div className="user-info m-b-20">
                                    <div className="image">
                                        <a href="profile.html"><img src={profileimg} alt="User" /></a>
                                    </div>
                                    <div className="detail">
                                        <h6>Michael</h6>
                                        <p className="m-b-0"><a href="https://www.wrraptheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="dcb5b2bab39cb9a4bdb1acb0b9f2bfb3b1">michael@gmail.com</a></p>
                                        <a href="javascript:void(0);" title="true" className=" waves-effect waves-block"><i className="zmdi zmdi-facebook-box" /></a>
                                        <a href="javascript:void(0);" title="true" className=" waves-effect waves-block"><i className="zmdi zmdi-linkedin-box" /></a>
                                        <a href="javascript:void(0);" title="true" className=" waves-effect waves-block"><i className="zmdi zmdi-instagram" /></a>
                                        <a href="javascript:void(0);" title="true" className=" waves-effect waves-block"><i className="zmdi zmdi-twitter-box" /></a>
                                    </div>
                                </div>
                            </li>
                            <li className="header">MAIN</li>
                            <li>
                                <NavLink to="/dashboard/home"><i className="zmdi zmdi-blogger" /><span>Dashboard</span> </NavLink>
                            </li>
                            <li>
                                <NavLink to="create-post"><i className="zmdi zmdi-plus-circle" /><span>New Post</span> </NavLink>
                            </li>
                            <li>
                                <NavLink to="all-posts"><i className="zmdi zmdi-plus-circle" /><span> All Posts</span> </NavLink>
                            </li>
                            <li>
                                <NavLink to="add-category"><i className="zmdi zmdi-plus-circle" /><span>Add Category</span> </NavLink>
                            </li>
                            <li>
                                <NavLink to="add-page"><i className="zmdi zmdi-plus-circle" /><span>Add Page</span> </NavLink>
                            </li>
                            <li>
                                <NavLink to="site-setting"><i className="zmdi zmdi-plus-circle" /><span>Site Setting</span> </NavLink>
                            </li>
                            <li>
                                <NavLink to="all-category"><i className="zmdi zmdi-plus-circle" /><span>All Category</span> </NavLink>
                            </li>
                            <li>
                                <NavLink to="all-pages"><i className="zmdi zmdi-plus-circle" /><span>All Pages</span> </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </aside>
            <section className="content blog-page">
                <div className="container-fluid">

                    <div className="block-header">
                        <div className="row">
                            <div className="col-lg-5 col-md-5 col-sm-12">
                                <h2>Blog Dashboard</h2>
                                <ul className="breadcrumb p-l-0 p-b-0">
                                    <li className="breadcrumb-item"><Link to="/dashboard/home"><i className="zmdi zmdi-home" /></Link></li>
                                    <li className="breadcrumb-item"><Link to="/dashboard/home">{getLocation.pathname.split('/')[1]}</Link></li>
                                    <li className="breadcrumb-item active">{getLocation.pathname.split('/')[2]}</li>
                                </ul>
                            </div>
                            <div className="col-lg-7 col-md-7 col-sm-12">
                                <div className="input-group mb-0">
                                    <input type="text" className="form-control" placeholder="Search..." />
                                    <div className="input-group-append">
                                        <span className="input-group-text"><i className="zmdi zmdi-search" /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Outlet />
                </div>
            </section>
        </>
    )
}

export default Views