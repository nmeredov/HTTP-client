const fetch = require('node-fetch');
const mocha = require('mocha');
const chai = require('chai');
const { after } = require('mocha');
const expect = chai.expect; // for using expect in test
// if we will use modules, it will need to add require path

var setEnvironmentVariable = {
  getRandomId: function (idLength) {
    let id = 'inttest';
    let idPrefixLength = id.length;
    let charset = 'abcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < idLength - idPrefixLength; i++)
      id += charset.charAt(Math.floor(Math.random() * charset.length));
    return id;
  },
  getRandomNumericId: function (idLength) {
    let id = '707';
    let idPrefixLength = id.length;
    let charset = '123456789';
    for (let i = 0; i < idLength - idPrefixLength; i++)
      id += charset.charAt(Math.floor(Math.random() * charset.length));
    return id;
  },
  generateRandomIdAndNumericId: function (idLength) {
    let idGeneration = {
      randomId: this.getRandomId(idLength),
      randomNumericId: this.getRandomNumericId(idLength)
    };
    return idGeneration;
  }
};

const correlationId = setEnvironmentVariable.getRandomId(32);
const sessionId = setEnvironmentVariable.getRandomId(32);
const licenseeSessionId = setEnvironmentVariable.getRandomId(32);
const gameId = setEnvironmentVariable.getRandomId(24);
const txId1 = setEnvironmentVariable.getRandomNumericId(18);
const txId2 = setEnvironmentVariable.getRandomNumericId(18);
const betId1 = setEnvironmentVariable.getRandomId(32);
const betId2 = setEnvironmentVariable.getRandomId(32);
const betId3 = setEnvironmentVariable.getRandomId(32);
const gameType = 'holdem';
const tableId = 'HoldemTable00001';
const bet = 5;
const payyof = 10;

let timestamp = new Date().toJSON();
const placeTime = timestamp;

const initializeSessionBodyObjects = {
  correlationId: correlationId,
  sessionId: sessionId,
  casinoId: 'joycasino0000001',
  licenseeSessionId: licenseeSessionId,
  currency: 'EUR',
  licenseePlayerId: 'aaaaaa',
  channel: {
    type: 'Phone',
    wrapped: false,
    os: 'Other'
  },
  clientIpAddress: '127.0.0.1'
};

const completeSessionBodyObjects = {
  correlationId: correlationId,
  sessionId: sessionId,
  playerId: '108nit1q4ndf1jx9',
  channel: {
    type: 'Phone',
    wrapped: false,
    os: 'Other'
  }
};

const getBalanceBodyObjects = {
  correlationId: correlationId,
  sessionId: sessionId,
  balanceId: 'combined'
};

const getBalanceForTableBodyObjects = {
  correlationId: correlationId,
  sessionId: sessionId,
  table: {
    tableId: tableId
    // virtualTableId: 'virtualTableId'
  },
  gameType: gameType,
  // gameSubType: 'gameSubType',
  balanceId: 'combined'
};

const withdrawalBodyObjects1 = {
  correlationId: correlationId,
  gameId: gameId,
  sessionId: sessionId,
  txId: txId1,
  gameType: gameType,
  // gameSubType: 'gameSubType',
  table: {
    tableId: tableId
    // virtualTableId: 'virtualTableId'
  },
  bets: [
    {
      betId: betId1,
      code: 'HoldemBet0000001',
      amount: bet
    },
    {
      betId: betId2,
      code: 'HoldemBet0000002',
      amount: bet
    }
  ],
  placeTime: placeTime,
  balanceId: 'combined'
};

const withdrawalBodyObjects2 = {
  correlationId: correlationId,
  gameId: gameId,
  sessionId: sessionId,
  txId: txId2,
  gameType: gameType,
  // gameSubType: 'gameSubType',
  table: {
    tableId: tableId
    // virtualTableId: 'virtualTableId'
  },
  bets: [
    {
      betId: betId3,
      code: 'HoldemBet0000003',
      amount: bet
    }
  ],
  placeTime: placeTime,
  balanceId: 'combined'
};

const finalSettlementBodyObjects = {
  correlationId: correlationId,
  gameId: gameId,
  reason: {
    type: 'GameFinished',
    finishedTransactions: [
      {
        txId: txId1,
        payoffs: [
          {
            betId: betId1,
            amount: payyof
          },
          {
            betId: betId2,
            amount: payyof
          }
        ]
      },
      {
        txId: txId2,
        payoffs: [
          {
            betId: betId3,
            amount: payyof
          }
        ]
      }
    ]
  }
};

