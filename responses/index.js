exports.default = async (statusCode, body) => {
    return {
      statusCode: statusCode,
      body: JSON.stringify(body),
    };
  };
  