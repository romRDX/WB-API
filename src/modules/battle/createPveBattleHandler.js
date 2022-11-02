const { returnMonstersIdsFromStage } = require("../../codedData/maps");
const returnSelectedMonsters = require("../../codedData/monsters");

const createPveBattleHandler = (battleData, client, resp) => {
    
    const queryText = "INSERT INTO wb_pve_battle (player_id, character_id, monster_id, stage_id, turns) VALUES ($1, $2, $3, $4, '[]')";

    const monsters = returnSelectedMonsters(returnMonstersIdsFromStage(battleData.stageId))[0];

    delete monsters.action;

    // client.query(queryText, [battleData.playerId, battleData.characterId, monsters.id, battleData.stageId], (err, res) => {
    //     resp.status(200).json({ success: true, battleId: 1, monsterData });
    // });

    resp.status(200).json({ success: false });
}

module.exports = createPveBattleHandler;