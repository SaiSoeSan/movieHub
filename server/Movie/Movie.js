const dbProvider = require('../DbProvider')

async function getAllMovies(){
    try{
        let movies = await dbProvider.dbChain().defineTable('movies').getMultiData({});
        return await movies.toArray();

    }catch(err) {
        console.error(err);
        return [];
    }finally{
        //await client.close();
    }
    
}

async function getMovieDetails(query){
    try{
        let movie = await dbProvider.dbChain().defineTable('movies').getSingleData(query);
        return await movie;

    }catch(err) {
        console.error(err);
        return {};
    }finally{
        //await client.close();
    }
    
}

async function getMoviesCount(){
    try{
        let count = await dbProvider.dbChain().defineTable('movies').getCount();
        return count;

    }catch(err) {
        console.error(err);
        return 0;
    }finally{
        //await client.close();
    }
    
}

module.exports = {
    getAllMovies: getAllMovies,
    getMoviesCount: getMoviesCount,
    getMovieDetails: getMovieDetails
}