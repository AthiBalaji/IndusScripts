const mysql = require('mysql');
const dotenv = require('dotenv');
let instance = null;
dotenv.config();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'athi',
    password: '123',
    database: 'indusscripts',
    port: '3306'
});
connection.connect((err) => {
    if (err) {
        console.log(err.message);
    }
     console.log('db ' + connection.state);
});

class DbService {
    static getDbServiceInstance() {
        return instance ? instance : new DbService();
    }

    async searchbytextno(text) {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM texts WHERE LEFT(signno, 4) = ?;";

                connection.query(query, [text], (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });

            return response;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = DbService;