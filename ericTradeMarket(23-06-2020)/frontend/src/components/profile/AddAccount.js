import React, { useState } from 'react';
import SocialHeader from "../social/Header";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../../Actions/userAction";
import swal from "sweetalert";

const AddAccount = (props) => {
    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [password, setPassword] = useState('');
    const [profilePic, setProfilePic] = useState('');

    const onImageChange =  (event) => {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = async (e) => {
                let image = await reader.result;
                setProfilePic(image);
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }

    const addUserInfo = (event) => {
        event.preventDefault();

        const data = { firstName, lastName, userName, password, contactNo, profilePic };
        dispatch(addUser(data));
        props.history.push('/socialpage');
    }

    return(
        <div>
            <SocialHeader />
            <form onSubmit={addUserInfo}>
            <div className="row" style={{ paddingTop: "20px", margin: "20px" }}>
                <div className="col-3">
                    <div className="row">
                        <div className="col-12" style={{ border:'dashed 1px black'}}>
                            <img id="target" src={profilePic} style={{ maxWidth: "100%", height: "auto" }}
                                className="img-fluid img-thumbnail" />                
                        </div>
                        <div className="col-12">
                            <label className="btn btn-info custom-file-upload mt-3">
                                <input type="file" id="fileImage" onChange={onImageChange} />
                                Choose Profile photo
                            </label>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="row text-center ml-3 mb-3">
                        <h2><b>Add Trading Account</b></h2>
                    </div>
                    
                        <div className="form-group row">
                            <label htmlFor="inputFirstName" className="col-sm-4 col-form-label">First Name</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" id="inputFirstName" placeholder="First Name" onChange={e => setFirstName(e.target.value)} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputLastName" className="col-sm-4 col-form-label">Last Name</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" id="inputLastName" placeholder="Last Name" onChange={e => setLastName(e.target.value)} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputUserName" className="col-sm-4 col-form-label">User Name</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" id="inputUserName" placeholder="User Name" onChange={e => setUserName(e.target.value)} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputPassword" className="col-sm-4 col-form-label">Password</label>
                            <div className="col-sm-8">
                                <input type="password" className="form-control" id="inputPassword" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputContactNo" className="col-sm-4 col-form-label">Contact Number</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" id="inputContactNo" placeholder="Contact Number" onChange={e => setContactNo(e.target.value)} />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-info">Add User</button>
                   
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
            </form>
        </div>
    )
}

export default AddAccount;