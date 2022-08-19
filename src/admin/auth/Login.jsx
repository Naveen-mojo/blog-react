import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const { loginUser, error, loadingbutton } = useContext(AuthContext);

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
                        <a href="#" title="ThemeMakker">
                          <i className="zmdi zmdi-globe" />
                        </a>
                      </li>
                      <li>
                        <a href="#" title="Themeforest">
                          <i className="zmdi zmdi-shield-check" />
                        </a>
                      </li>
                      <li>
                        <a href="#" title="LinkedIn">
                          <i className="zmdi zmdi-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="#" title="Facebook">
                          <i className="zmdi zmdi-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#" title="Twitter">
                          <i className="zmdi zmdi-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#" title="Google plus">
                          <i className="zmdi zmdi-google-plus" />
                        </a>
                      </li>
                      <li>
                        <a href="#" title="Behance">
                          <i className="zmdi zmdi-behance" />
                        </a>
                      </li>
                    </ul>
                    <hr />
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <Link to="/about-page" target="_blank">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          Services
                        </a>
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
                  <form className="form" onSubmit={loginUser}>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        name="username"
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
                        name="password"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="zmdi zmdi-lock" />
                        </span>
                      </div>
                    </div>
                    <div className="footer">
                      <button
                        type="submit"
                        className="btn btn-primary btn-round btn-block"
                      >
                        SIGN IN
                      </button>
                    </div>
                  </form>
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
