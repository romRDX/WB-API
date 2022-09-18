// const { personagens } = require('../data/characters');

const myCharactersHandler = (resp) => {

    console.log('char go');
    // resp.json({ teste: personagens });
    resp.json({ teste: 'rdx1' });
}

module.exports = myCharactersHandler;