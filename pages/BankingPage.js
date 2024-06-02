class BankingPage {
    constructor(apiClient) {
      this.apiClient = apiClient;
    }
  
    async createUser(username, password) {
      const response = await this.apiClient.post('/create_user', { username, password });
      return response;
    }
  
    async deposit(username, accountId, amount, currency) {
      const response = await this.apiClient.post('/deposit', { username, accountId, amount, currency });
      return response;
    }
  
    async withdraw(accountId, amount, currency ) {
      const response = await this.apiClient.post('/withdrawal', { accountId, amount, currency });
      return response;
    }
  
    async getBalance(accountId) {
        const response = await this.apiClient.get(`/get_balance?accountId=${accountId}`);
        return response;
      }
  
    async send(senderAccountId, recipientAccountId, amount, currency) {
      const response = await this.apiClient.post('/send', { senderAccountId, recipientAccountId, amount, currency });
      return response;
    }
  }
  
  module.exports = BankingPage;