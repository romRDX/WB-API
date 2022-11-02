const returnSelectedMonsters = require('../../codedData/monsters');

const getMonstersHandler = (resp) => {
    resp.status(200).json({ races:  returnSelectedMonsters("all")});
}

module.exports = getMonstersHandler;