const dbProvider = require('../DbProvider')

async function signup(email, password, name){
    
    try{

        const query = { 
            email: email, 
            name: name, 
            password: password 
        };

        const fetchQuery = {email: email};        
        let existing = await dbProvider.dbChain().defineTable('user').getSingleData(fetchQuery);
        if(existing){
            return {
                status: false,
                message: 'User already exists.'
            };
        }

        let data = await dbProvider.dbChain().defineTable('user').insertData(query);

        return {
            status: true,
            data: {
                email: email,
                name: name
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
    signup: signup
}