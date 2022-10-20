const returnSelectedItens = require('../codedData/itens');

const itensHandler = (resp) => {
    resp.json({ itens:  returnSelectedItens("all")});
}

module.exports = itensHandler;