const dbProvider = require('../DbProvider')

async function getUserInfoByEmail(email) {
    try {
        const query = { email: email };
        let user = await dbProvider.dbChain().defineTable('user').getSingleData(query);
        return {
            status: true,
            data: {
                email: user.email,
                name: user.name,
                password: user.password,
            }
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

async function updatePasswordByEmail(email, newPassword) {
    try {
        const query = { email: email };
        const newValues = { $set: { password: newPassword } }
        let user = await dbProvider.dbChain().defineTable('user').updateData(query, newValues);
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



module.exports = {
    getUserInfoByEmail: getUserInfoByEmail,
    updatePasswordByEmail: updatePasswordByEmail,
}