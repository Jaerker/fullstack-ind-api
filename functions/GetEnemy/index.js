const response = require('../../responses/index').default;
const enemies = require('../../data/enemies.json');

exports.handler = async (event) => {
  const level = event.queryStringParameters?.level === undefined ? 1 : event.queryStringParameters.level;
  const enemy = enemies.enemies[Math.floor(Math.random() * enemies.enemies.length)];
  
  
  return response(200, enemy);
};
