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

    const queryText = 'SELECT * FROM WB_USER WHERE Email = $1;';
    
    const queryParams = JSON.parse(req.body.params);
    console.log("ZZ: ", queryParams);

    client.query(queryText, [queryParams.email], (err, res) => {
        console.log("BBB: ", res.rows);
        if(res.rows.length !== 0){
            if(res.rows[0].email == queryParams.email && res.rows[0].password == queryParams.password){
                console.log("AAA: ", res.rows[0].password);
                resp.json({ authentication: true, userData: res.rows[0] });
            } else {
                resp.status(400).json('Verifique a sua senha e nome de usuário e tente novamente.');    
            }
        } else {
            resp.status(400).json('Verifique a sua senha e nome de usuário e tente novamente.');
        }
    });
});

app.get('/characters', (req, res, next) => {
    myCharactersHandler(res);
});

app.get('/tribes', (req, res, next) => {
    tribesHandler(res);
});
 
module.exports = app;