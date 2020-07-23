import React, { useState, useEffect } from "react";
import login from "../assets/css/login.css"

const validEmailRegex = 
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      // if we have an error string set valid to false
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
}

const Register1 = (props) => {

    // useEffect((evt) => {
    //     handleSubmit(evt);
    // }, [])

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [contactNo, setContactNo] = useState("");

    const handleSubmit = async (evt) => {
        evt.preventDefault();

        const data = { firstName, lastName, email, password, contactNo };
        const resultData = await fetch("http://localhost:8000/register", {
            method: "post",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" }
        });
        console.log('result... ', resultData);
        if(resultData.status == 200) {
            props.history.push('/home');
        }
    }

  return (
    <div>
        <div style={{ color:' #000', overflowX:'hidden', height:'100%', backgroundColor:'#B0BEC5', backgroundRepeat: 'no-repeat'}}>
            <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
                <div className="card border-0" style={{ boxShadow: '0px 4px 8px 0px #757575', borderRadius: '0px'}}>
                    <form onSubmit={handleSubmit}>
                        <div className="row d-flex">
                            <div className="col-lg-6">
                                <div className="card1 pb-5">
                                    <div className="row"> 
                                        <div style={{ width:'200px', height: '100px', marginTop: '20px', marginLeft:'35px'}}>
                                            {/* logo */}
                                        </div>
                                        {/* <img src="https://i.imgur.com/CXQmsmF.png" style={{ width:'200px', height: '100px', marginTop: '20px', marginLeft:'35px'}} />  */}
                                    </div>
                                    <div className="row px-3 justify-content-center mt-4 mb-5" style={{ borderRight:'1px solid #EEEEEE'}}> 
                                        <img src="https://trading-education.com/lp/10-key-steps-to-learn-forex-trading/images/illustration.png" style={{ width: '460px', height: '380px' }} /> 
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card border-0 px-4 py-5" style={{ margin: '45px 40px'}}>
                                    <div className="row mb-4 px-3">
                                        <h4 className="mb-0 mr-4 mt-2">Sign up with</h4>
                                        <div className="facebook text-center mr-3">
                                            <div className="fab fa-facebook"></div>
                                        </div>
                                        {/* <div className="twitter text-center mr-3">
                                            <div className="fab fa-instagram"></div>
                                        </div> */}
                                        {/* <div className="linkedin text-center mr-3">
                                            <div className="fa fa-linkedin"></div>
                                        </div> */}
                                    </div>
                                    <div className="row px-3 mb-4">
                                        <div style={{height:'1px', width:'45%', backgroundColor: '#E0E0E0', marginTop: '10px'}}></div> 
                                            <small className="text-center" style={{width: "10%", fontWeight: 'bold'}} >Or</small>
                                        <div style={{height:'1px', width:'45%', backgroundColor: '#E0E0E0', marginTop: '10px'}}></div>
                                    </div>
                                    <div className="row px-3"> 
                                        <label className="mb-1">
                                            <h6 className="mb-0 text-sm">First Name</h6>
                                        </label> 
                                        <input className="mb-4" required type="text" name="firstName" placeholder="Enter your first name" onChange={e => setFirstName(e.target.value)} /> 
                                    </div>
                                    <div className="row px-3"> 
                                        <label className="mb-1">
                                            <h6 className="mb-0 text-sm">Last Name</h6>
                                        </label> 
                                        <input className="mb-4" required type="text" name="lastName" placeholder="Enter your last name" onChange={e => setLastName(e.target.value)} /> 
                                    </div>
                                    <div className="row px-3"> 
                                        <label className="mb-1">
                                            <h6 className="mb-0 text-sm">Contact Number</h6>
                                        </label> 
                                        <input className="mb-4" required type="text" name="contactNo" placeholder="Enter your contact number" onChange={e => setContactNo(e.target.value)} /> 
                                    </div>
                                    <div className="row px-3"> 
                                        <label className="mb-1">
                                            <h6 className="mb-0 text-sm">Email Address</h6>
                                        </label> 
                                        <input className="mb-4" required type="text" name="email" placeholder="Enter a valid email address" onChange={e => setEmail(e.target.value)} /> 
                                    </div>
                                    <div className="row px-3 mb-4"> 
                                        <label className="mb-1">
                                            <h6 className="mb-0 text-sm">Password</h6>
                                        </label> 
                                        <input type="password" required name="password" placeholder="Enter password" onChange={e=> setPassword(e.target.value)} /> 
                                    </div>
                                    <div className="row mb-3 px-3"> <button type="submit" className="btn btn-blue text-center">Register</button> </div>
                                    <div className="row mb-4 px-3"> <small className="font-weight-bold">Already have an account? <a className="text-danger ">Login</a></small> </div>
                                </div>
                            </div>
                        </div>
                    </form>

                    {/* <div className="bg-blue py-4">
                        <div className="row px-3"> <small className="ml-4 ml-sm-5 mb-2">Copyright &copy; 2019. All rights reserved.</small>
                            <div className="social-contact ml-4 ml-sm-auto"> <span className="fab fa-facebook mr-4 text-sm"></span> </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>

    </div>
  );
};

export default Register;
