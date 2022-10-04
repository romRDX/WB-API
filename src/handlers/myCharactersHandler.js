const personagens = require('../codedData/characters');

const myCharactersHandler = (resp) => {
    resp.json({ teste: personagens });
}

module.exports = myCharactersHandler;