const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name)
             values ('Wagner')`
const selectQuery = `SELECT name
                     FROM people`;
var message

connection.query(sql)

connection.query(selectQuery, (error, results) => {
    console.log("error: ", error)
    console.log("names: ", results)

    if (results) {
        const names = results.map((result) => result.name).join(', ')
        message = `<h1>Full Cycle Rocks!</h1><p>Names: ${names}</p>`
    } else {
        message = `<h1>Full Cycle Rocks!</h1>`
    }
})

app.get('/', (req, res) => {
    res.send(message)
})

connection.end()

app.listen(port, () => {
    console.log('Running on port ' + port)
})