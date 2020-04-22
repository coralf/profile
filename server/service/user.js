const { connection } = require('../db');

function login(username, password) {
    return new Promise((resovle, reject) => {
        const sql = `select username , password from user where username='${username}' and password='${password}'`;
        connection.query(sql, (err, result) => {
            const user = result && (result.length > 0) && result[0];
            user ? resovle(user) : resovle(null);
        });
        connection.end();
    });
}
module.exports = {
    login
}

