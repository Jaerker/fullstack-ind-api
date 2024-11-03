const response = require('../../responses/index').default;

exports.handler = async (event) => {
  const name = event.queryStringParameters?.name === undefined ? 'John Doe' : event.queryStringParameters.name;
  const baseStats= {
    strength: 2,
    hp: 1,
    speed: 2,
    defense:1
  }

  const character = {
    name: name,
    race: 'Human',
    strength: Math.ceil(Math.random() * 5) + baseStats.strength,
    hp: (Math.ceil(Math.random() * 3) + baseStats.hp)*10,
    speed: Math.ceil(Math.random() * 3) + baseStats.speed,
    defense: Math.ceil(Math.random() * 5)+baseStats.defense,
    level:1
  }

  
  return response(200, character);
};
