const { MongoClient, Collection } = require('mongodb');
const client = new MongoClient('mongodb://localhost:27017/')
const database = client.db('test_db');
console.log('db provider here ------------')

function dbChain(){
    return {
        defineTable: (tableName) => {
            tbl = database.collection(tableName);  
            return dbChain();
        },
        getSingleData: async (query) => {
            const data = await tbl.findOne(query)
            return data;
        },
        // getMultiData: async (query) => {
        //     const data = await tbl.find({})
        //     return data;
        // }
    }
}

module.exports = {
    dbChain: dbChain
}