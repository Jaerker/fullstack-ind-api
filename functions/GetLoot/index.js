const response = require('../../responses/index').default;
const enemies = require('../../data/enemies.json').enemies;
const items = require('../../data/items.json').itemTypes;
exports.handler = async (event) => {
  const {id} = event.pathParameters;

  const enemy = enemies.find(x=> x.id === Number(id));
  if(enemy === null)
    return response(404,`Enemy with ID ${id} was not found`);
  
  const returnValue = []
  const {currency, consumables, weapons, armor} = enemy.drops;
  returnValue.push(...RollForLoot(currency, 'currency'));
  returnValue.push(...RollForLoot(consumables, 'consumables'));
  returnValue.push(...RollForLoot(weapons, 'weapons'));
  returnValue.push(...RollForLoot(armor, 'armor'));

  return response(200, returnValue);
};

function RollForLoot(enemyDropList, enemyDropListName){
  if(enemyDropList.length > 0){
    const returnValue = []
    const itemList =  items.find(x => x.name === enemyDropListName);

    enemyDropList.forEach(item => {
      const lootableItem = itemList.properties.find(x => x.name === item.name);
      if(lootableItem !== null){
        if(Math.random() < item.probability)
          returnValue.push({
          item: lootableItem,
          amount: item.amount
        });
      }
    });

    return returnValue;
  }
return [];
}