const express = require('express');
 
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const myCharactersHandler = require('./handlers/myCharactersHandler');
const tribesHandler = require('./handlers/tribesHandler')
 
const app = express();
 
// app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
app.use(cors({ origin: true }));
 
app.use(helmet());
 
app.use(express.json());
 
app.use(morgan('dev'));


// teste pg

console.log("XXXXXXXXXXXXXX: ", process.env.CORS_ORIGIN);

const { Client } = require('pg');

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

client.connect();

app.post('/login', (req, res, next) => {

    let x = '';

    client.query('SELECT Name FROM WB_USER;', (err, res) => {
        if (err) throw err;
        for (let row of res.rows) {
          x = JSON.stringify(row);
          res.json({ token: '123456', teste: x });
        }
        client.end();
    });
    
});

app.get('/characters', (req, res, next) => {
    myCharactersHandler(res);
});

app.get('/tribes', (req, res, next) => {
    tribesHandler(res);
});
 
module.exports = app;