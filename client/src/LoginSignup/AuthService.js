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
        setLogin();
    }
    return result;
}

export async function logout(){
    localStorage.removeItem('isLoggedIn');
    window.location.replace('/login');
}

export function setLogin(){
    localStorage.setItem('isLoggedIn', true);
}