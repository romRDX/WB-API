const express = require('express');
 
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const getMyCharacters = require('./handlers/getMyCharactersHandler');

const getItens = require('./handlers/getItensHandler')
const updateCharacterItens = require('./handlers/updateCharacterItensHandler');

const getSkills = require('./handlers/getSkillsHandler')
const updateCharacterSkills = require('./handlers/updateCharacterSkillsHandler');

const getTraits = require('./handlers/getTraitsHandler')
const updateCharacterTraits = require('./handlers/updateCharacterTraitsHandler');
 
const app = express();
 
// app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
app.use(cors());
 
app.use(helmet());
 
app.use(express.json());
 
app.use(morgan('dev'));


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

    client.query(queryText, [queryParams.email], (err, res) => {
        if(res.rows.length !== 0){
            if(res.rows[0].email == queryParams.email && res.rows[0].password == queryParams.password){
                resp.json({ authentication: true, userData: res.rows[0] });
            } else {
                resp.status(400).json('Verifique a sua senha e nome de usuário e tente novamente.');    
            }
        } else {
            resp.status(400).json('Verifique a sua senha e nome de usuário e tente novamente.');
        }
    });
});

// CHARACTERS
app.get('/characters', (req, res, next) => {
    const userId = JSON.parse(req.query[0]).userId;
    getMyCharacters(userId, client, res);
});


// ITEMS
app.get('/itens', (req, res, next) => {
    getItens(res);
});

app.put('/itens/update', (req, res, next) => {
    const queryParams = JSON.parse(req.body.params);
    updateCharacterItens(queryParams, client, res);
});


// SKILLS
app.get('/skills', (req, res, next) => {
    getSkills(res);
});

app.put('/skills/update', (req, res, next) => {
    const queryParams = JSON.parse(req.body.params);
    updateCharacterSkills(queryParams, client, res);
});


// TRAITS
app.put('/traits/update', (req, res, next) => {
    const queryParams = JSON.parse(req.body.params);
    updateCharacterItens(queryParams, client, res);
});

module.exports = app;