
const monsters = [
    {
        id: 1,
        name: "Monster 1",
        attributes: { STR: 1, DEX: 1, INT: 1, AGI: 1, TOU: 1, CON: 1 },
        // itens: {},
        level: 1,
        model: "https://i.ibb.co/nrg9Czq/bear.png",
        portrait: "https://i.ibb.co/nrg9Czq/bear.png",
        action: (data) => {
            
            if(data.turn == 1 || data.turn == 2 || data.turn == 4){
                
                return 0;
            }

            if(data.turn == 3 || data.turn == 5){
                
                return 1;
            }

            if(data.turn > 5){
                
                return 2;
            }
        }
    },
    {
        id: 2,
        name: "Monster 2",
        attributes: { STR: 1, DEX: 1, INT: 1, AGI: 1, TOU: 1, CON: 1 },
        // itens: {},
        level: 1,
        model: "https://i.ibb.co/nrg9Czq/bear.png",
        portrait: "https://i.ibb.co/nrg9Czq/bear.png",
        action: (data) => {
            
            if(data.turn == 1 || data.turn == 2 || data.turn == 4){
                
                return 0;
            }

            if(data.turn == 3 || data.turn == 5){
                
                return 1;
            }

            if(data.turn > 5){
                
                return 2;
            }
        }
    },
    {
        id: 3,
        name: "Monster 3",
        attributes: { STR: 1, DEX: 1, INT: 1, AGI: 1, TOU: 1, CON: 1 },
        // itens: {},
        level: 1,
        model: "https://i.ibb.co/nrg9Czq/bear.png",
        portrait: "https://i.ibb.co/nrg9Czq/bear.png",
        action: (data) => {
            
            if(data.turn == 1 || data.turn == 2 || data.turn == 4){
                
                return 0;
            }

            if(data.turn == 3 || data.turn == 5){
                
                return 1;
            }

            if(data.turn > 5){
                
                return 2;
            }
        }
    },
    {
        id: 4,
        name: "Monster 4 | Boss",
        attributes: { STR: 1, DEX: 1, INT: 1, AGI: 1, TOU: 1, CON: 1 },
        // itens: {},
        level: 1,
        model: "https://i.ibb.co/LxDbqky/dragon.webp",
        portrait: "https://i.ibb.co/LxDbqky/dragon.webp",
        action: (data) => {
            
            if(data.turn == 1 || data.turn == 2 || data.turn == 4){
                
                return 0;
            }

            if(data.turn == 3 || data.turn == 5){
                
                return 1;
            }

            if(data.turn > 5){
                
                return 2;
            }
        }
    },
];

const returnSelectedMonsters = (monstersIds) => {
    if(monstersIds == "all"){
        return monsters;
    }

    const monstersArray = [];

    monstersIds.forEach((monster) => {
        const monsterData = monsters.find((data) => data.id == monster);
        monstersArray.push(monsterData);
    })

    return monstersArray;
};

module.exports = returnSelectedMonsters;

