const express = require('express');
 
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const getMyCharacters = require('./modules/characters/getMyCharactersHandler');
const createCharacter = require('./modules/characters/createCharacterHandler');
const deleteCharacter = require('./modules/characters/deleteCharacterHandler');

const getRaces = require('./modules/races/getRacesHandler');

const getMaps = require('./modules/maps/getMapsHandler');

const getItens = require('./modules/itens/getItensHandler')
const updateCharacterItens = require('./modules/itens/updateCharacterItensHandler');

const getSkills = require('./modules/skills/getSkillsHandler')
const updateCharacterSkills = require('./modules/skills/updateCharacterSkillsHandler');

const getTraits = require('./modules/traits/getTraitsHandler')
const updateCharacterTraits = require('./modules/traits/updateCharacterTraitsHandler');

const getMonsters = require('./modules/monsters/getMonstersHandler')

const createPveBattle = require('./modules/battle/createPveBattleHandler');
const actionPveBattle = require('./modules/battle/actionPveBattleHandler');
 
const app = express();
 
app.use(cors({ origin: '*' }));
// app.use(cors());
 
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

// MAPS

app.get('/maps', (req, res, next) => {
    getMaps(res);
});


// RACES

app.get('/races', (req, res, next) => {
    getRaces(res);
});

// CHARACTERS
app.get('/characters', (req, res, next) => {
    console.log("RDX: ", req.query);
    const userId = req.query.userId ? req.query.userId : JSON.parse(req.query[0]).userId;
    getMyCharacters(userId, client, res);
});

app.post('/characters/new', (req, res, next) => {
    const characterData = JSON.parse(req.body.params);
    // console.log("NEW CHAR: ", characterData);
    createCharacter(characterData, client, res);
});

app.post('/characters/delete', (req, res, next) => {
    const characterData = JSON.parse(req.body.params);
    deleteCharacter(characterData, client, res);
});

// ITEMS
app.get('/itens', (req, res, next) => {
    getItens(res);
});

app.put('/itens/update', (req, res, next) => {
    const queryParams = JSON.parse(req.body.params);
    // console.log("ITENS QUERYP: ", queryParams);
    updateCharacterItens(queryParams, client, res);
});


// SKILLS
app.get('/skills', (req, res, next) => {
    getSkills(res, req.query);
});

app.put('/skills/update', (req, res, next) => {
    const queryParams = JSON.parse(req.body.params);
    // console.log("SKILLS QUERYP: ", queryParams);
    updateCharacterSkills(queryParams, client, res);
});


// TRAITS
app.get('/traits', (req, res, next) => {
    getTraits(res);
});

app.put('/traits/update', (req, res, next) => {
    const queryParams = JSON.parse(req.body.params);
    updateCharacterTraits(queryParams, client, res);
});


// MONSTERS
app.get('/monsters', (req, res, next) => {
    getMonsters(res, req.query);
});


// BATTLE

app.post('/battle-start', (req, res, next) => {
    const battleData = JSON.parse(req.body.params);
    createPveBattle(battleData, client, res);
});

app.post('/battle-action', (req, res, next) => {
    const battleData = JSON.parse(req.body.params);
    actionPveBattle(battleData, client, res, pveActiveBattle);
});

module.exports = app;