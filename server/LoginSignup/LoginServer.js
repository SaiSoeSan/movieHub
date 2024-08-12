
async function login(){
    
    try{
        console.log('login func here')
        return {
            status: true,
            data: {
                userId: 'USER_ID',
                userName: 'USER_NAME'
            }
        };

    }catch(err) {
        console.error(err);
        return {
            status: false,
            message: err
        };
    }finally{

    }
    
}


module.exports = {
    login: login
}

