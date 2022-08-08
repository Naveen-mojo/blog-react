import React from "react";

function Login() {
  return (
    <>
      <div className="authentication">
        <div className="container">
          <div className="col-md-12 content-center">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="company_detail">
                  <h4 className="logo">
                    <img src="assets/images/logo.svg" alt="" /> Blog
                  </h4>
                  <h3>
                    The ultimate <strong>Blog</strong> Admin Dashboard
                  </h3>
                  <p>
                    Blog is fully based on HTML5 + CSS3 Standards. Is fully
                    responsive and clean on every device and every browser
                  </p>
                  <div className="footer">
                    <ul className="social_link list-unstyled">
                      <li>
                        <a href="https://thememakker.com/" title="ThemeMakker">
                          <i className="zmdi zmdi-globe" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://themeforest.net/user/thememakker"
                          title="Themeforest"
                        >
                          <i className="zmdi zmdi-shield-check" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/company/thememakker/"
                          title="LinkedIn"
                        >
                          <i className="zmdi zmdi-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.facebook.com/thememakkerteam"
                          title="Facebook"
                        >
                          <i className="zmdi zmdi-facebook" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/thememakker"
                          title="Twitter"
                        >
                          <i className="zmdi zmdi-twitter" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://plus.google.com/+thememakker"
                          title="Google plus"
                        >
                          <i className="zmdi zmdi-google-plus" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.behance.net/thememakker"
                          title="Behance"
                        >
                          <i className="zmdi zmdi-behance" />
                        </a>
                      </li>
                    </ul>
                    <hr />
                    <ul>
                      <li>
                        <a
                          href="http://thememakker.com/contact/"
                          target="_blank"
                        >
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a href="http://thememakker.com/about/" target="_blank">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a
                          href="http://thememakker.com/services/"
                          target="_blank"
                        >
                          Services
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">FAQ</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 offset-lg-1">
                <div className="card-plain">
                  <div className="header">
                    <h5>Log in</h5>
                  </div>
                  <form className="form">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="User Name"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="zmdi zmdi-account-circle" />
                        </span>
                      </div>
                    </div>
                    <div className="input-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="zmdi zmdi-lock" />
                        </span>
                      </div>
                    </div>
                  </form>
                  <div className="footer">
                    <a
                      href="index.html"
                      className="btn btn-primary btn-round btn-block"
                    >
                      SIGN IN
                    </a>
                    <a
                      href="sign-up.html"
                      className="btn btn-primary btn-simple btn-round btn-block"
                    >
                      SIGN UP
                    </a>
                  </div>
                  <a href="forgot-password.html" className="link">
                    Forgot Password?
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
