const dbConn = require('../Delegates/databaseConfig');
const query = require('../Constants/QueryConstants').queryConstants();
class User{
    constructor(user){
        this.user = user;
    }
    saveUser(user){
        return dbConn.execute(query.users.SAVE_USER, [
            user.firstName,
            user.email,
            user.password
        ])
    }
    static checkUser(email){
        return dbConn.execute(query.users.GET_USER, [email]);
    }
    static getUserProducts(id){
        return dbConn.execute(query.users.GET_USER_PRODUCTS)
    }
}

module.exports = User;