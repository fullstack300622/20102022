// The first time you will try to run it you will probably have this error:
// ER_NOT_SUPPORTED_AUTH_MODE bla bla bla consider to upgrade mysql server:
// Or if you forgot your password run the next command:

// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'

// ** change password to the new password
// ***you can send error to the google and it will be the first result.. 

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin1234',
    database: 'classicmodels'
});


const getAllCustomers = () => {
    return new Promise((resolve, reject) => {
        connection.query('select * from customers', function (error, results, fields) {
            if (error) {
                return reject(error)
            } else {
                return resolve(results);
            }
        });
    })
}

getAllCustomers()
    .then(res => {
        console.log('result :', res)
    })
    .catch(err => {
        console.log('error: ', err)
    })


const getUserById = (id) => {
    return new Promise((resolve, reject) => {
        connection.query(`select * from customers where customerNumber=${id}`, (err, results) => {
            if (err) {
                return reject(err)
            } else {
                return resolve(results)
            }
        })

    })
}

// getUserById(123)
//     .then(result => {
//         console.log(result)
//     })
//     .catch(err => {
//         console.log(err)
//     })



const getUserByNameAndLastName = (contactName, contactLastName) => {
    return new Promise((resolve, reject) => {

        if (!contactName || !contactLastName) {
            return reject({ message: 'contactName or contactLastName is missing', error: true });
        }

        connection.query(`select * from customers where customerName=? AND contactLastName=?`, [contactName, contactLastName], (err, results) => {
            if (err) {
                return reject(err)
            } else {
                return resolve(results)
            }
        })

    })
}
getUserByNameAndLastName('beni', 'pomeranets')
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })

connection.end()
