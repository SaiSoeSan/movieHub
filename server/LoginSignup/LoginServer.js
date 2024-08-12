const dbProvider = require('../DbProvider')

async function login(userId, password){
    try{


        const query = { mainMovieName: 'Terminator 2' };
    let data = await dbProvider.dbChain().defineTable('test_collection').getMultiData(query);
    console.log(data)


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
        //await client.close();
    }
    
}

module.exports = {
    login: login
}

