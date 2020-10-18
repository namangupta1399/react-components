import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./navbar.css";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return {
      background: "none",
      color: "#fff",
      border: "2px solid #fff",
    };
  }
};

export class Navbar extends Component {
  componentDidMount() {
    const toggleBtn = document.querySelector(".navbar-toggler");
    toggleBtn.addEventListener("click", function () {
      if (document.querySelector(".nav-items").style.display === "none") {
        document.querySelector(".nav-items").style.display = "flex";
      } else if (
        document.querySelector(".nav-items").style.display === "flex"
      ) {
        document.querySelector(".nav-items").style.display = "none";
      } else {
        document.querySelector(".nav-items").style.display = "flex";
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth >= 800) {
        document.querySelector(".nav-items").style.display = "flex";
      }
    });
  }
  

  render() {
    const {history} = this.props
    return (
      <div className="navbar clearfix">
        <div className="clearfix">
          <Link to="/" className="navbar-brand">
            Company Logo
          </Link>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
            className="navbar-toggler"
            alt=""
          />
        </div>
        <ul className="nav-items">
          <Link
            style={currentTab(history, "/")}
            className="nav-link"
            to="/"
          >
            <li>Home</li>
          </Link>
          <Link
            style={currentTab(history, "/about")}
            className="nav-link"
            to="/about"
          >
            <li>About Us</li>
          </Link>
          <Link
            style={currentTab(history, "/resources")}
            className="nav-link"
            to="/resources"
          >
            <li>Resources</li>
          </Link>
          <Link
            style={currentTab(history, "/career")}
            className="nav-link"
            to="/career"
          >
            <li>Career</li>
          </Link>
          <Link
            style={currentTab(history, "/team")}
            className="nav-link"
            to="/team"
          >
            <li>Team</li>
          </Link>
          <Link
            style={currentTab(history, "/contact")}
            className="nav-link"
            to="/contact"
          >
            <li>Contact Us</li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default withRouter(Navbar);
