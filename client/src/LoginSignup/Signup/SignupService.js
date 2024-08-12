import * as httpService from '../HttpService'

const authService = require('../AuthService')

export async function signup(email, password){
    let result = await httpService.post('signup',{email:email, password: password});
    if(result.status){
        authService.setLogin();
    }
    return result;
}