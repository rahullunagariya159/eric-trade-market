import React, { Component } from "react";
import "../../assets/css/socialHeader.scss";
import { Link } from "react-router-dom";
import SearchPage from "./searchResult";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchItem: "",
      searchResultData: [],
    };
  }

  searchData = async (event) => {
    this.setState({ searchItem: event.target.value });

    const bodyData = { searchData: event.target.value };
    const result = await fetch("http://localhost:8000/searchUsers", {
      method: "POST",
      body: JSON.stringify(bodyData),
      headers: { "Content-Type": "application/json" },
    });

    if (result) {
      let resultData = await result.json();
      // if(resultData) {
      //   resultData.then((response) => {
      //     if(response.code == 200) {
      //       this.state.searchResultData = response.data;
      //       console.log('this.state.searchResultData', this.state.searchResultData);
      //     }
      //   })
      //   .catch((err) => {
      //     console.log('error... ',err);
      //   })
      // }
    } else {
      console.log("no result found");
    }
  };

  render() {
    console.log("state... ", this.state);
    return (
      <div>
        {/* Navbar */}
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
          {/* Left navbar links */}
          <ul className="navbar-nav">
            {/* <li className="nav-item">
              <a
                className="nav-link"
                data-widget="pushmenu"
                href="fake_url"
                role="button"
              >
                <i className="fas fa-bars" />
              </a>
            </li> */}
            {/* <li className="nav-item d-none d-sm-inline-block">
              <a href="index3.html" className="nav-link">
                Home
              </a>
            </li> */}
            {/* <li className="nav-item d-none d-sm-inline-block">
              <a href="fake_url" className="nav-link">
                Contact
              </a>
            </li> */}
          </ul>
          {/* SEARCH FORM */}
          <form className="form-inline ml-3">
            <div className="input-group input-group-sm">
              <input
                className="form-control form-control-navbar socialSearch"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={this.searchData}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-navbar btnSocialSearch"
                  type="submit"
                >
                  <i className="fas fa-search" />
                </button>
              </div>
            </div>
            {this.state.searchItem != "" ? (
              <div
                id="search"
                className="ml-5 upperDiv"
                style={{ width: "400px" }}
              >
                <SearchPage search={this.state.searchResultData} />
              </div>
            ) : (
              ""
            )}
          </form>

          <div className="brand" style={{ margin: 0, float: "none" }} href="#">
            {/* <img src="http://chunlungsportclub.com/wp-content/themes/chunlungsportclub/images/logo.png" /> */}
            <div className="container">
              <div className="row">
                <div className="social-arrow-left"></div>

                <a>
                  <label className="socialLogo">Ticker</label>
                </a>

                <div className="social-arrow-right"></div>
              </div>
            </div>
          </div>
          {/* Right navbar links */}
          <ul className="navbar-nav ml-auto">
            {/*User drop down menu*/}

            <li className="nav-item dropdown user-menu">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
              >
                <img
                  src="../../dist/img/user2-160x160.jpg"
                  className="user-image img-circle elevation-2"
                  alt="User Image"
                />
                {/* <span className="d-none d-md-inline">Alexander Pierce</span> */}
              </a>
              <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                {/* User image */}
                <li className="user-header bg-primary">
                  <img
                    src="../../dist/img/user2-160x160.jpg"
                    className="img-circle elevation-2"
                    alt="User Image"
                  />
                  <p>
                    Alexander Pierce - Web Developer
                    <small>Member since Nov. 2012</small>
                  </p>
                </li>
                {/* Menu Body */}
                <li className="user-body">
                  <div className="row">
                    <div className="col-4 text-center">
                      <a href="#">Followers</a>
                    </div>
                    <div className="col-4 text-center">
                      <a href="#">Sales</a>
                    </div>
                    <div className="col-4 text-center">
                      <a href="#">Friends</a>
                    </div>
                  </div>
                  {/* /.row */}
                </li>
                {/* Menu Footer*/}
                <li className="user-footer">
                  {/* <a href="#" className="btn btn-default btn-flat">
                    Profile
                  </a> */}
                  <Link to="/profile" className="btn btn-default btn-flat">
                    Profile
                  </Link>
                  <a href="#" className="btn btn-default btn-flat float-right">
                    Sign out
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        {/* /.navbar */}

        {/* {
          this.state.searchItem != '' ? <div className="ml-5" style={{ width:'180px',zIndex:'10'}}>< SearchPage /></div> : ''
        } */}
      </div>
    );
  }
}
