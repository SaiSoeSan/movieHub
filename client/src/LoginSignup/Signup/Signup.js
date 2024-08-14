import { React, useRef } from "react";
import * as signupService from "./SignupService";
import { useNavigate,Link } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const nameRef = useRef();
  const msgRef = useRef("");

  const signupClicked = async () => {
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
            <form style={{ backgroundColor: "gray", padding: "20px" }}>
              <div className="mb-3">
                <div className="text-danger text-center" ref={msgRef}></div>
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="text"
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
                className="form-control"
                  type="password"
                  ref={confirmPasswordRef}
                  required={true}
                ></input>
              </div>
              <div className="mb-3">
                    Already have an account? <Link to={'/login'}>Sign In</Link> now.
                </div>
              <button style={{width:"100%"}} className='btn btn-danger' onClick={signupClicked}>Signup</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
