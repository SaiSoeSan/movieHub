import {React, useRef} from 'react'
import * as signupService from './SignupService'
import {useNavigate} from 'react-router-dom';

export default function Signup(){
    const navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const nameRef = useRef();
    const msgRef = useRef('');

    const signupClicked = async () => {
        let result = await signupService.signup(emailRef.current.value, passwordRef.current.value, nameRef.current.value);
        if(result.status){
          navigate('/');
        }else{
          console.error('Signup fail', result.message);
          msgRef.current.innerText = result.message;
        }
    }

    return (
        <>
            <div>
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
            </div>
        </>
    );
}