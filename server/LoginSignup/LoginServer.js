
async function login(userId, password){
    
    try{
        return {
            status: true,
            data: {
                userId: userId,
                userName: userId
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

