const skills = [
    {
        id: 1,
        name: 'Corte Navalha',
        icon: 'https://i.ibb.co/CKyf7Jy/Ability-druid-ravage.webp',
        description: 'Um corte que faz os inimigos sangrarem.',
        energy: 50,
        value: 30,
        type: "damage",
        cooldown: 0,
        effect: { type: "damage-status", value: 30, turns: 3}
    },
    {
        id: 2,
        name: 'Vigor primal',
        icon: 'https://i.ibb.co/zb3TCRC/Ability-ardenweald-paladin-spring.webp',
        description: 'Use suas forças primais para se curar.',
        energy: 50,
        value: 50,
        type: "heal",
        cooldown: 1,
        effect: null
    },
    {
        id: 3,
        name: 'Garras poderosas',
        icon: 'https://i.ibb.co/55Prh2w/Ability-druid-swipe.webp',
        description: 'Um ataque com garras de grande força.',
        energy: 50,
        value: 50,
        type: "damage",
        cooldown: 0,
        effect: null
    }
];

const returnSelectedSkills = (skillsIds) => {
    return skills.map((skill) => {
        if(skillsIds.includes(skill.id)){
            return skill;
        }
    });
};

module.exports = returnSelectedSkills;