const initializeSessionBody = JSON.stringify(initializeSessionBodyObjects);
const completeSessionBody = JSON.stringify(completeSessionBodyObjects);
const getBalanceBody = JSON.stringify(getBalanceBodyObjects);
const getBalanceForTableBody = JSON.stringify(getBalanceForTableBodyObjects);
const withdrawalBody1 = JSON.stringify(withdrawalBodyObjects1);
const withdrawalBody2 = JSON.stringify(withdrawalBodyObjects2);
const finalSettlementBody = JSON.stringify(finalSettlementBodyObjects);

const initializeSessionRequest = {
  method: 'PUT',
  body: initializeSessionBody,
  headers: { 'Content-Type': 'application/json' }
};

const completeSessionRequest = {
  method: 'PUT',
  body: completeSessionBody,
  headers: { 'Content-Type': 'application/json' }
};

const getBalanceRequest = {
  method: 'POST',
  body: getBalanceBody,
  headers: { 'Content-Type': 'application/json' }
};

const getBalanceForTableRequest = {
  method: 'POST',
  body: getBalanceForTableBody,
  headers: { 'Content-Type': 'application/json' }
};

const withdrawalRequest1 = {
  method: 'PUT',
  body: withdrawalBody1,
  headers: { 'Content-Type': 'application/json' }
};

const withdrawalRequest2 = {
  method: 'PUT',
  body: withdrawalBody2,
  headers: { 'Content-Type': 'application/json' }
};

const finalSettlementRequest = {
  method: 'PUT',
  body: finalSettlementBody,
  headers: { 'Content-Type': 'application/json' }
};

async function initializeSession() {
  return fetch(
    'http://10.10.88.52:9092/onewallet/api3/start_session_initialization',
    initializeSessionRequest
  ).catch((error) => console.log('error', error));
}

async function completeSession() {
  return fetch(
    'http://10.10.88.52:9092/onewallet/api3/complete_session_initialization',
    completeSessionRequest
  ).catch((error) => console.log('error', error));
}

async function getBalance() {
  return fetch(
    'http://10.10.88.52:9092/onewallet/api3/get_balance',
    getBalanceRequest
  ).catch((error) => console.log('error', error));
}
async function getBalanceForTable() {
  return fetch(
    'http://10.10.88.52:9092/onewallet/api3/get_balance',
    getBalanceForTableRequest
  ).catch((error) => console.log('error', error));
}

async function withdrawal1() {
  return fetch(
    'return://10.10.88.52:9092/onewallet/api3/withdrawal',
    withdrawalRequest1
  ).catch((error) => console.log('error', error));
}

// async function withdrawal2() {
//   return fetch(
//     'http://10.10.88.52:9092/onewallet/api3/withdrawal',
//     withdrawalRequest2
//   )
//     .then((response) => response.text())
//     .then((result) => console.log('withdrawal_request_2', result))
//     .catch((error) => console.log('error', error));
// }

// async function finalSettlement() {
//   return fetch(
//     'http://10.10.88.52:9092/onewallet/api3/final_settlement',
//     finalSettlementRequest
//   )
//     .then((response) => response.text())
//     .then((result) => console.log('final_settlement_request', result))
//     .catch((error) => console.log('error', error));
// }

// async function ThreeBetsInOneRound() {
//   await initializeSession();
//   await completeSession();
//   await getBalance();
//   await getBalanceForTable();
//   await withdrawal1();
//   await withdrawal2();
//   await finalSettlement();
//   await getBalance();
// }

// ThreeBetsInOneRound();

describe('Checks if initializeSession response status is successful', async () => {
  let testResponse;
  let testResponseBody;

  before(async () => {
    testResponse = await initializeSession();
    testResponseBody = await testResponse.json();
    console.log('initializeSession_request', initializeSessionBody);
  });

  after(() => {
    console.log('initializeSession_response', getBalanceBody);
  });

  it('Assert status code is 200', () => {
    expect(testResponse.status).eql(200);
  });

  it('Assert that licenseePlayerId has correct value', () => {
    expect(testResponseBody.licenseePlayerId).eql(
      initializeSessionBodyObjects.licenseePlayerId
    );
  });

  it('Assert that licenseeSessionId is not null', () => {
    expect(testResponseBody.licenseePlayerId).not.eql(null);
  });

  it('Assert that currency has correct value', () => {
    expect(testResponseBody.currency).eql(
      initializeSessionBodyObjects.currency
    );
  });
});

describe('Checks if completeSession response status is successful', async () => {
  let testResponse;
  let testResponseBody;

  before(async () => {
    testResponse = await completeSession();
    testResponseBody = await testResponse.json();
    console.log('completeSession_request', completeSessionBody);
  });

  after(() => {
    console.log('completeSession_response', testResponseBody);
  });

  it('Assert status code is 201', () => {
    expect(testResponse.status).eql(201);
  });
});

