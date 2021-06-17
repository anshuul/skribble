import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { signUpUser } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";
import "./SignUp.css";

class SignUp extends Component {
  state = {};

  handleSubmit = (data) => {
    this.props.signup(data);
  };
  render() {
    if (this.props.auth.uid) {
      return <Redirect to="/notes" />;
    }
    return (
      <div className="container sign-up-container">
        <h1 className="sign-up-title center-align">Sign Up.</h1>
        <p className="sign-up-description center-align">
          Enter your login details below to sign up.
        </p>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={Yup.object({
            name: Yup.string()
              .min(5, "Please enter your full name.")
              .required("Your name is required"),
            email: Yup.string()
              .email("The email address that you have entered is invalid.")
              .min(3, "The email must be atleast 3 characters long")
              .required("An email is required"),
            password: Yup.string()
              .min(7, "The password must be atleast 7 characters long.")
              .required("A password is required"),
          })}
          onSubmit={this.handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form className="sign-up-form-container" onSubmit={handleSubmit}>
              <div className="input-field">
                <i className="material-icons prefix">person</i>
                <input
                  id="name"
                  type="text"
                  className={
                    errors.name && touched.name
                      ? "invalid"
                      : touched.name && !errors.name
                      ? "valid"
                      : ""
                  }
                  value={values.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <label htmlFor="name">Full Name (Example: James Bond)</label>
                <span className="helper-text" data-error={errors.name}></span>
              </div>
              <div className="input-field">
                <i className="material-icons prefix">email</i>
                <input
                  id="email"
                  type="text"
                  className={
                    errors.email && touched.email
                      ? "invalid"
                      : touched.email && !errors.email
                      ? "valid"
                      : ""
                  }
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <label htmlFor="email">Email</label>
                <span className="helper-text" data-error={errors.email}></span>
              </div>
              <div className="input-field">
                <i className="material-icons prefix">lock</i>
                <input
                  id="password"
                  type="password"
                  className={
                    errors.password && touched.password
                      ? "invalid"
                      : !errors.password && touched.password
                      ? "valid"
                      : ""
                  }
                  value={values.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <label htmlFor="password">Password</label>
                <span
                  className="helper-text"
                  data-error={errors.password}
                ></span>
              </div>
              {/*               <div className="row center-align">
                {this.props.authError ? (
                  <p className="red-text">{this.props.authError.message}</p>
                ) : null}
              </div> */}

              {/*              <div className="row center-align">
                {this.props.googleAuthError ? (
                  <p className="red-text">
                    {this.props.googleAuthError.message}
                  </p>
                ) : null}
              </div> */}

              <div className="row center-align">
                <button
                  className="btn btn-large z-depth-2 waves-effect indigo darken-1 waves-light"
                  type="submit"
                  name="action"
                >
                  Sign Up
                  <i className="material-icons right">person_add</i>
                </button>
              </div>
            </form>
          )}
        </Formik>
        {/*         {this.props.authLoading ? (
          <div className="loader">Loading...</div>
        ) : (
          <span>
            <div className="row center-align sign-up-or-row">
              <h5 className="sign-up-or">OR</h5>
            </div>
            <div className="row center-align google-login-row">
              <GoogleLoginButton
                align="center"
                style={{ background: "#3949ab" }}
                activeStyle={{ background: "#283593" }}
                onClick={this.googleLogin}
              />
            </div>
          </span>
        )} */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (data) => dispatch(signUpUser(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
