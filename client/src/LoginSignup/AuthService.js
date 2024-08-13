import * as httpService from './HttpService'

export function isLoggedIn(){   
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if(isLoggedIn == null || isLoggedIn == undefined){
        window.location.replace('/login')
    }else{
        return null;
    }
}

export const loggedInUserInfo = {
    email: '',
    name: ''
}

export async function login(email, password){
    let result = await httpService.post('login',{email:email, password: password});
    if(result.data.status){
        loggedInUserInfo.email = result.data.email;
        loggedInUserInfo.name = result.data.name;        
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