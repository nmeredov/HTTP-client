# HTTP-client
HTTP-client, which can send all crucial API3 requests and parse responses.

HTTP-client covers two basic scenarios: 1) Three bets in one round | 2) Cancelled game


Scenario Three bets in one round:

1. initializeSession
2. completeSession
3. getBalance
4. getBalanceForTable
5. withdrawal1
6. withdrawal2
7. finalSettlement (3 bets win)
8. getBalance

Scenario Cancelled game:

1. initializeSession
2. completeSession
3. getBalance
4. getBalanceForTable
5. withdrawal1
6. withdrawal2
7. finalSettlement (game cancell)
8. getBalance

It is left to add tests (asserts/expects)
