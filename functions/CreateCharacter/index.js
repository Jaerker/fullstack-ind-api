const response = require('../../responses/index').default;

exports.handler = async (event) => {
  
  return response(200, 'This works!');
};
