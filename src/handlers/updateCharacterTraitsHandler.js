const updateCharacterTraitsHandler = (data, client, res) => {

    const queryText = 'UPDATE wb_player_characters SET traits_id = $1 WHERE user_id = $2';
    const traitsIds = JSON.stringify(data.dataArray.map((trait) => trait == undefined ? 0 : trait.id));

    client.query(queryText, [traitsIds, data.userId], () => {
        res.status(200);
    });
    console.log("ABC");
}

module.exports = updateCharacterTraitsHandler;