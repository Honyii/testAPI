
    const timestamp = Date.now();
    const username = "yolo" + Math.floor(Math.random() * 30);
    const password = "pswrd" + timestamp;
    const accountId = "acc" + timestamp;
    const senderAccountId = "sendr" + timestamp;
    const recipientAccountId = "recvr" + timestamp;
    const amount = 100.00;
    const inValidAmount = 0;
    const currency = "USD";

  const endpoints = [
        { name: 'create user', message: 'User created successfully', errorMessage: 'Invalid username or password',
        method: 'createUser', args: [username, password], invalidArgs: ["", ""] },
        { name: 'deposit', message: 'Deposit successful', errorMessage: 'Missing required input data', 
        method: 'deposit', args: [username, accountId, amount, currency], invalidArgs: ['', '', 0, ''] },
        { name: 'withdraw', message: 'Withdrawal successful', errorMessage: 'Invalid withdrawal amount',
        method: 'withdraw', args: [accountId, inValidAmount, currency], invalidArgs: ['', 0 , ''] },
        { name: 'get balance', message: 'Balance retrieved successfully', errorMessage: 'Missing required input data',
        method: 'getBalance', args: [accountId], invalidArgs: [undefined] },
        { name: 'send', message: 'Transfer successful', errorMessage: 'Missing required input data',
        method: 'send', args: [senderAccountId, recipientAccountId, amount, currency], invalidArgs: ['', '', 0 , ''] }
      ];
  module.exports = { endpoints };
  