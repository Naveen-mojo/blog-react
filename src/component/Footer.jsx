import React from 'react'
import logo from '../img/Group-18305.png'
import logo2 from '../img/Group-18306.png'

function Footer() {
    return (
        <>
            <footer className="site-footer footer-2">
                <div className="site-footer__section">
                    <div className="container item-border-bottom">
                        <div className="site-footer-row flexbox-justify-space-between-center ">
                            <div className="site-logo footer-logo">
                                <a href="https://atom.bk-ninja.com/technology">
                                    <span className="logo-wrapper"><img className="logo-light-mode" src={logo} alt="Logo" width={310} /></span> </a>
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
                                            <a href="https://atom.bk-ninja.com/technology/" aria-current="page">Home</a>
                                        </li>
                                        <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-861 menu-item-cat-4">
                                            <a href="https://atom.bk-ninja.com/technology/category/laptop/">Laptop</a></li>
                                        <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-862 menu-item-cat-7">
                                            <a href="https://atom.bk-ninja.com/technology/category/laptop/fashion/">Fashion</a>
                                        </li>
                                        <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-863 menu-item-cat-6">
                                            <a href="https://atom.bk-ninja.com/technology/category/laptop/tips/">Tips</a>
                                        </li>
                                        <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-864 menu-item-cat-2">
                                            <a href="https://atom.bk-ninja.com/technology/category/news/">News</a></li>
                                        <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-865 menu-item-cat-5">
                                            <a href="https://atom.bk-ninja.com/technology/category/review/">Review</a></li>
                                        <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-866 menu-item-cat-3">
                                            <a href="https://atom.bk-ninja.com/technology/category/build-pc/">Build PC</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                            <div className="site-footer__section-right">
                                Atoms © 2021. Made with ☕ by <a href="https://themeforest.net/user/designuptodate/portfolio">DesignUTD</a> </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer