const { test, expect } = require('@playwright/test');
const ApiClient = require('../utils/apiClient');
const BankingPage = require('../pages/bankingPage');
const { endpoints } = require('../utils/testData');

test.describe('Banking API Tests', () => {
  let bankingPage;
  let apiClient;

  test.beforeAll(async ({ baseURL }) => {
    apiClient = new ApiClient(baseURL);
    bankingPage = new BankingPage(apiClient);
  });

  endpoints.forEach(endpoint => {
    test(`should successfully ${endpoint.name} with valid inputs`, async () => {
      const response = await bankingPage[endpoint.method](...endpoint.args);
      expect(response.status()).toBe(200);
      const responseBody = await response.json();
      expect(responseBody.status).toBe('success');
      expect(responseBody.message).toBe(endpoint.message);
    });

    test(`should fail to ${endpoint.name} with invalid inputs`, async () => {
      const response = await bankingPage[endpoint.method](...endpoint.invalidArgs);
      expect(response.status()).toBe(400);

      const responseBody = await response.json();
      expect(responseBody.status).toBe('error');
      expect(responseBody.message).toBe(endpoint.errorMessage);
    });
  });
});

