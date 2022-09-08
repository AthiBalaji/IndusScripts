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

    async signtext(text) {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM newtexts WHERE ? in (pos1, pos2,pos3, pos4,pos5, pos6,pos7, pos8,pos9, pos10,pos11, pos12,pos13, pos14,pos15, pos16,pos17, pos18,pos19, pos20,pos21);";

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
    

    async signrec(text) {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM signfreqs WHERE signs = ?;";

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