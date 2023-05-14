const { returnMonstersIdsFromStage } = require("../../../codedData/maps");
const returnSelectedMonsters = require("../../../codedData/monsters");

const createPvPBattleHandler = (battleData, client, resp) => {

    console.log("PVP-BATTLE: ", battleData);

    const queryText = "INSERT INTO wb_pvp_battle (player_1_id, player_1_character_id, player_2_id, player_2_character_id, turns) VALUES ($1, $2, $3, $4, '[]')";

    // const monster = returnSelectedMonsters(returnMonstersIdsFromStage(battleData.stageId))[0];

    // delete monster.action;
    // DESCOMENTAR QUANDO ESTIVER PRONTO - NÃO ESTA SALVANDO A BATALHA NO BANCO - AJUSTAR AS VARIAVEIS DE CADA CAMPO DA QUERY
    // client.query(queryText, [battleData.playerId, battleData.characterId, monsters.id, battleData.stageId], (err, res) => {
    //     resp.status(200).json({ success: true, battleId: 1, monsterData });
    // });

    
    // const battleState = {
    //     battleId: 1,
    //     player1Id: null,
    //     player1CharacterId: null,
    //     player1CharacterData: null,
    //     player1CharacterInitialData: null,
    //     player2Id: null,
    //     player2CharacterId: null,
    //     player2CharacterData: null,
    //     player2CharacterInitialData: null,
    //     currentTurn: null,
    //     turnsData: null,
    // }

    resp.status(200).json({ success: true, battleState: battleData });
}

module.exports = createPvPBattleHandler;