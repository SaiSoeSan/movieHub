import { React, useRef } from 'react'
import './Login.css'
import * as authService from '../AuthService'
import {Link, useNavigate} from 'react-router-dom';

export default function Login(){
    const navigate = useNavigate();


    const userId = useRef();
    const password = useRef();
    
    const signInClicked = async () => {

        let result = await authService.login(userId.current.value, password.current.value);
        if(result.status){
          navigate('/');
        }else{
          console.error('Login fail', result.message);
        }
    }


    return (
        <>
            <div className='container'>
                <div>Logo here</div>
                <div>Incorrect userid or password</div>
                <div>Sign In</div>
                <div>
                    User ID
                    <input type="text" ref={userId}></input>
                </div>
                <div>
                    Password
                    <input type="text" ref={password}></input>
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