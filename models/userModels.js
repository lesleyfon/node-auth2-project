const db = require('./../database/dbConfig');

function findUsers(){
    return db('users');
}



module.exports = {
    findUsers
}