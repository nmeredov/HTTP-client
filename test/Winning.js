import chai from 'chai';
const expect = chai.expect;

import * as global from '../util/GlobalVariables.js';
import * as requestBody from '../ThreeBetsInOneRound/WinRequests.js';
import * as body from '../ThreeBetsInOneRound/WinBody.js';
import * as fetchFunction from '../ThreeBetsInOneRound/WinFunctions.js';

describe('initializeSession_request - Checks if response status is successful', async () => {
  let testResponse;
  let testResponseBody;

  before(async () => {
    testResponse = await fetchFunction.initializeSession();
    testResponseBody = await testResponse.json();
    console.log('initializeSession_request', requestBody.initializeSessionBody);
  });

  after(() => {
    console.log('initializeSession_response', testResponseBody);
  });

  it('Assert status code is 200', () => {
    expect(testResponse.status).eql(200);
  });

  it('Assert that licenseePlayerId has correct value', () => {
    expect(testResponseBody.licenseePlayerId).eql(
      body.initializeSessionBodyObjects.licenseePlayerId
    );
  });

  it('Assert that licenseeSessionId is not null', () => {
    expect(testResponseBody.licenseePlayerId).not.eql(null);
  });

  it('Assert that currency has correct value', () => {
    expect(testResponseBody.currency).eql(
      body.initializeSessionBodyObjects.currency
    );
  });
});

describe('completeSession_request - Checks if response status is successful', async () => {
  let testResponse;
  let testResponseBody;

  before(async () => {
    testResponse = await fetchFunction.completeSession();
    testResponseBody = await testResponse.json();
    console.log('completeSession_request', requestBody.completeSessionBody);
  });

  after(() => {
    console.log('completeSession_response', testResponseBody);
  });

  it('Assert status code is 201', () => {
    expect(testResponse.status).eql(201);
  });
});

describe('get_balance_request - Checks balance and if response status is successful', async () => {
  let testResponse;
  let testResponseBody;
  let currentBalance;

  before(async () => {
    testResponse = await fetchFunction.getBalance();
    testResponseBody = await testResponse.json();
    currentBalance = testResponseBody.balances[0].amount;
    console.log('Balance:', currentBalance);
    console.log('get_balance_request', requestBody.getBalanceBody);
  });

  after(() => {
    console.log('get_balance_response', testResponseBody);
  });

  it('Current balance matches the response', () => {
    //impossible to display amount inside 'it' since currentBalance in field 'it' is undefined.
    expect(currentBalance);
  });

  it('Assert status code is 200', () => {
    expect(testResponse.status).eql(200);
  });

  it('Assert no error in response', () => {
    expect(testResponseBody.text).not.eql('error');
  });
});

describe('get_balance_for_table_request - Checks balance for table and if response status is successful', async () => {
  let testResponse;
  let testResponseBody;
  let currentBalance;

  before(async () => {
    testResponse = await fetchFunction.getBalanceForTable();
    testResponseBody = await testResponse.json();
    currentBalance = testResponseBody.balances[0].amount;
    console.log('Balance for table:', currentBalance);
    console.log('get_balance_for_table_request', requestBody.getBalanceForTableBody);
  });

  after(() => {
    console.log('get_balance_for_table_response', testResponseBody);
  });

  it('Current balance for table matches the response', () => {
    //impossible to display amount inside 'it' since currentBalance in field 'it' is undefined.
    expect(currentBalance);
  });

  it('Assert status code is 200', () => {
    expect(testResponse.status).eql(200);
  });

  it('Assert no error in response', () => {
    expect(testResponseBody.text).not.eql('error');
  });
});

describe('withdrawal_response_1 - Checks withdrawal and no error in response', async () => {
  let testResponse;
  let testResponseBody;
  let currentBalance;
  let previousBalance;
  let expectedBalance;

  before(async () => {
    testResponse = await fetchFunction.withdrawal1();
    testResponseBody = await testResponse.json();
    currentBalance = testResponseBody.balances[0].amount;
    previousBalance = currentBalance + global.bet1;
    expectedBalance = previousBalance - global.bet1;
    console.log('Previous balance:', previousBalance);
    console.log('Bet is:', global.bet1);
    console.log('Current balance:', currentBalance);
    console.log('Expected balance:', expectedBalance);
    console.log('withdrawal_request_1', requestBody.withdrawalBody1);
  });

  after(() => {
    console.log('withdrawal_response_1', testResponseBody);
  });

  it('Assert no error in response', () => {
    expect(testResponseBody.text).not.eql('error');
  });

  it('Current balance is equal to Expected balance', () => {
    expect(currentBalance).eql(expectedBalance);
  });
});

describe('withdrawal_request_2 - Checks withdrawal and no error in response', async () => {
  let testResponse;
  let testResponseBody;
  let currentBalance;
  let previousBalance;
  let expectedBalance;

  before(async () => {
    testResponse = await fetchFunction.withdrawal2();
    testResponseBody = await testResponse.json();
    currentBalance = testResponseBody.balances[0].amount;
    previousBalance = currentBalance + global.bet;
    expectedBalance = previousBalance - global.bet;
    console.log('Previous balance:', previousBalance);
    console.log('Bet is:', global.bet);
    console.log('Current balance:', currentBalance);
    console.log('Expected balance:', expectedBalance);
    console.log('withdrawal_request_2', requestBody.withdrawalBody2);
  });

  after(() => {
    console.log('withdrawal_response_2', testResponseBody);
  });

  it('Assert no error in response', () => {
    expect(testResponseBody.text).not.eql('error');
  });

  it('Current balance is equal to Expected balance', () => {
    expect(currentBalance).eql(expectedBalance);
  });
});

describe('final_settlement_request - Checks if response status is successful', async () => {
  let testResponse;
  let testResponseBody;

  before(async () => {
    testResponse = await fetchFunction.finalSettlement();
    testResponseBody = await testResponse.json();
    console.log('Resolution is: Winninig the game ');
    console.log('Payout is:', global.payyof1);
    console.log('final_settlement_request', requestBody.finalSettlementBody);
  });

  after(() => {
    console.log('final_settlement_response', testResponseBody);
  });

  it('Assert status code is 202', () => {
    expect(testResponse.status).eql(202);
  });
});

describe('get_balance_request - Checks balance and if response status is successful', async () => {
  let testResponse;
  let testResponseBody;
  let currentBalance;
  let initialBalance;
  let expectedBalance;

  before(async () => {
    testResponse = await fetchFunction.getBalance();
    testResponseBody = await testResponse.json();
    currentBalance = testResponseBody.balances[0].amount;
    initialBalance = currentBalance - global.payyof1 + global.bet1 + global.bet;
    expectedBalance = initialBalance - global.bet1 - global.bet + global.payyof1;
    console.log('Initial balance:', initialBalance);
    console.log('Current balance:', currentBalance);
    console.log('Expected balance:', expectedBalance);
    console.log('get_balance_request', requestBody.getBalanceBody);
  });

  after(() => {
    console.log('get_balance_response', testResponseBody);
  });

  it('Current balance matches the response', () => {
    //impossible to display amount since currentBalance in field 'it' is undefined.
    expect(currentBalance);
  });

  it('Current balance is equal to Expected balance', () => {
    expect(currentBalance).eql(expectedBalance);
  });

  it('Assert status code is 200', () => {
    expect(testResponse.status).eql(200);
  });

  it('Assert no error in response', () => {
    expect(testResponseBody.text).not.eql('error');
  });
});
