import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/Group-18305.png'

function Footer(props) {

    const termData = props.term
    const hostname = window.location.host
    const year = new Date().getFullYear()

    if (props.siteLogo === null) {
        return (
            <>
                {props.footerAds}
                <footer className="site-footer footer-2">
                    <div className="site-footer__section">
                        <div className="container item-border-bottom">
                            <div className="site-footer-row flexbox-justify-space-between-center ">
                                <div className="site-logo footer-logo">
                                    <a href="/">
                                        <span className="logo-wrapper">
                                            <h3>Loading...</h3>
                                            {/* <img className="logo-light-mode" src={`${props.siteLogo}` ? `${props.siteLogo}` : `${props.siteTitle}`} alt={`${props.siteTitle}`} width={310} /> */}
                                        </span> </a>
                                </div>{/* .site-logo */}
                                <ul className="footer-social social-list social-list--lg list-horizontal list-right">
                                    <li><a href="#" target="_blank"><i className="mdicon mdicon-facebook" /></a></li>
                                    <li><a href="#" target="_blank"><i className="mdicon mdicon-twitter" /></a></li>
                                    <li><a href="#" target="_blank"><i className="mdicon mdicon-instagram" /></a></li>
                                </ul>
                            </div>
                            <div className="site-footer-row flexbox-justify-space-between-center">
                                <nav className="footer-menu ">
                                    <div className="menu-main-menu-container">
                                        <ul id="menu-main-menu-1" className="navigation navigation--footer navigation--inline">
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-763 current_page_item menu-item-860">
                                                <Link to="/" aria-current="page">Home</Link>
                                            </li>
                                            {
                                                termData.map((curValue) => {
                                                    return (
                                                        <li key={curValue.TermId} className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-763 current_page_item menu-item-860">
                                                            <Link to={`category/${curValue.TermSlug}`} aria-current="page">{curValue.TermName}</Link>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </nav>
                                <div className="site-footer__section-right">
                                    {hostname} © {year}. </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        )

    } else {
        return (
            <>
                {props.footerAds}
                <footer className="site-footer footer-2">
                    <div className="site-footer__section">
                        <div className="container item-border-bottom">
                            <div className="site-footer-row flexbox-justify-space-between-center ">
                                <div className="site-logo footer-logo">
                                    <a href="/">
                                        <span className="logo-wrapper">
                                            <img className="logo-light-mode" src={`${props.siteLogo}` ? `${props.siteLogo}` : `${props.siteTitle}`} alt={`${props.siteTitle}`} width={310} /></span> </a>
                                </div>{/* .site-logo */}
                                <ul className="footer-social social-list social-list--lg list-horizontal list-right">
                                    <li><a href="#" target="_blank"><i className="mdicon mdicon-facebook" /></a></li>
                                    <li><a href="#" target="_blank"><i className="mdicon mdicon-twitter" /></a></li>
                                    <li><a href="#" target="_blank"><i className="mdicon mdicon-instagram" /></a></li>
                                </ul>
                            </div>
                            <div className="site-footer-row flexbox-justify-space-between-center">
                                <nav className="footer-menu ">
                                    <div className="menu-main-menu-container">
                                        <ul id="menu-main-menu-1" className="navigation navigation--footer navigation--inline">
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-763 current_page_item menu-item-860">
                                                <Link to="/" aria-current="page">Home</Link>
                                            </li>
                                            {
                                                termData.map((curValue) => {
                                                    return (
                                                        <li key={curValue.TermId} className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-763 current_page_item menu-item-860">
                                                            <Link to={`category/${curValue.TermSlug}`} aria-current="page">{curValue.TermName}</Link>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </nav>
                                <div className="site-footer__section-right">
                                    {hostname} © {year}. </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        )

    }
}

export default Footer