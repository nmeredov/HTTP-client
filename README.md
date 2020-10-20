# HTTP-client
HTTP-client, which can send all crucial API3 requests and parse responses.

HTTP-client with tests covers two basic scenarios: 1) Three bets in one round | 2) Cancelled game

Framework "mocha" with library "chai" are used for the tests.

The project architecture looks like this:
1. Folder "CancelledGame", which contains the following files: 'CancelBody.js', 'CancelFunctions.js', 'CancelRequests.js'.
2. Folder "ThreeBetInOneRound", which contains the following files: 'WinBody.js', 'WinFunctions.js', 'WinRequests.js'.
3. Folder "node_modules".
4. Folder "test", which contains the following files: 'Cancel.js', 'Winning.js'. 
5. Folder "util", which contains the following files: 'GlobalVariables.js', 'RandomGenerator.js', 'WinRequests.js'.
6. README.md
7. package-lock.json
8. package.json


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
Test_Scenario is located in folder "test".
To run the test open terminal in this project and write - npm test test/Winning.js           


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
Test_Scenario is located in folder "test".
To run the test open terminal in this project and write - npm test test/Cancel.js           


To run the certain test write e.g. npm test -- --f 'withdrawal_request_2'