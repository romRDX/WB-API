const returnSelectedSkills = require('../codedData/skills');

const itensHandler = (resp) => {
    resp.status(200).json({ skills:  returnSelectedSkills("all")});
}

module.exports = itensHandler;