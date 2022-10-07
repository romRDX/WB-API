const personagens = require('../codedData/characters');

const myCharactersHandler = (userId, client, resp) => {

    const queryText = 'SELECT * FROM wb_player_characters WHERE user_id = $1';

    client.query(queryText, [userId], (err, res) => {
        if(res.rows.length !== 0){
            // console.log("111: ",JSON.parse(res.rows[0].atributes).STR);
            // console.log("111: ", JSON.parse(res.rows[0].skills_id)[2]);
            const characters = res.rows.map((char) => {
                const atributes = JSON.parse(char.atributes);
                const skills = JSON.parse(char.skills_id);
                const traits = JSON.parse(char.traits_id);
                const itens = JSON.parse(char.itens_id);

                return {
                    ...char,
                    atributes,
                    skills,
                    traits,
                    itens,
                };
            })

            resp.json({ userCharacters: characters });
        } else {
            console.log("error: ");
            // resp.status(400).json('Verifique a sua senha e nome de usuário e tente novamente.');
        }
    });
    
    
}

module.exports = myCharactersHandler;