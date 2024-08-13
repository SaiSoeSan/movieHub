import { React, useRef } from 'react'
import './Login.css'
import * as authService from '../AuthService'
import {Link, useLocation, useNavigate } from 'react-router-dom';

export default function Login(){
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const emailRef = useRef();
    const passwordRef = useRef();
    
    const signInClicked = async () => {

        let result = await authService.login(emailRef.current.value, passwordRef.current.value);
        if(result.status){
          //navigate('/');
          navigate(from, { replace: true });
        }else{
          console.error('Login fail', result.message);
        }
    }


    return (
        <>
            <div className='container'>
                <div>Logo here</div>
                <div>Incorrect email or password</div>
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
                </div>
            </div>            
        </>
    );
}