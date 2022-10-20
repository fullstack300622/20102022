const knex = require('knex').knex({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: 'admin1234',
        database: 'classicmodels'
    }
});

// console.log( knex('customers').where('customerNumber', "=", 201).toQuery())
// knex.raw('select * from customers').then(res=>{
//     console.log(res)
// })

// knex('customers').where('customerNumber', "=", 201)
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log(err)
//     })

// console.log(knex('customers').insert({
//     customerName: 'Dvir',
//     contactLastName: 'Scanner',
//     phone: '052-456-789',
//     customerNumber: 12345,
//     contactFirstName: 'Sout',
//     addressLine1: 'blabla',
//     city: 'Ashdod',
//     country: 'Israel',
// }).toQuery())


const addUser = (user) => {
   return knex('customers').insert(user);
}

const user = {
    customerName: 'Baba Yaga',
    contactLastName: 'Scanner',
    phone: '052-456-789',    
    contactFirstName: 'Sout',
    addressLine1: 'blabla',
    city: 'Ashdod',
    country: 'Israel',
    customerNumber: 77777
}


addUser(user)
.then(data=>{console.log(data)})
.catch(err=>{console.log(err)})


