import { React } from 'react'
import './Login.css'
import * as authService from '../AuthService'
import {useNavigate} from 'react-router-dom';

export default function Login(){
    const navigate = useNavigate();
    const signInClicked = async () => {
        let result = await authService.login();
        if(result.status){
          navigate('/about');
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
                    <input type="text"></input>
                </div>
                <div>
                    Password
                    <input type="text"></input>
                </div>
                <div>
                    <input type="button" value="Sign In" onClick={signInClicked}></input>
                </div>
                <div>
                    New to page? Sign up now.
                </div>
            </div>            
        </>
    );
}