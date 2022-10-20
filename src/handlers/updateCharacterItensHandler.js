const returnSelectedItens = require('../codedData/itens');

const updateCharacterItensHandler = (data, client, res) => {

    // const queryText = 'SELECT * FROM wb_player_characters WHERE user_id = $1';

    const queryText = 'UPDATE wb_player_characters SET itens_id = $1 WHERE user_id = $2';
    const itensIds = JSON.stringify(data.itensArray.map((item) => item == undefined ? 0 : item.id));
    // console.log(itensIds);
    client.query(queryText, [itensIds, data.userId], (err, res) => {
        // console.log("AA: ", res);
        // if(res.rows.length !== 0){
        //     console.log("BB: ", res.rows);

        // } else {

        // }
    });
    console.log("ABC");
    res.status(200); //.json({ itens:  returnSelectedItens("all")});
}

module.exports = updateCharacterItensHandler;