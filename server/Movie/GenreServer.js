const dbProvider = require('../DbProvider')

async function getGenres(){
    try {
        const query = {};
        let genres = await dbProvider.dbChain().defineTable('genres').getMultiData(query);
        return {
            status: true,
            data : genres
        }; 
    } catch (error) {
        
    }
}


module.exports = {
    genres: getGenres
}