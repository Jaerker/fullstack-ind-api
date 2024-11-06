const response = require('../../responses/index').default;
const names = require('../../data/names.json')
const images = require('../../data/images.json');
exports.handler = async (event) => {
  const baseStats= {
    strength: 2,
    hp: 1,
    speed: 2,
    defense:1
  }

  const characters = [];
  for(let i=0; i<3; i++){

    const gender = Math.random() < 0.5? 'male': 'female';


    characters.push({
      name: names.human[gender][Math.floor(Math.random()*names.human[gender].length)],
      gender: gender,
      race: 'Human',
      strength: Math.ceil(Math.random() * 5) + baseStats.strength,
      hp: (Math.ceil(Math.random() * 3) + baseStats.hp)*10,
      speed: Math.ceil(Math.random() * 3) + baseStats.speed,
      defense: Math.ceil(Math.random() * 5)+baseStats.defense,
      img: images.human[gender][Math.floor(Math.random()*images.human[gender].length)]
    })
  }


  
  return response(200, characters);
};
