import React, { Component } from "react";
import Slider from "./Slider";
// import Header from "./Header";
// import Footer from "./Footer";
// import Menu from "./Menu";
// import Content from "./Content";
import { Link, NavLink, withRouter } from "react-router-dom";

class Navbar extends Component {
  // constructor(props) {
  //   super(props);
  //   this.getMenuInResponsiveView = this.getMenuInResponsiveView.bind(this);
  // }

  getMenuInResponsiveView() {
    const script = document.createElement("script");

    script.src = `./assets/js/main.js`;
    script.async = true;

    document.body.appendChild(script);
  }

  componentDidMount() {
    this.getMenuInResponsiveView();
  }

  render() {
    return (
      <div>
        {/* ======= Header ======= */}
        <header id="header" className="fixed-top">
          <div className="container d-flex align-items-center">
            <h1 className="logo mr-auto">
              <a href="index.html">Multi</a>
            </h1>
            {/* Uncomment below if you prefer to use an image logo */}
            {/* <a href="index.html" class="logo mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
            <nav className="nav-menu d-none d-lg-block">
              <ul>
                <li className="active">
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#team">Team</a>
                </li>
                <li className="drop-down">
                  <a href>Drop Down</a>
                  <ul>
                    <li>
                      <a href="#">Drop Down 1</a>
                    </li>
                    <li className="drop-down">
                      <a href="#">Deep Drop Down</a>
                      <ul>
                        <li>
                          <a href="#">Deep Drop Down 1</a>
                        </li>
                        <li>
                          <a href="#">Deep Drop Down 2</a>
                        </li>
                        <li>
                          <a href="#">Deep Drop Down 3</a>
                        </li>
                        <li>
                          <a href="#">Deep Drop Down 4</a>
                        </li>
                        <li>
                          <a href="#">Deep Drop Down 5</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Drop Down 2</a>
                    </li>
                    <li>
                      <a href="#">Drop Down 3</a>
                    </li>
                    <li>
                      <a href="#">Drop Down 4</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
            {/* .nav-menu */}
            <a href="#about" className="get-started-btn">
              Get Started
            </a>
          </div>
        </header>
        {/* End Header */}
      </div>
    );
  }
}

// function Navbar(props) {
//   console.log(props);
//   return (

//   );
// }

export default withRouter(Navbar);
