const express = require('express')
const app = express()
const port = 3000
const config ={
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('Wagner')`

connection.query(sql)

const selectQuery = `SELECT name FROM people`;

var message

connection.query(selectQuery, (error, results, fields) => {
    const names = results.map((result) => result.name).join(', ');
    message = `<h1>Full Cycle Rocks!</h1><p>Names: ${names}</p>`;
})

app.get('/', (req,res) => {
    res.send(message)
})

connection.end()

app.listen(port, () => {
    console.log('Running on port '+port)
})