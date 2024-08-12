import {React, useRef} from 'react'
import * as signupService from './SignupService'
import {useNavigate} from 'react-router-dom';

export default function Signup(){
    const navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();

    const signupClicked = async () => {
        let result = await signupService.signup(emailRef.current.value, passwordRef.current.value);
        if(result.status){
          navigate('/');
        }else{
          console.error('Signup fail', result.message);
        }
    }

    return (
        <>
            <div>
                <div>
                    <label>Email Address</label>
                    <input type='text' ref={emailRef}></input>
                    <br></br>
                    <label>Password</label>
                    <input type='password' ref={passwordRef}></input>
                    <br></br>
                    <label>Confirm Password</label>
                    <input type='password'></input>
                    <br></br>
                    <button onClick={signupClicked}>Signup</button>
                </div>
            </div>
        </>
    );
}