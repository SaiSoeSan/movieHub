import { Navigate, redirect, useNavigate } from 'react-router';
import * as httpService from './HttpService'

export function isLoggedIn(){   
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if(isLoggedIn == null || isLoggedIn == undefined){
        window.location.replace('/login')
    }else{
        return null;
    }
}

export async function login(userId, password){
    let result = await httpService.post('login',{userId:userId, password: password});
    if(result.status){
        localStorage.setItem('isLoggedIn', true);
    }
    return result;
}