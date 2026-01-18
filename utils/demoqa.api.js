const { demoqaEndpoints } = require('../api/demoqa.endpoints');

async function createUser(request, payload) {
  return request.post(demoqaEndpoints.createUser, { data: payload });
}

async function generateToken(request, payload) {
  return request.post(demoqaEndpoints.generateToken, { data: payload });
}

async function getUserById(request, userId, token) {
  return request.get(demoqaEndpoints.userById(userId), {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
    },
  });
}

module.exports = {
  createUser,
  generateToken,
  getUserById,
};
