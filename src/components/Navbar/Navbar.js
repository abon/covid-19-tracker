import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <Link className="navbar-logo" to="/data">
          {" "}
          GoC<i id="icon" className="fas fa-virus "></i>
          rona
        </Link>

        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/data" className="nav-links">
              Data
            </Link>
          </li>
          <li>
            <Link to="/map" className="nav-links">
              Map
            </Link>
          </li>
          <li>
            <Link to="/wiki" className="nav-links">
              Wiki
            </Link>
          </li>
          <li>
            <Link to="/vaccine" className="nav-links">
              Vaccine
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-links">
              About
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
