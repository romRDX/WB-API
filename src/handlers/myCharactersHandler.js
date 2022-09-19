// const { personagens } = require('../data/characters');

const myCharactersHandler = (resp) => {

    console.log('char go');
    // resp.json({ teste: personagens });
    resp.json({ teste: 'rdx123' });
}

module.exports = myCharactersHandler;