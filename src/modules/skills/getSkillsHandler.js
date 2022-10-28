const returnSelectedSkills = require('../../codedData/skills');

const skillsHandler = (resp) => {
    resp.status(200).json({ skills:  returnSelectedSkills("all")});
}

module.exports = skillsHandler;