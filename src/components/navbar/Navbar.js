import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SignedInDesktopLinks from "./SignedInLinks/SignedInDesktopLinks";
import SignedInMobileLinks from "./SignedInLinks/SignedInMobileLinks";
import SignedOutDesktopLinks from "./SignedOutLinks/SignedOutDesktopLinks";
import SignedOutMobileLinks from "./SignedOutLinks/SignedOutMobileLinks";
import { logoutUser } from "../../store/actions/authActions";
import "./Navbar.css";

const M = require("materialize-css");

const Navbar = (props) => {
  useEffect(() => {
    var elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems);
  });
  const { auth, profile } = props;
  console.log(props);
  const desktopLinks = props.auth.uid ? (
    <SignedInDesktopLinks profile={props.profile} logout={props.logout} />
  ) : (
    <SignedOutDesktopLinks />
  );

  const mobileLinks = props.auth.uid ? (
    <SignedInMobileLinks profile={props.profile} logout={props.logout} />
  ) : (
    <SignedOutMobileLinks />
  );
  return (
    <div>
      <nav className="nav-wrapper indigo darken-3">
        <div className="container">
          <Link to="/" className="brand-logo custom-title">
            Skribble
          </Link>
          <a
            href="#"
            data-target="mobile-demo"
            className="sidenav-trigger custom-sidenav"
          >
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">{desktopLinks}</ul>
        </div>
      </nav>
      <ul className="sidenav sidenav-close" id="mobile-demo">
        {mobileLinks}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logoutUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
