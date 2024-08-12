const dbProvider = require('../DbProvider')

async function login(email, password){
    try{
        const query = { email: email, password: password };
        let user = await dbProvider.dbChain().defineTable('user').getSingleData(query);
        if(user != undefined){
            return {
                status: true,
                data: {
                    email: user.email,
                    name: user.name                    
                }
            };
        }else{
            return {
                status: false,
                message: 'Invalid email or password'
            };
        }

    }catch(err) {
        console.error(err);
        return {
            status: false,
            message: err
        };
    }finally{
        //await client.close();
    }
    
}

module.exports = {
    login: login
}