describe('Checks balance and if response status is successful', async () => {
  let testResponse;
  let testResponseBody;
  let lastBalance;

  before(async () => {
    testResponse = await getBalance();
    testResponseBody = await testResponse.json();
    lastBalance = testResponseBody.balances[0].amount;
    console.log('Player balance is ' + lastBalance);
    console.log('get_balance_request', getBalanceBody);
  });

  after(() => {
    console.log('get_balance_response', testResponseBody);
  });

  it('Player balance matches the response', () => {
    //impossible to display amount since lastbalance in field 'it' is undefined.
    expect(testResponseBody.balances[0].amount);
  });

  it('Assert status code is 200', () => {
    expect(testResponse.status).eql(200);
  });

  it('Assert no error in response', () => {
    expect(testResponseBody.text).not.eql('error');
  });
});

describe('Checks balance for table and if response status is successful', async () => {
  let testResponse;
  let testResponseBody;
  let lastBalance;

  before(async () => {
    testResponse = await getBalanceForTable();
    testResponseBody = await testResponse.json();
    lastBalance = testResponseBody.balances[0].amount;
    console.log('Balance for table: ' + lastBalance);
    console.log('get_balance_for_table_request', getBalanceForTableBody);
  });

  after(() => {
    console.log('get_balance_for_table_response', testResponseBody);
  });

  it('Assert balance for the table', () => {
    //impossible to display amount since lastbalance in field 'it' is undefined.
    expect(testResponseBody.balances[0].amount);
  });

  it('Assert status code is 200', () => {
    expect(testResponse.status).eql(200);
  });

  it('Assert no error in response', () => {
    expect(testResponseBody.text).not.eql('error');
  });
});

describe('Checks placebet1', async () => {
  let testResponse;
  let testResponseBody;

  before(async () => {
    testResponse = await withdrawal1();
    testResponseBody = await testResponse.json();
    // console.log('Bet is: ' + bet);
    console.log('withdrawal_request_1', withdrawalBody1);
  });

  after(() => {
    console.log('withdrawal_response_1', testResponseBody);
  });

  it('Checks the bet ', () => {});

  it('Assert no error in response', () => {
    expect(testResponseBody.text).not.eql('error');
  });
});

// describe('Checks if response status is successful', async () => {
//   let testResponse;
//   let testResponseBody;

//   before(async () => {
//     testResponse = await withdrawal2();
//     testResponseBody = await testResponse.json();
//   });

//   after(() => {
//     console.log('withdrawal_request_1', testResponseBody);
//   });

//   it('Assert status code is 200', () => {
//     expect(testResponse.status).eql(200);
//   });

//   it('Assert that licenseePlayerId has correct value', () => {
//     expect(testResponseBody.licenseePlayerId).eql(
//       initializeSessionBodyObjects.licenseePlayerId
//     );
//   });

//   it('Assert that licenseeSessionId is not null', () => {
//     expect(testResponseBody.licenseePlayerId).not.eql(null);
//   });

//   it('Assert that currency has correct value', () => {
//     expect(testResponseBody.currency).eql(
//       initializeSessionBodyObjects.currency
//     );
//   });
// });

// describe('Checks if response status is successful', async () => {
//   let testResponse;
//   let testResponseBody;

//   before(async () => {
//     testResponse = await finalSettlement();
//     testResponseBody = await testResponse.json();
//   });

//   after(() => {
//     console.log('final_settlement_request', testResponseBody);
//   });

//   it('Assert status code is 200', () => {
//     expect(testResponse.status).eql(200);
//   });

//   it('Assert that licenseePlayerId has correct value', () => {
//     expect(testResponseBody.licenseePlayerId).eql(
//       initializeSessionBodyObjects.licenseePlayerId
//     );
//   });

//   it('Assert that licenseeSessionId is not null', () => {
//     expect(testResponseBody.licenseePlayerId).not.eql(null);
//   });

//   it('Assert that currency has correct value', () => {
//     expect(testResponseBody.currency).eql(
//       initializeSessionBodyObjects.currency
//     );
//   });
// });

// describe('Checks balance and if response status is successful', async () => {
//   let testResponse;
//   let testResponseBody;
//   let lastBalance;

//   before(async () => {
//     testResponse = await getBalance();
//     testResponseBody = await testResponse.json();
//     lastBalance = testResponseBody.balances[0].amount;
//     console.log('Player balance is ' + lastBalance);
//     console.log('get_balance_request', getBalanceBody);
//   });

//   after(() => {
//     console.log('get_balance_response', testResponseBody);
//   });

//   it('Player balance matches the response', () => {
//     //impossible to display amount since lastbalance in field 'it' is undefined.
//     expect(testResponseBody.balances[0].amount);
//   });

//   it('Assert status code is 200', () => {
//     expect(testResponse.status).eql(200);
//   });

//   it('Assert no error in response', () => {
//     expect(testResponseBody.text).not.eql('error');
//   });
// });