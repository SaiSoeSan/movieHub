import * as httpService from './HttpService'

export async function login(){
    return await httpService.get('login');
}