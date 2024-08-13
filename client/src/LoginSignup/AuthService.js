import * as httpService from './HttpService'

export function isLoggedIn(){   
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    return isLoggedIn;
}

export const loggedInUserInfo = {   
    get: function (){
        const userInfo = localStorage.getItem('userInfo');
        return JSON.parse(userInfo);
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
    localStorage.removeItem('userInfo')
    window.location.replace('/login');
}

export function setLogin(data){
    localStorage.setItem('isLoggedIn', true);
    localStorage.setItem('userInfo',JSON.stringify(data))
}