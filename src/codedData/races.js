const races = [
    {
        id: 2,
        name: 'Felinos',
        icon: 'https://i.ibb.co/8xjqJN4/lion.png',
        wallpaper: 'https://i.ibb.co/wstp2cx/felines.jpg',
        description: 'Os Felinos são seres ágeis e notáveis, destacando-se por sua agilidade e graça no combate. Com pelagens deslumbrantes e olhos astutos, esses combatentes são mestres em ataques rápidos e movimentos furtivos. Apesar de sua destreza mortal, mantêm um código de honra, valorizando a lealdade e a elegância em meio à batalha.',
        // traits: [{}],
        // skills: [{}],
        classes: [
            {   
                id: 1,
                name: 'Leão',
                portrait: 'https://i.ibb.co/8xjqJN4/lion.png',
                description: 'Os Leões são líderes majestosos, destacando-se por sua imponência e carisma no campo de batalha. Com suas pelagens exuberantes e majestosas crinas, eles emanam uma presença real. Dotados de força física impressionante, esses líderes são hábeis estrategistas, orientando suas equipes com sabedoria. Apesar de sua postura régia, mantêm uma generosidade notável, inspirando lealdade e camaradagem em seus aliados.',
                model: 'https://i.ibb.co/8xjqJN4/lion.png',
                // skills: [
                    // { nome: 'Ataque de Garras', mod: 1, custo: 50, tipo: 'ataque', icone: ""},
                    // { nome: 'Mordida', mod: 1.2, custo: 50, tipo: 'ataque', icone: ""},
                    // { nome: 'Cura', mod: 10, custo: 16, tipo: 'cura'}
                // ], 
                // traits: [
                    // { nome: 'regen', efeito: ''},
                    // { nome: 'sangria', efeito: ''},
                // ],
                special: { nome: 'especial', description: "", tipo: 'buff', value: 1.4, effect: null },
                attributes: { STR: 360, DEX: 335, CON: 330, INT: 220, TOU: 240, AGI: 315}
            },
            // { 
            //     name: 'Leopardo',
            //     portrait: '',
            //     description: 'exemplo descrição',
            //     model: '',
            //     skills: [{ nome: 'habilidade1'}, { nome: 'habilidade2'}, { nome: 'habilidade3'}],
            //     attributes: { STR: 300, DEX: 460, CON: 200, INT: 200, TOU: 180, AGI: 400}
            // },
            { 
                id: 2,
                name: 'Tigre',
                portrait: 'https://i.ibb.co/5ntRKcv/tiger.png',
                description: 'Os Tigres são especialistas em furtividade e ataques precisos. Com pelagens listradas e olhos penetrantes, os eles são mestres em se movimentar pelas sombras, tornando-se predadores silenciosos no campo de batalha. Sua agilidade e astúcia os transformam em assassinos letais, surpreendendo os inimigos com ataques rápidos e precisos. Apesar de sua natureza mais reservada, os Tigres Felinarianos valorizam a lealdade à sua causa e são respeitados por sua habilidade tática.',
                model: 'https://i.ibb.co/5ntRKcv/tiger.png',
                // skills: [{ nome: 'habilidade1'}, { nome: 'habilidade2'}, { nome: 'habilidade3'}],
                attributes: { STR: 330, DEX: 390, CON: 280, INT: 250, TOU: 200, AGI: 350}
            },
        ]
    },

    {
        id: 1,
        name: 'Caninos',
        icon: 'https://i.ibb.co/82tS5ZT/wolf.png',
        wallpaper: 'https://i.ibb.co/BTCgnSc/canines.jpg',
        description: 'Os Caninos são seres destemidos e corajosos, conhecidos por sua força e valentia. Eles lideram com determinação, destacando-se em táticas de combate. Apesar de sua presença imponente no campo de batalha, eles mantêm um compromisso com a justiça e a camaradagem, equilibrando força e nobreza.',
        classes: [
            { 
                id: 1,
                name: 'Lobo',
                portrait: 'https://i.ibb.co/82tS5ZT/wolf.png',
                description: 'Os Lobos são líderes selvagens, conhecidos por sua astúcia e eficiente liderança. Com pelagens exuberantes e olhos atentos, eles se destacam como líderes naturais. Combinando força física e inteligência, guiam suas matilhas com sabedoria, aplicando táticas astutas e coordenando ataques precisos. Mantêm um forte senso de lealdade e justiça, tornando-se figuras respeitadas.',
                model: 'https://i.ibb.co/82tS5ZT/wolf.png',
                // skills: [{ nome: 'habilidade1'}, { nome: 'habilidade2'}, { nome: 'habilidade3'}],
                attributes: { STR: 290, DEX: 340, CON: 230, INT: 360, TOU: 230, AGI: 350 }
            },
            // { nome: 'Hyena', portrait: '', model: '', habilidades: [], atributos: { STR: '', DEX: '', CON: '', INT: '', TOU: '', AGI: ''}},
            { 
                id: 2,
                name: 'Terrier',
                portrait: 'https://i.ibb.co/ZBcc07W/terrier.png',
                description: 'Os Terriers são combatentes incansáveis, especializados em combate ágil e decisivo. Com pelagens robustas e olhos determinados, eles são geneticamente aprimorados para a caça e o combate. Ágeis e destemidos, atuam como guerreiros versáteis, infiltrando-se rapidamente no campo de batalha e enfrentando desafios com coragem. Apesar de sua natureza mais enérgica, mantêm um compromisso firme com a cooperação e a camaradagem, sendo aliados confiáveis.',
                model: 'https://i.ibb.co/ZBcc07W/terrier.png',
                // skills: [{ nome: 'habilidade1'}, { nome: 'habilidade2'}, { nome: 'habilidade3'}],
                attributes: { STR: 430, DEX: 300, CON: 330, INT: 170, TOU: 250, AGI: 320 }
            },
        ]
    },

    // {
    //     name: 'Repteis',
    //     icon:'',
    //     descricao: 'exemplo descrição',
    //     racas: [
    //         { nome: 'Crocodilo', portrait: '', model: '', habilidades: [], atributos: { STR: '', DEX: '', CON: '', INT: '', TOU: '', AGI: ''}},
    //         { nome: 'Cobra', portrait: '', model: '', habilidades: [], atributos: { STR: '', DEX: '', CON: '', INT: '', TOU: '', AGI: ''}},
    //         { nome: 'Tartaruga', portrait: '', model: '', habilidades: [], atributos: { STR: '', DEX: '', CON: '', INT: '', TOU: '', AGI: ''}},
    //     ]
    // },

    // {
    //     nome: 'Insetos',
    //     simbolo:'',
    //     descricao: 'exemplo descrição',
    //     racas: [
    //         { nome: 'Aranha', portrait: '', model: '', habilidades: [], atributos: { STR: '', DEX: '', CON: '', INT: '', TOU: '', AGI: ''}},
    //         { nome: 'Besouro', portrait: '', model: '', habilidades: [], atributos: { STR: '', DEX: '', CON: '', INT: '', TOU: '', AGI: ''}},
    //         { nome: 'Formiga', portrait: '', model: '', habilidades: [], atributos: { STR: '', DEX: '', CON: '', INT: '', TOU: '', AGI: ''}},
    //     ],
    // },
];

const returnSelectedRaces = (racesIds) => {
    if(racesIds == "all"){
        return races;
    }

    const racesArray = [];

    racesIds.forEach((race) => {
        const raceData = races.find((data) => data.id == race);
        racesArray.push(raceData);
    })

    return racesArray;
};

module.exports = returnSelectedRaces;