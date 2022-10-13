const returnSelectedItens = require('../codedData/itens');
const returnSelectedSkills = require('../codedData/skills');
const returnSelectedTraitss = require('../codedData/traits');

const myCharactersHandler = (userId, client, resp) => {

    const queryText = 'SELECT * FROM wb_player_characters WHERE user_id = $1';

    client.query(queryText, [userId], (err, res) => {
        if(res.rows.length !== 0){
            
            const characters = res.rows.map((char) => {
                const atributes = JSON.parse(char.atributes);
                const skillsIds = JSON.parse(char.skills_id);
                const traitsIds = JSON.parse(char.traits_id);
                const itensIds = JSON.parse(char.itens_id);

                delete char.skills_id;
                delete char.traits_id;
                delete char.itens_id;

                const skills = returnSelectedSkills(skillsIds);
                const traits = returnSelectedTraitss(traitsIds);
                const itens = returnSelectedItens(itensIds);

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
            resp.json({ userCharacters: [] });
        }
    });
    
    
}

module.exports = myCharactersHandler;