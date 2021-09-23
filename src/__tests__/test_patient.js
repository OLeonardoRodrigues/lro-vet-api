test('GET /patient', async () => {
  const axios = require('axios');
  const response = await axios('http://localhost:8084/patient');

  expect(JSON.stringify(response.data)).toBe(JSON.stringify({
    'Method': 'get',
    'Route': 'patient'
  }));

  expect(response.status).toBe(200);
})
