const updateCharacterSkillsHandler = (data, client, res) => {
    
    const queryText = 'UPDATE wb_player_characters SET skills_id = $1 WHERE user_id = $2';
    const skillsIds = JSON.stringify(data.dataArray.map((skill) => skill == undefined ? 0 : skill.id));

    client.query(queryText, [skillsIds, data.userId], () => {
        res.status(200);
    });
    console.log("ABC");
}

module.exports = updateCharacterSkillsHandler;