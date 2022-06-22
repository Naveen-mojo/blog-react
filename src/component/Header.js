import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../img/Group-18305.png'
import logo2 from '../img/Group-18306.png'

function Header(props) {
    const termData = props.term

    return (
        <>
            <header className="site-header">
                {/* Mobile header */}
                <div id="atbs-mobile-header" className="mobile-header visible-xs visible-sm">
                    <div className="mobile-header__inner mobile-header__inner--flex">
                        {/* mobile logo open */}
                        <div className="header-branding header-branding--mobile mobile-header__section text-left">
                            <div className="header-logo header-logo--mobile flexbox__item text-left">
                                <a href="https://atom.bk-ninja.com/technology">
                                    {/* begin logo */}
                                    <span className="logo-wrapper">
                                        <img className="logo-light-mode" src={logo} alt="Logo" />
                                        <img className="logo-dark-mode" src={logo2} alt="Logo" />
                                    </span>{/* .logo-wrapper */}
                                    {/* end logo  */}
                                </a>
                            </div>
                        </div>
                        {/* logo close */}
                        <div className="mobile-header__section text-right">
                            <div className="flexbox flexbox-center-y">
                                {/* Button Dark Mode & Light Mode   */}
                                <button className="atbs-theme-switch is-toggle-switch">
                                    <span className="atbs-theme-switch__inner">
                                        <span className="atbs-theme-switch__light">
                                            <svg width={23} height={23} viewBox="0 0 45.2 45.2">
                                                <path d="M22.6 11.3a11.3 11.3 0 100 22.6 11.3 11.3 0 000-22.6zM22.6 8c-1.2 0-2.2-1-2.2-2.3V2.2a2.2 2.2 0 114.4 0v3.5c0 1.3-1 2.2-2.2 2.2zM22.6 37.2c-1.2 0-2.2 1-2.2 2.2V43a2.2 2.2 0 104.4 0v-3.6c0-1.2-1-2.2-2.2-2.2zM33 12.2c-1-.8-1-2.2 0-3l2.4-2.6a2.2 2.2 0 013.1 3.1L36 12.2c-.8.9-2.2.9-3 0zM12.2 33c-.8-1-2.2-1-3 0l-2.6 2.4a2.2 2.2 0 003.1 3.1l2.5-2.5c.9-.8.9-2.2 0-3zM37.2 22.6c0-1.2 1-2.2 2.2-2.2H43a2.2 2.2 0 110 4.4h-3.6c-1.2 0-2.2-1-2.2-2.2zM8 22.6c0-1.2-1-2.2-2.3-2.2H2.2a2.2 2.2 0 100 4.4h3.5c1.3 0 2.2-1 2.2-2.2zM33 33c.8-1 2.2-1 3 0l2.5 2.4a2.2 2.2 0 11-3 3.1L32.8 36c-.8-.8-.8-2.2 0-3zM12.2 12.2c.9-.8.9-2.2 0-3L9.7 6.5a2.2 2.2 0 00-3 3.1L9 12.2c.9.9 2.3.9 3.1 0z" />
                                            </svg>
                                        </span>
                                        <span className="atbs-theme-switch__dark">
                                            <svg width={23} height={23} viewBox="0 0 511 512">
                                                <path d="M334.3 5.1a19 19 0 00-5 20.5 234 234 0 0114.2 80.6c0 63.2-24.7 122.7-69.4 167.5A235.4 235.4 0 01106.6 343c-27.8 0-54.9-4.8-80.5-14.1a19 19 0 00-24 25.7 266.9 266.9 0 00345.2 137c32.4-13.5 61.6-33 86.7-58a267.3 267.3 0 0078.5-192.6A267 267 0 00355 1.7 19 19 0 00334.3 5zm0 0" />
                                            </svg>
                                        </span>
                                    </span>
                                </button>                <button type="submit" className="mobile-header-btn js-search-toggle">
                                    <i className="mdicon mdicon-search mdicon--last hidden-xs" /><i className="mdicon mdicon-search visible-xs-inline-block" />
                                </button>
                                <a href="#atbs-offcanvas-mobile" className="offcanvas-menu-toggle mobile-header-btn js-atbs-offcanvas-toggle">
                                    <i className="mdicon mdicon-menu mdicon--last hidden-xs" /><i className="mdicon mdicon-menu visible-xs-inline-block" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>{/* Mobile header */}
                <div className="header-main hidden-xs hidden-sm">
                    <div className="container">
                        <div className="row row--flex row--vertical-center">
                            <div className="col-xs-3">
                                <div className="header-social">
                                    <ul className="social-list social-list--lg list-horizontal">
                                        <li><a href="#" target="_blank"><i className="mdicon mdicon-facebook" /></a></li><li><a href="#" target="_blank"><i className="mdicon mdicon-twitter" /></a></li><li><a href="#" target="_blank"><i className="mdicon mdicon-instagram" /></a></li>                          </ul>
                                </div>
                            </div>
                            <div className="col-xs-6">
                                <div className="site-logo header-logo text-center">
                                    <a href="#">
                                        <span className="logo-wrapper"><img className="logo-light-mode" src="https://atom.bk-ninja.com/technology/wp-content/uploads/2021/04/Group-18305.png" alt="Logo" width={340} /><img className="logo-dark-mode" src="https://atom.bk-ninja.com/technology/wp-content/uploads/2021/04/Group-18306.png" alt="Logo" width={340} /></span>  </a>
                                </div>{/* .site-logo */}              </div>
                            <div className="col-xs-3 text-right">
                                <a href="#subscribe-modal" className="btn btn-default" data-toggle="modal" data-target="#subscribe-modal">
                                    <i className="mdicon mdicon-mail_outline mdicon--first" />
                                    <span>Subscribe</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="navigation-bar navigation-bar--fullwidth hidden-xs hidden-sm js-sticky-header-holder navigation-custom-bg-color">
                    <div className="container">
                        <div className="navigation-bar__inner">
                            <div className="navigation-bar__section">
                                <a href="#atbs-offcanvas-primary" className="offcanvas-menu-toggle navigation-bar-btn js-atbs-offcanvas-toggle">
                                    <i className="mdicon mdicon-menu" />
                                </a>                  </div>
                            <div className="navigation-wrapper navigation-bar__section js-priority-nav">
                                <div id="main-menu" className="menu-main-menu-container"><ul id="menu-main-menu" className="navigation navigation--main navigation--inline">
                                    <li id="menu-item-860" className="nav-item"><NavLink to="/" aria-current="page">Home</NavLink></li>
                                    {
                                        termData.map((curValue) => {
                                            return (

                                                <li key={curValue.TermId} id={`menu-item-861-${curValue.TermId}`} className="nav-item"><NavLink to={`category/${curValue.TermSlug}`}>{curValue.TermName}</NavLink></li>

                                            )
                                        })
                                    }

                                </ul></div>              </div>
                            <div className="navigation-bar__section flexbox-wrap flexbox-center-y lwa lwa-template-modal">
                                {/* Button Dark Mode & Light Mode   */}
                                <button className="atbs-theme-switch is-toggle-switch">
                                    <span className="atbs-theme-switch__inner">
                                        <span className="atbs-theme-switch__light">
                                            <svg width={23} height={23} viewBox="0 0 45.2 45.2">
                                                <path d="M22.6 11.3a11.3 11.3 0 100 22.6 11.3 11.3 0 000-22.6zM22.6 8c-1.2 0-2.2-1-2.2-2.3V2.2a2.2 2.2 0 114.4 0v3.5c0 1.3-1 2.2-2.2 2.2zM22.6 37.2c-1.2 0-2.2 1-2.2 2.2V43a2.2 2.2 0 104.4 0v-3.6c0-1.2-1-2.2-2.2-2.2zM33 12.2c-1-.8-1-2.2 0-3l2.4-2.6a2.2 2.2 0 013.1 3.1L36 12.2c-.8.9-2.2.9-3 0zM12.2 33c-.8-1-2.2-1-3 0l-2.6 2.4a2.2 2.2 0 003.1 3.1l2.5-2.5c.9-.8.9-2.2 0-3zM37.2 22.6c0-1.2 1-2.2 2.2-2.2H43a2.2 2.2 0 110 4.4h-3.6c-1.2 0-2.2-1-2.2-2.2zM8 22.6c0-1.2-1-2.2-2.3-2.2H2.2a2.2 2.2 0 100 4.4h3.5c1.3 0 2.2-1 2.2-2.2zM33 33c.8-1 2.2-1 3 0l2.5 2.4a2.2 2.2 0 11-3 3.1L32.8 36c-.8-.8-.8-2.2 0-3zM12.2 12.2c.9-.8.9-2.2 0-3L9.7 6.5a2.2 2.2 0 00-3 3.1L9 12.2c.9.9 2.3.9 3.1 0z" />
                                            </svg>
                                        </span>
                                        <span className="atbs-theme-switch__dark">
                                            <svg width={23} height={23} viewBox="0 0 511 512">
                                                <path d="M334.3 5.1a19 19 0 00-5 20.5 234 234 0 0114.2 80.6c0 63.2-24.7 122.7-69.4 167.5A235.4 235.4 0 01106.6 343c-27.8 0-54.9-4.8-80.5-14.1a19 19 0 00-24 25.7 266.9 266.9 0 00345.2 137c32.4-13.5 61.6-33 86.7-58a267.3 267.3 0 0078.5-192.6A267 267 0 00355 1.7 19 19 0 00334.3 5zm0 0" />
                                            </svg>
                                        </span>
                                    </span>
                                </button>                    <a href="#login-modal" className="navigation-bar__login-btn navigation-bar-btn" data-toggle="modal" data-target="#login-modal">
                                    <i className="mdicon mdicon-person" />
                                </a>                    <button type="submit" className="navigation-bar-btn search-toggle js-search-toggle">
                                    <i className="mdicon mdicon-search" />
                                </button>              </div>
                        </div>{/* .navigation-bar__inner */}
                    </div>{/* .container */}
                </nav>{/* .navigation-bar */}
            </header>
            <div>
                {/* Sticky header */}
                <div id="atbs-sticky-header" className="sticky-header js-sticky-header">
                    {/* Navigation bar */}
                    <nav className="navigation-bar navigation-bar--fullwidth hidden-xs hidden-sm">
                        <div className="navigation-bar__inner">
                            <div className="navigation-bar__section flex-box">
                                <a href="#atbs-offcanvas-primary" className="offcanvas-menu-toggle navigation-bar-btn js-atbs-offcanvas-toggle">
                                    <i className="mdicon mdicon-menu" />
                                </a>
                                <div className="site-logo header-logo">
                                    <a href="https://atom.bk-ninja.com/technology">
                                        <span className="logo-wrapper"><img className="logo-light-mode" src={logo} alt="Logo" /><img className="logo-dark-mode" src={logo2} alt="Logo" /></span> </a>
                                </div>{/* .site-logo */}
                            </div>
                            <div className="navigation-wrapper navigation-bar__section js-priority-nav text-center">
                                <div id="sticky-main-menu" className="menu-main-menu-container">
                                    <ul id="menu-main-menu-2" className="navigation navigation--main navigation--inline">
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-763 current_page_item menu-item-860">
                                            <a href="https://atom.bk-ninja.com/technology/" aria-current="page">Home</a></li>
                                        <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-861 menu-item-cat-4">
                                            <a href="https://atom.bk-ninja.com/technology/category/laptop/">Laptop</a></li>
                                        <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-862 menu-item-cat-7">
                                            <a href="https://atom.bk-ninja.com/technology/category/laptop/fashion/">Fashion</a>
                                        </li>
                                        <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-863 menu-item-cat-6">
                                            <a href="https://atom.bk-ninja.com/technology/category/laptop/tips/">Tips</a></li>
                                        <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-864 menu-item-cat-2">
                                            <a href="https://atom.bk-ninja.com/technology/category/news/">News</a></li>
                                        <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-865 menu-item-cat-5">
                                            <a href="https://atom.bk-ninja.com/technology/category/review/">Review</a></li>
                                        <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-866 menu-item-cat-3">
                                            <a href="https://atom.bk-ninja.com/technology/category/build-pc/">Build PC</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="navigation-bar__section lwa lwa-template-modal flexbox-wrap justify-content-center align-item-center">
                                <a href="#login-modal" className="navigation-bar__login-btn navigation-bar-btn" data-toggle="modal" data-target="#login-modal">
                                    <i className="mdicon mdicon-person" />
                                </a> {/* Button Dark Mode & Light Mode   */}
                                <button className="atbs-theme-switch is-toggle-switch">
                                    <span className="atbs-theme-switch__inner">
                                        <span className="atbs-theme-switch__light">
                                            <svg width={23} height={23} viewBox="0 0 45.2 45.2">
                                                <path d="M22.6 11.3a11.3 11.3 0 100 22.6 11.3 11.3 0 000-22.6zM22.6 8c-1.2 0-2.2-1-2.2-2.3V2.2a2.2 2.2 0 114.4 0v3.5c0 1.3-1 2.2-2.2 2.2zM22.6 37.2c-1.2 0-2.2 1-2.2 2.2V43a2.2 2.2 0 104.4 0v-3.6c0-1.2-1-2.2-2.2-2.2zM33 12.2c-1-.8-1-2.2 0-3l2.4-2.6a2.2 2.2 0 013.1 3.1L36 12.2c-.8.9-2.2.9-3 0zM12.2 33c-.8-1-2.2-1-3 0l-2.6 2.4a2.2 2.2 0 003.1 3.1l2.5-2.5c.9-.8.9-2.2 0-3zM37.2 22.6c0-1.2 1-2.2 2.2-2.2H43a2.2 2.2 0 110 4.4h-3.6c-1.2 0-2.2-1-2.2-2.2zM8 22.6c0-1.2-1-2.2-2.3-2.2H2.2a2.2 2.2 0 100 4.4h3.5c1.3 0 2.2-1 2.2-2.2zM33 33c.8-1 2.2-1 3 0l2.5 2.4a2.2 2.2 0 11-3 3.1L32.8 36c-.8-.8-.8-2.2 0-3zM12.2 12.2c.9-.8.9-2.2 0-3L9.7 6.5a2.2 2.2 0 00-3 3.1L9 12.2c.9.9 2.3.9 3.1 0z">
                                                </path>
                                            </svg>
                                        </span>
                                        <span className="atbs-theme-switch__dark">
                                            <svg width={23} height={23} viewBox="0 0 511 512">
                                                <path d="M334.3 5.1a19 19 0 00-5 20.5 234 234 0 0114.2 80.6c0 63.2-24.7 122.7-69.4 167.5A235.4 235.4 0 01106.6 343c-27.8 0-54.9-4.8-80.5-14.1a19 19 0 00-24 25.7 266.9 266.9 0 00345.2 137c32.4-13.5 61.6-33 86.7-58a267.3 267.3 0 0078.5-192.6A267 267 0 00355 1.7 19 19 0 00334.3 5zm0 0">
                                                </path>
                                            </svg>
                                        </span>
                                    </span>
                                </button> <button type="submit" className="navigation-bar-btn search-toggle js-search-toggle">
                                    <i className="mdicon mdicon-search" />
                                </button>
                            </div>
                        </div>{/* .navigation-bar__inner */}
                    </nav>{/* Navigation-bar */}
                </div>{/* Sticky header */}
                {/* Off-canvas menu */}
                <div id="atbs-offcanvas-primary" className="atbs-offcanvas js-atbs-offcanvas js-perfect-scrollbar">
                    <div className="atbs-offcanvas__section-wrap flex-box flex-space-120 scrollbar-hidden">
                        <div className="atbs-offcanvas__section-group scrollbar-hidden">
                            <div className="atbs-offcanvas__section atbs-offcanvas__title">
                                <h2 className="site-logo offcanvas-desktop-logo">
                                    <a href="https://atom.bk-ninja.com/technology">
                                        <span className="logo-wrapper"><img className="logo-light-mode" src={logo} alt="Logo" /><img className="logo-dark-mode" src={logo2} alt="Logo" /></span> </a>
                                </h2>{/* .site-logo */}
                                <ul className="social-list list-horizontal">
                                </ul>
                                <a href="#atbs-offcanvas-primary" className="atbs-offcanvas-close js-atbs-offcanvas-close" aria-label="Close">
                                    <span aria-hidden="true">✕</span>
                                </a>
                            </div>
                            <div className="atbs-offcanvas__section atbs-offcanvas__section-navigation">
                                <div id="offcanvas-menu-desktop" className="menu-main-menu-container">
                                    <ul id="menu-main-menu-3" className="navigation navigation--offcanvas">
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-763 current_page_item menu-item-860">
                                            <a href="https://atom.bk-ninja.com/technology/" aria-current="page">Home</a></li>
                                        <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-861 menu-item-cat-4">
                                            <a href="https://atom.bk-ninja.com/technology/category/laptop/">Laptop</a></li>
                                        <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-862 menu-item-cat-7">
                                            <a href="https://atom.bk-ninja.com/technology/category/laptop/fashion/">Fashion</a>
                                        </li>
                                        <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-863 menu-item-cat-6">
                                            <a href="https://atom.bk-ninja.com/technology/category/laptop/tips/">Tips</a></li>
                                        <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-864 menu-item-cat-2">
                                            <a href="https://atom.bk-ninja.com/technology/category/news/">News</a></li>
                                        <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-865 menu-item-cat-5">
                                            <a href="https://atom.bk-ninja.com/technology/category/review/">Review</a></li>
                                        <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-866 menu-item-cat-3">
                                            <a href="https://atom.bk-ninja.com/technology/category/build-pc/">Build PC</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="atbs-offcanvas__section-group scrollbar-hidden">
                            <div className="atbs-offcanvas__section">
                            </div>
                        </div>
                    </div>
                </div>{/* .atbs-canvas */}
                <div className="modal fade login-modal" id="login-modal" tabIndex={-1} role="dialog" aria-labelledby="login-modal-label">
                    <div className="modal-dialog">
                        <div className="modal-content login-signup-form">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"></span></button>
                                <div className="modal-title" id="login-modal-label">
                                    <ul className="nav nav-tabs js-login-form-tabs clearfix" role="tablist">
                                        <li role="presentation" className="active"><a href="#login-tab" aria-controls="login-tab" role="tab" data-toggle="tab">Log in</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="modal-body">
                                <div className="tab-content">
                                    <div role="tabpanel" className="tab-pane fade in active" id="login-tab">
                                        <div className="login-with-social">
                                        </div>
                                        <form name="lwa-form" className="bk-lwa-form" action="https://atom.bk-ninja.com/technology/wp-login.php" method="post">
                                            <div className="bk-login-status">
                                                <span className="lwa-status" />
                                            </div>
                                            <p className="lwa-username login-username">
                                                <label htmlFor="user_login_l">Username</label>
                                                <input type="text" name="log" id="user_login_l" className="input" defaultValue size={20} />
                                            </p>
                                            <p className="lwa-password login-password">
                                                <label htmlFor="user_pass">Password</label>
                                                <input type="password" name="pwd" id="user_pass" className="input" defaultValue size={20} />
                                            </p>
                                            <div className="lwa-submit login-submit">
                                                <div className="lwa-links">
                                                    <div className="login-remember"><label><input name="rememberme" type="checkbox" id="lwa_rememberme" defaultValue="forever" /> <span>Remember
                                                        Me</span></label></div>
                                                </div>
                                                <div className="lwa-submit-button login-submit">
                                                    <input id="wp-submit" className="btn btn-block btn-primary lwa-wp-submit" type="submit" name="wp-submit" defaultValue="Log In" tabIndex={100} />
                                                    <input type="hidden" name="lwa_profile_link" />
                                                    <input type="hidden" name="login-with-ajax" defaultValue="login" />
                                                    <input type="hidden" name="redirect_to" defaultValue="https://atom.bk-ninja.com/technology/" />
                                                </div>
                                            </div>
                                            <p className="login-lost-password">
                                                <a className="lwa-links-remember link link--darken" href="https://atom.bk-ninja.com/technology/wp-login.php?action=lostpassword" title="Password Lost and Found">Lost your password?</a>
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{/* Off-canvas menu */}
                <div id="atbs-offcanvas-mobile" className="atbs-offcanvas js-atbs-offcanvas js-perfect-scrollbar">
                    <div className="atbs-offcanvas__title">
                        <h2 className="site-logo offcanvas-mobile-logo">
                            <a href="https://atom.bk-ninja.com/technology">
                                <span className="logo-wrapper"><img className="logo-light-mode" src="assets/img/Group-18305.png" alt="Logo" /><img className="logo-dark-mode" src="assets/img/Group-18306.png" alt="Logo" /></span> </a>
                        </h2>{/* .site-logo */}
                        <ul className="social-list list-horizontal">
                        </ul>
                        <a href="#atbs-offcanvas-mobile" className="atbs-offcanvas-close js-atbs-offcanvas-close" aria-label="Close">
                            <span aria-hidden="true"></span>
                        </a>
                    </div>
                    <div className="atbs-offcanvas__section atbs-offcanvas__section-navigation">
                        <div id="offcanvas-menu-mobile" className="menu-main-menu-container">
                            <ul id="menu-main-menu-4" className="navigation navigation--offcanvas">
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-763 current_page_item menu-item-860">
                                    <a href="https://atom.bk-ninja.com/technology/" aria-current="page">Home</a></li>
                                <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-861 menu-item-cat-4">
                                    <a href="https://atom.bk-ninja.com/technology/category/laptop/">Laptop</a></li>
                                <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-862 menu-item-cat-7">
                                    <a href="https://atom.bk-ninja.com/technology/category/laptop/fashion/">Fashion</a></li>
                                <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-863 menu-item-cat-6">
                                    <a href="https://atom.bk-ninja.com/technology/category/laptop/tips/">Tips</a></li>
                                <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-864 menu-item-cat-2">
                                    <a href="https://atom.bk-ninja.com/technology/category/news/">News</a></li>
                                <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-865 menu-item-cat-5">
                                    <a href="https://atom.bk-ninja.com/technology/category/review/">Review</a></li>
                                <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-866 menu-item-cat-3">
                                    <a href="https://atom.bk-ninja.com/technology/category/build-pc/">Build PC</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="atbs-offcanvas__section visible-xs visible-sm">
                        <div className="text-center">
                            <a href="#login-modal" className="btn btn-default" data-toggle="modal" data-target="#login-modal"><i className="mdicon mdicon-person mdicon--first" /><span>Login / Sign up</span></a>
                        </div>
                    </div>
                </div>{/* Off-canvas menu */}
                {/* Subscribe modal */}
                <div className="modal fade subscribe-modal" id="subscribe-modal" tabIndex={-1} role="dialog" aria-labelledby="subscribe-modal-label">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"></span></button>
                            </div>
                            <div className="modal-body">
                                <div className="subscribe-form subscribe-form--horizontal text-center max-width-sm">
                                    {/* Mailchimp for WordPress v4.8.3 - https://wordpress.org/plugins/mailchimp-for-wp/ */}
                                    <form id="mc4wp-form-1" className="mc4wp-form mc4wp-form-624" method="post" data-id={624} data-name="Subscribe Form">
                                        <div className="mc4wp-form-fields">
                                            <h4>Join our newsletter!</h4>
                                            <p>Enter your email to receive our newsletter.</p>
                                            <p>
                                                <input type="email" name="EMAIL" placeholder="Your email address" required />
                                            </p>
                                            <p>
                                                <input type="submit" defaultValue="Subscribe" className="btn btn-primary" />
                                            </p>
                                            <small>Don't worry, we don't spam</small>
                                        </div><label style={{ display: 'none !important' }}>Leave this field empty if you're human:
                                            <input type="text" name="_mc4wp_honeypot" defaultValue tabIndex={-1} autoComplete="off" /></label><input type="hidden" name="_mc4wp_timestamp" defaultValue={1647841461} /><input type="hidden" name="_mc4wp_form_id" defaultValue={624} /><input type="hidden" name="_mc4wp_form_element_id" defaultValue="mc4wp-form-1" />
                                        <div className="mc4wp-response" />
                                    </form>{/* / Mailchimp for WordPress Plugin */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{/* Subscribe modal */}
                <div className="atbs-atoms-search-full-style-2" role="dialog">
                    <button type="button" id="atbs-atoms-search-close" aria-label="Close"><i className="atbs-atoms-icon-close" /></button>
                    <div className="atbs-atoms-search-full__wrap ajax-search is-in-navbar js-ajax-search is-active">
                        <div className="atbs-atoms-search-full__inner">
                            <div className="atbs-atoms-search-full__form">
                                <div className="container-sm">
                                    <form action="https://atom.bk-ninja.com/technology/" id="searchform" className="search-form" method="get">
                                        <div className="form-group">
                                            <input type="search" name="s" className="search-form__input" autoComplete="off" placeholder="Search ..." />
                                            <button type="submit" className="btn search-form__submit"><i className="atbs-atoms-icon-right-arrow" /></button>
                                        </div>
                                    </form>
                                    <div className="data-typing-loader">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={38} height={38} viewBox="0 0 38 38" stroke="#000">
                                            <g fill="none">
                                                <g transform="translate(1 1)" strokeWidth={2}>
                                                    <circle strokeOpacity=".5" cx={18} cy={18} r={18} />
                                                    <path d="M36 18c0-9.94-8.06-18-18-18">
                                                        <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite" />
                                                    </path>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                </div> {/* .container */}
                            </div>
                            <div className="atbs-atoms-search-full__results search-results">
                                <div className="container-sm">
                                    <div className="search-results__inner">
                                        <div className="search-results__content" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> {/* .atbs-atoms-search-full__wrap */}
                </div> {/* .atbs-atoms-search-popup */}
                {/* go top button */} <a href="#" className="atbs-go-top btn btn-default hidden-xs js-go-top-el"><i className="mdicon mdicon-arrow_upward" /></a>
                {/* .site-wrapper */}
            </div>
        </>
    )
}

export default Header