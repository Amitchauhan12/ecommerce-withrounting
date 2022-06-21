import React, { useState } from "react";
import { API_URL } from "../../../constants";
import ForgotPassword from "../../ForgotPassword";
import RegistrationComponent from "../../Registration";
import './index.css';

function SignInScreen() {
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMsg, setErrorMsg] = useState("")
  const [showForgotPass, setShowForgotPass] = useState(false)
  const [showRegistration, setRegistration] = useState(false);

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    setShowForgotPass(false)

    setErrorMsg("")
    console.log(email,password);
    var apiHeaders = new Headers();
    apiHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      emailId: email,
      password: password,
    });

    var requestOptions = {
      method: "POST",
      headers: apiHeaders,
      body: raw
    };

    const response = await fetch(API_URL+"/auth/login", requestOptions)
      .then((response) => response.json())
      .then((result) => result)
      .catch((error) => console.log("error", error));

    if(response?.status ==="success"){
      localStorage.setItem("token",response.token)
      alert("login successfull.")
    }
    else if(response?.error?.message) setErrorMsg(response?.error?.message)
    else setErrorMsg("Something Went Wrong")
  };

  return (
    <>
      <div class="container">
        <div class="card login-form">
          <div class="card-body">
            <h3 class="card-title text-center">Sign in to continue</h3>
            <div class="card-text">
             {errorMsg!=="" && <div
                class="alert alert-danger alert-dismissible fade show"
                role="alert"
              >
                {errorMsg}
              </div>}
                <div class="form-group">
                  <label for="exampleInputEmail1">Email</label>
                  <input
                  onChange={(e)=>setEmail(e.target.value)}
                    type="email"
                    class="form-control form-control-sm form-inputs"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                  onChange={(e)=>setPassword(e.target.value)}
                    type="password"
                    class="form-control form-control-sm form-inputs"
                    id="exampleInputPassword1"
                  />
                </div>
                <a onClick={()=>{setShowForgotPass(true)}}  class="forgot-password-link">
                  Forgot password?
                </a>
                <button  onClick={handleOnSubmit}  class="btn btn-primary btn-signin">
                  Sign in
                </button>

                <div class="sign-up">
                  <span>Don't have an account? </span>
                  <button onClick={()=>setRegistration(true)}  class="btn btn-primary btn-register">
                    Create Account
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>

      <RegistrationComponent isRegistrationFlag={showRegistration} setRegistrationWindowFlag={setRegistration}/>
    <ForgotPassword isForgotFlag={showForgotPass} />
    </>
  );
}

export default SignInScreen;
