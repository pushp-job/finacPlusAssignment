const DEMOQA_BASE_URL = 'https://demoqa.com';

const demoqaEndpoints = {
  baseUrl: DEMOQA_BASE_URL,
  createUser: `${DEMOQA_BASE_URL}/Account/v1/User`,
  generateToken: `${DEMOQA_BASE_URL}/Account/v1/GenerateToken`,
  userById: (userId) => `${DEMOQA_BASE_URL}/Account/v1/User/${userId}`,
};

module.exports = { demoqaEndpoints };
