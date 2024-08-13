import * as httpService from './HttpService'

export function isLoggedIn(){   
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if(isLoggedIn == null || isLoggedIn == undefined){
        window.location.replace('/login')
    }else{
        return null;
    }
}

let _loggedInUserInfo = {
    email: undefined,
    name: undefined
}

export const loggedInUserInfo = {
    set: function (data){
        _loggedInUserInfo = data;
    },
    get: function (){
        return _loggedInUserInfo;
    }
};

export async function login(email, password){
    let result = await httpService.post('login',{email:email, password: password});
    if(result.data.status){
        loggedInUserInfo.set(result.data.data)
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