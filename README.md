# HTTP-client
HTTP-client, which can send all crucial API3 requests and parse responses.

HTTP-client with tests covers two basic scenarios: 1) Three bets in one round | 2) Cancelled game
Framework "mocha" with library "chai" are used for the tests.

To run the test open terminal in this project and write - npm test


Scenario Three bets in one round:

1. initializeSession
2. completeSession
3. getBalance
4. getBalanceForTable
5. withdrawal1
6. withdrawal2
7. finalSettlement (3 bets win)
8. getBalance

All requests of this scenario have been covered with tests.
Scenario is located in folder "test".
To run the test separately open terminal in this project and write - npm test test/threeBetsInOneRound.js           


Scenario Cancelled game:

1. initializeSession
2. completeSession
3. getBalance
4. getBalanceForTable
5. withdrawal1
6. withdrawal2
7. finalSettlement (game cancell)
8. getBalance

All requests of this scenario have been covered with tests.
Scenario is located in folder "test".
To run the test separately open terminal in this project and write - npm test test/cancelledGame.js           


To run the certain test write e.g. npm test -- --f 'Checks withdrawal_request_2'