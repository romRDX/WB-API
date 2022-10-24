const returnSelectedItens = require('../codedData/itens');

const updateCharacterItensHandler = (data, client, res) => {

    const queryText = 'UPDATE wb_player_characters SET itens_id = $1 WHERE user_id = $2';
    const itensIds = JSON.stringify(data.dataArray.map((item) => item == undefined ? 0 : item.id));

    client.query(queryText, [itensIds, data.userId], () => {
        res.status(200);
    });
    console.log("ABC");
}

module.exports = updateCharacterItensHandler;