import React, { Component } from "react";
import SocialHeader from "../social/Header";
import "../../assets/css/profile.scss";

export default class Profilepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: "",
      userInfo: {},
      firstName: "",
      lastName: "",
      userName: "",
    };

    // const result = fetch(`http://localhost:8000/viewProfile?userId=5eda799e1074640854c85c1b`,{method:"GET"})
    // .then((result) => {
    //     let resultData = result.json();
    //     resultData.then((data) => {
    //         if(data.code == 200) {
    //             this.state.userInfo = data.data;
    //             this.state.firstName = data.data.firstName
    //         }
    //     })
    // })
    // .catch((err) => {
    //     console.log('err... ', err);
    // })
  }

  componentDidMount = async () => {
    console.log("asdas");
    const result = await fetch(
      `http://localhost:8000/viewProfile?userId=5eda799e1074640854c85c1b`
    );
    const resultData = result.json();

    resultData
      .then((data) => {
        console.log("data.. ", data.data);
        if (data.code == 200) {
          this.setState({ firstName: data.data.firstName });

          //   this.state.userInfo = data.data;
          //   this.state.firstName = data.data.firstName;
        }
      })
      .catch((err) => {
        console.log("err... ", err);
      });
  };

  onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.setState({ image: e.target.result });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  render() {
    return (
      <div>
        <SocialHeader />
        <div className="row" style={{ paddingTop: "20px", margin: "20px" }}>
          <div className="col-3">
            <div className="row">
              <div
                className="col-12"
                style={{ margin: "5px", width: "70px", height: "170px" }}
              >
                <img
                  id="target"
                  src={this.state.image}
                  style={{ width: "245px", height: "170px" }}
                />
              </div>
              <div className="col-12">
                <label className="btn btn-info custom-file-upload">
                  <input
                    type="file"
                    id="fileImage"
                    onChange={this.onImageChange}
                  />
                  Choose Profile photo
                </label>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="row ml-3">
              <div className="col-4">
                <p>
                  <b>First Name:</b>
                </p>
              </div>
              <div className="col-8">
                <p>
                  <b>{this.state.firstName}</b>
                </p>
              </div>
            </div>
            <div className="row ml-3">
              <div className="col-4">
                <p>
                  <b>Last Name:</b>
                </p>
              </div>
              <div className="col-8">
                <p>
                  <b></b>
                </p>
              </div>
            </div>
            <div className="row ml-3">
              <div className="col-4">
                <p>
                  <b>Username:</b>
                </p>
              </div>
              <div className="col-8">
                <p>
                  <b></b>
                </p>
              </div>
            </div>
            <div className="row ml-3">
              <div className="col-4">
                <p>
                  <b>Password:</b>
                </p>
              </div>
              <div className="col-8">
                <p>
                  <b>*****</b>
                </p>
              </div>
            </div>
            <div className="row ml-3">
              <div className="col-4">
                <p>
                  <b>Reset Password:</b>
                </p>
              </div>
              <div className="col-8">
                <p>
                  <b></b>
                </p>
              </div>
            </div>
            <div className="row ml-3">
              <div className="col-4">
                <p>
                  <b>Trading Account:</b>
                </p>
              </div>
              <div className="col-8">
                <p>
                  <b>Merrill Edge</b>
                </p>
              </div>
            </div>
            <div className="row ml-3">
              <div className="col-4">
                <p>
                  <b>Add trading account</b>
                </p>
              </div>
              <div className="col-8">
                <p>
                  <b></b>
                </p>
              </div>
            </div>
            <div className="row ml-3">
              <div className="col-5">
                <p>
                  <b>Automatic data encryption</b>
                </p>
              </div>
              <div className="col-7">
                <p>
                  <b>
                    <i className="fa fa-lock" aria-hidden="true"></i>
                  </b>
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <ul style={{ listStyle: "none", margin: "0px", padding: "0px" }}>
              <li>
                <p style={{ cursor: "pointer" }}>Connect/Connected</p>
              </li>
              <li>
                <p style={{ cursor: "pointer" }}>View Connections</p>
              </li>
              <li>
                <p style={{ cursor: "pointer" }}>Recommend a trade</p>
              </li>
              <li>
                <p style={{ cursor: "pointer" }}>Gift Share(s)</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
