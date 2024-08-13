const dbProvider = require('../DbProvider')

async function isFavorite(email, movieId) {
    try {
        const query = { email: email, movieId: movieId };
        let data = await dbProvider.dbChain().defineTable('favorite').getSingleData(query);
        return {
            status: true,
            data: data
        };
    } catch (err) {
        console.error(err);
        return {
            status: false,
            message: err
        };
    } finally {
        //await client.close();
    }
}
async function addFavoriteByEmailAndMovieId(email, movieId) {
    try {
        const query = { email: email, movieId: movieId };
        let data = await dbProvider.dbChain().defineTable('favorite').insertData(query);
        return {
            'update': 'completed'
        };
    } catch (err) {
        console.error(err);
        return {
            status: false,
            message: err
        };
    } finally {
        //await client.close();
    }
}

async function removeFavoriteByEmailAndMovieID(email, movieId) {
    try {
        const query = { email: email, movieId: movieId }
        let data = await dbProvider.dbChain().defineTable('favorite').deleteData(query);
        return {
            'delete': 'completed'
        }
    } catch (err) {
        console.error(err);
        return {
            status: false,
            message: err
        };
    } finally {
        //await client.close();
    }
}
async function getAllMovies() {
    try {
        let movies = await dbProvider.dbChain().defineTable('movies').getMultiData({});
        return await movies.toArray();

    } catch (err) {
        console.error(err);
        return [];
    } finally {
        //await client.close();
    }

}

async function getMovieDetails(query) {
    try {
        let movie = await dbProvider.dbChain().defineTable('movies').getSingleData(query);
        return await movie;

    } catch (err) {
        console.error(err);
        return {};
    } finally {
        //await client.close();
    }

}

async function getMoviesCount() {
    try {
        let count = await dbProvider.dbChain().defineTable('movies').getCount();
        return count;

    } catch (err) {
        console.error(err);
        return 0;
    } finally {
        //await client.close();
    }

}

module.exports = {
    getAllMovies: getAllMovies,
    getMoviesCount: getMoviesCount,
    getMovieDetails: getMovieDetails,
    addFavoriteByEmailAndMovieId: addFavoriteByEmailAndMovieId,
    isFavorite: isFavorite,
    removeFavoriteByEmailAndMovieID: removeFavoriteByEmailAndMovieID,
}