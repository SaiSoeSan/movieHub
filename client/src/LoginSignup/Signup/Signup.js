import { React, useRef } from "react";
import * as signupService from "./SignupService";
import { useNavigate,Link } from "react-router-dom";

const emailFormat = '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$';




export default function Signup() {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const nameRef = useRef();
  const msgRef = useRef("");

  const signupClicked = async (event) => {

    event.preventDefault();

    if(!event.target.reportValidity()) return;

    let result = await signupService.signup(
      emailRef.current.value,
      passwordRef.current.value,
      nameRef.current.value
    );
    if (result.status) {
      navigate("/");
    } else {
      console.error("Signup fail", result.message);
      msgRef.current.innerText = result.message;
    }
  };



  function checkPasswordMatch() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      document.getElementById('confirmPassword').setCustomValidity('Passwords do not match');
    } else {
      document.getElementById('confirmPassword').setCustomValidity('');
    }
  }



  return (
    <>
            {/* <div>
                <div>
                    <label>Name</label>
                    <input type='text' ref={nameRef} required={true}></input>
                    <br></br>
                    <label>Email Address</label>
                    <input type='text' ref={emailRef} required={true}></input>
                    <br></br>
                    <label>Password</label>
                    <input type='password' ref={passwordRef} required={true}></input>
                    <br></br>
                    <label>Confirm Password</label>
                    <input type='password' ref={confirmPasswordRef} required={true}></input>
                    <br></br>
                    <button onClick={signupClicked}>Signup</button>
                    <br></br>
                    <div ref={msgRef}></div>
                </div>
            </div> */}



      <div className="container">
        <div className="row" style={{ height: "100vh" }}>
          <div className="col-md-5 offset-md-3 col-xs-12 align-self-center">
            <form style={{ backgroundColor: "gray", padding: "20px" }} onSubmit={signupClicked} noValidate>

            <div className="mb-3">
                <div className="text-danger text-center" ref={msgRef}></div>
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  ref={nameRef}
                  className="form-control"
                  required={true}
                ></input>
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  pattern={emailFormat}
                  ref={emailRef}
                  className="form-control"
                  required={true}
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                id='password'
                  type="password"
                  className="form-control"
                  ref={passwordRef}
                  required={true}
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                id='confirmPassword'
                className="form-control"
                  type="password"
                  ref={confirmPasswordRef}
                  onInput={checkPasswordMatch}
                  required={true}
                ></input>
              </div>
              <button style={{width:"100%"}} className='btn btn-danger'>Signup</button>
            </form>
          </div>
        </div>
      </div>



    </>
  );
}
