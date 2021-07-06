var mysql = require("mysql2");
 
var pool = mysql.createPool({
    connectionLimit : 100,
    host: '10.142.170.100',
    user: 'tempuser',
    password: 'Password@12345',
    database: 'test_account_db',
    port: 1433,
    });
 
exports.getConnection = function(callback) {
  pool.getConnection(function(err, conn) {
    if(err) {
      return callback(err);
    }
    console.log("success",conn);
    callback(err, conn);
  })
}


module.exports = pool.promise();