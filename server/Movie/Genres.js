const dbProvider = require('../DbProvider')

async function getAllGenres(){
    try{
        let genres = await dbProvider.dbChain().defineTable('genres').getMultiData({});
        return await genres.toArray();

    }catch(err) {
        console.error(err);
        return [];
    }finally{
        //await client.close();
    }
    
}

module.exports = {
    getAllGenres: getAllGenres
}