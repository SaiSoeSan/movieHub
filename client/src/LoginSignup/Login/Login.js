import { React, useRef, useEffect } from 'react'
import './Login.css'
import * as authService from '../AuthService'
import {Link, useLocation, useNavigate } from 'react-router-dom';

export default function Login(){
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const emailRef = useRef();
    const passwordRef = useRef();
    const msgRef = useRef('');

    useEffect(()=>{
        if(authService.isLoggedIn()){
            navigate('/');
        }
    },[])
    
    const signInClicked = async () => {

        let result = await authService.login(emailRef.current.value, passwordRef.current.value);
        if(result.status){
          //navigate('/');
          navigate(from, { replace: true });
        }else{
          console.error('Login fail', result.message);
          msgRef.current.innerText = result.message;
        }
    }


    return (
        <>
            <div className='container'>
            <div className="row" style={{height:"100vh"}}>
                <div className="col-md-5 offset-md-3 col-xs-12 align-self-center">
                <form style={{backgroundColor:"gray",padding:"20px"}}>
                    
                <div className="mb-3">
                <div className='text-danger text-center' ref={msgRef}></div>
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="text" className='form-control' ref={emailRef} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className='form-control' ref={passwordRef}></input>
                </div>
                <div className="mb-3">
                    New to page? <Link to={'/signup'}>Sign up</Link> now.
                </div>
                <input type="button" style={{width:"100%"}} className='btn btn-danger' value="Sign In" onClick={signInClicked}></input>
            </form>
                </div>
            </div>
                {/* <div>Logo here</div>
                <div ref={msgRef}></div>
                <div>Sign In</div>
                <div>
                    Email
                    <input type="text" ref={emailRef}></input>
                </div>
                <div>
                    Password
                    <input type="password" ref={passwordRef}></input>
                </div>
                <div>
                    <input type="button" value="Sign In" onClick={signInClicked}></input>
                </div>
                <div>
                    New to page? <Link to={'/signup'}>Sign up</Link> now.
                </div> */}
            </div>            
        </>
    );
}