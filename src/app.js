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

client.connect(err => {
    if (err) {
        console.error('connection error', err.stack)
    } else {
        console.log('connected')
    }
});

app.post('/login', (req, resp, next) => {

    const queryText = 'SELECT Name FROM WB_USER;';

    console.log("XX: ", req);
    console.log("ZZ: ", resp);
    
    client.query(queryText, (err, res) => {
        if (err) throw err;        
            resp.json({ token: '123456', teste: res.rows });
        // for (let row of res.rows) {
        //   resp.json({ token: '123456', teste: row });
        // }
    });

    // client.query(queryText).then((err, res) => {
    //     console.log("XXXXXXXXXXXXX: ", res);
    //     if (err) throw err;
    //     for (let row of res.rows) {
    //       resp.json({ token: '123456', teste: row });
    //     }
    // });

});

app.get('/characters', (req, res, next) => {
    myCharactersHandler(res);
});

app.get('/tribes', (req, res, next) => {
    tribesHandler(res);
});
 
module.exports = app;