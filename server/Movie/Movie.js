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


module.exports = {
    addFavoriteByEmailAndMovieId: addFavoriteByEmailAndMovieId,
    isFavorite: isFavorite,
    removeFavoriteByEmailAndMovieID: removeFavoriteByEmailAndMovieID,
}