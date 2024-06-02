const { request } = require('@playwright/test');

class ApiClient {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    async post(endpoint, data) {
        const context = await request.newContext();
        const response = await context.post(`${this.baseURL}${endpoint}`, {
            data: data
        });
        return response;
    }
    async get(endpoint) {
        const context = await request.newContext();
        const response = await context.get(`${this.baseURL}${endpoint}`);
        return response;
      }
   
}

module.exports = ApiClient;