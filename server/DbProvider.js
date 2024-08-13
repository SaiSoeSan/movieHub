require('dotenv').config()
const { query } = require('express');
const { MongoClient, Collection } = require('mongodb');
const client = new MongoClient(process.env.DB_URL)
const database = client.db(process.env.DB_NAME);
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
        getMultiData: async (query) => {
            const data = await tbl.find(query)
            return data.toArray();
        },
        getCount: async () => {
            const count = await tbl.countDocuments()
            return count;
        },
        updateData : async(query,newValues)=>{
            const data = await tbl.updateOne(query,newValues)
            return data;
        }
    }
}

module.exports = {
    dbChain: dbChain
}