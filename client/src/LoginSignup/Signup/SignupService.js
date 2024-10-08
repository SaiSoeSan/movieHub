import * as httpService from '../HttpService'

const authService = require('../AuthService')

export async function signup(email, password, name){
    let result = await httpService.post('signup',{email:email, password: password, name: name});
    if(result.status){
        authService.setLogin(result.data);
    }
    return result;
}