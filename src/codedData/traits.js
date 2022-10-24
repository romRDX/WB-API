
const traits = [
    {
        id: 1,
        name: 'Pele grossa',
        icon: 'https://i.ibb.co/2ypRvrd/Ability-druid-ironfur.webp',
        description: 'Uma pele mais resistente que casca de arvore.',
        type: "damage-reduction",
        value: 10,
        cooldown: 0,
        effect: null
    },
    {
        id: 2,
        name: 'Adrenalina feral',
        icon: 'https://i.ibb.co/NK4b6kP/Ability-druid-healinginstincts.webp',
        description: 'Você sempre está cheio de energia.',
        value: 10,
        type: "energy-reduction",
        cooldown: 0,
        effect: null
    },
    {
        id: 3,
        name: 'Regeneração natural',
        icon: 'https://i.ibb.co/VwJjdYR/Ability-druid-improvedtreeform.webp',
        description: 'Seus ferimentos se curam com o tempo.',
        value: 3,
        type: "heal",
        cooldown: 0,
        effect: null
    },
    {
        id: 4,
        name: 'Teste',
        icon: 'https://i.ibb.co/VwJjdYR/Ability-druid-improvedtreeform.webp',
        description: 'Seus ferimentos se curam com o tempo.',
        value: 3,
        type: "heal",
        cooldown: 0,
        effect: null
    }
];

const returnSelectedTraitss = (traitsIds) => {
    if(traitsIds == "all"){
        return traits;
    }

    const traitsArray = [];

    traitssIds.forEach((trait) => {
        const traitData = traits.find((data) => data.id == trait);
        traitsArray.push(traitData);
    })

    return traitsArray;
};

module.exports = returnSelectedTraitss;