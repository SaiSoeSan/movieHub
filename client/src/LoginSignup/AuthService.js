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

export async function login(userId, password){
    let result = await httpService.post('login',{userId:userId, password: password});
    if(result.status){
        loggedInUserInfo.email = 'dummy@email.com';
        loggedInUserInfo.name = 'Dummy';
        
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