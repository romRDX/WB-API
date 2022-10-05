const express = require('express');
 
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const myCharactersHandler = require('./handlers/myCharactersHandler');
const tribesHandler = require('./handlers/tribesHandler')
 
const app = express();
 
// app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
app.use(cors());
 
app.use(helmet());
 
app.use(express.json());
 
app.use(morgan('dev'));


// teste pg



const { Client } = require('pg');

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});



app.post('/login', (req, resp, next) => {
    client.connect(err => {
        if (err) {
            console.error('connection error', err.stack)
        } else {
            console.log('connected')
        }
    });

    let x = '1';
    console.log("XXXXXXXXXXXXXX");
    client.query('SELECT Name FROM WB_USER;', (err, res) => {
        if (err) throw err;
        for (let row of res.rows) {
            console.log("YYYYYYYYYYYYYYYYY: ", res);
          x = JSON.stringify(row);
          console.log("ZZZZZZZZZZZZZZZZZZZZZ: ", x);
          resp.json({ token: '123456', teste: x });
        }
        // client.end();
    });
    
    // resp.json({ token: '123456', teste: x });
});

app.get('/characters', (req, res, next) => {
    myCharactersHandler(res);
});

app.get('/tribes', (req, res, next) => {
    tribesHandler(res);
});
 
module.exports = app;