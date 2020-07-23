import React, {
  useState,
  useReducer,
  useContext,
  createContext,
  useEffect,
} from "react";
import SocialHeader from "../social/Header";
import { useSelector, useDispatch } from "react-redux";
import { getUserProfileInfo, onImageChange } from "../../Actions/userAction";

import "../../assets/css/profile.scss";

function Profilepage(props) {
  const dispatch = useDispatch();

  const stateData = useSelector((state) => {
    return state.user;
  });

  // console.log(stateData.userProfileInfo);

  useEffect(() => {
    dispatch(getUserProfileInfo());
  }, []);

  return (
    <div>
      <SocialHeader />
      <div className="row" style={{ paddingTop: "20px", margin: "20px" }}>
        <div className="col-3">
          <div className="row">
            <div
              className="col-12"
              style={{ border:'dashed 1px black'}}
            >
              <img
                id="target"
                src={
                  stateData.image
                    ? `${stateData.image}`
                    : `${stateData.userProfileInfo.profilePic}`
                }
                style={{ maxWidth: "100%", height: "auto" }}
                className="img-fluid img-thumbnail"
              />
            </div>
            <div className="col-12">
              <label className="btn btn-info custom-file-upload">
                <input
                  type="file"
                  id="fileImage"
                  onChange={(e) => {
                    dispatch(onImageChange(e));
                  }}
                />
                Choose Profile photo
              </label>
            </div>
          </div>
        </div>
        <div className="col-6">
            <div className="form-group row ml-3">
                <label className="col-sm-4 col-form-label">First Name:</label>
                <div className="col-sm-8">
                    <p><b>{stateData.userProfileInfo.firstName}</b></p>
                </div>
            </div>
            <div className="form-group row ml-3">
                <label className="col-sm-4 col-form-label">Last Name:</label>
                <div className="col-sm-8">
                    <p><b>{stateData.userProfileInfo.lastName}</b></p>
                </div>
            </div>
            <div className="form-group row ml-3">
                <label className="col-sm-4 col-form-label">Username:</label>
                <div className="col-sm-8">
                    <p><b>{stateData.userProfileInfo.userName}</b></p>
                </div>
            </div>
            <div className="form-group row ml-3">
                <label className="col-sm-4 col-form-label">Password:</label>
                <div className="col-sm-8">
                    <p><b>*****</b></p>
                </div>
            </div>
            <div className="form-group row ml-3">
                <label className="col-sm-4 col-form-label">Reset Password:</label>
                <div className="col-sm-8">
                    <p><b></b></p>
                </div>
            </div>
            <div className="form-group row ml-3">
                <label className="col-sm-4 col-form-label">Trading Account:</label>
                <div className="col-sm-8">
                    <p><b>{stateData.userProfileInfo.firstName + ' ' + stateData.userProfileInfo.lastName}</b></p>
                </div>
            </div>
            <div className="form-group row ml-3">
                <label className="col-sm-4 col-form-label" style={{ cursor: 'pointer'}} onClick={() => { props.history.push('/addAccount')}}>Add trading account</label>
                <div className="col-sm-8">
                    <p><b></b></p>
                </div>
            </div>
            <div className="form-group row ml-3">
                <label className="col-sm-4 col-form-label">Automatic data encryption:</label>
                <div className="col-sm-8">
                    <p><b><i className="fa fa-lock" aria-hidden="true"></i></b></p>
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

export default Profilepage;
