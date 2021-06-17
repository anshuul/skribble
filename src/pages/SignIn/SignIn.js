import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signInUser } from "../../store/actions/authActions";
import "./SignIn.css";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (data) => {
    this.props.signIn(data);
  };

  render() {
    if (this.props.auth.uid) {
      return <Redirect to="/notes" />;
    }
    return (
      <div className="container sign-in-container">
        <h1 className="sign-in-title center-align">Sign In.</h1>
        <p className="sign-in-description center-align">
          Enter your login details below to sign in.
        </p>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={Yup.object({
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
            <form className="sign-in-form-container" onSubmit={handleSubmit}>
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
              <div className="row center-align">
                {this.props.authError ? (
                  <p className="red-text">{this.props.authError}</p>
                ) : null}
              </div>
              {/*               <div className="row center-align">
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
                  Sign In
                  <i className="material-icons right">login</i>
                </button>
              </div>
            </form>
          )}
        </Formik>
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
    signIn: (data) => dispatch(signInUser(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
