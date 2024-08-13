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
    if(result.status){        
        setLogin(result.data);
    }
    return result;
}

export async function logout(){
    loggedInUserInfo.set({email:undefined,name:undefined});
    localStorage.removeItem('isLoggedIn');
    window.location.replace('/login');
}

export function setLogin(data){
    localStorage.setItem('isLoggedIn', true);
    loggedInUserInfo.set(data)
}