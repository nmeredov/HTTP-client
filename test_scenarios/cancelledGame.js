const fetch = require('node-fetch');

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
const gameType = 'holdem';
const tableId = 'HoldemTable00001';
const bet = 5;

let timestamp = new Date().toJSON();
const placeTime = timestamp;

const initializeSessionRequest = JSON.stringify({
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
});

const completeSessionBody = JSON.stringify({
  correlationId: correlationId,
  sessionId: sessionId,
  playerId: '108nit1q4ndf1jx9',
  channel: {
    type: 'Phone',
    wrapped: false,
    os: 'Other'
  }
});

const getBalanceBody = JSON.stringify({
  correlationId: correlationId,
  sessionId: sessionId,
  balanceId: 'combined'
});

const getBalanceForTableBody = JSON.stringify({
  correlationId: correlationId,
  sessionId: sessionId,
  table: {
    tableId: tableId
    // virtualTableId: 'virtualTableId'
  },
  gameType: gameType,
  // gameSubType: 'gameSubType',
  balanceId: 'combined'
});

const withdrawalBody1 = JSON.stringify({
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
    }
  ],
  placeTime: placeTime,
  balanceId: 'combined'
});

const withdrawalBody2 = JSON.stringify({
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
      betId: betId2,
      code: 'HoldemBet0000003',
      amount: bet
    }
  ],
  placeTime: placeTime,
  balanceId: 'combined'
});

const finalSettlementBody = JSON.stringify({
  correlationId: correlationId,
  gameId: gameId,
  reason: {
    type: 'GameCancelled'
  }
});

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
  await fetch(
    'http://10.10.88.52:9092/onewallet/api3/start_session_initialization',
    initializeSessionRequest
  )
    .then((response) => response.text())
    .then((result) => console.log('initializeSession_request', result))
    .catch((error) => console.log('error', error));
}

async function completeSession() {
  await fetch(
    'http://10.10.88.52:9092/onewallet/api3/complete_session_initialization',
    completeSessionRequest
  )
    .then((response) => response.text())
    .then((result) => console.log('completeSession_request', result))
    .catch((error) => console.log('error', error));
}

async function getBalance() {
  await fetch(
    'http://10.10.88.52:9092/onewallet/api3/get_balance',
    getBalanceRequest
  )
    .then((response) => response.text())
    .then((result) => console.log('get_balance_request', result))
    .catch((error) => console.log('error', error));
}

async function getBalanceForTable() {
  await fetch(
    'http://10.10.88.52:9092/onewallet/api3/get_balance',
    getBalanceForTableRequest
  )
    .then((response) => response.text())
    .then((result) => console.log('get_balance_request_for_table', result))
    .catch((error) => console.log('error', error));
  setTimeout(function () {}, 500);
}

async function withdrawal1() {
  await fetch(
    'http://10.10.88.52:9092/onewallet/api3/withdrawal',
    withdrawalRequest1
  )
    .then((response) => response.text())
    .then((result) => console.log('withdrawal_request_1', result))
    .catch((error) => console.log('error', error));
}

async function withdrawal2() {
  await fetch(
    'http://10.10.88.52:9092/onewallet/api3/withdrawal',
    withdrawalRequest2
  )
    .then((response) => response.text())
    .then((result) => console.log('withdrawal_request_2', result))
    .catch((error) => console.log('error', error));
}

async function finalSettlement() {
  await fetch(
    'http://10.10.88.52:9092/onewallet/api3/final_settlement',
    finalSettlementRequest
  )
    .then((response) => response.text())
    .then((result) => console.log('final_settlement_request', result))
    .catch((error) => console.log('error', error));
}

async function cancelledGame() {
  await initializeSession();
  await completeSession();
  await getBalance();
  await getBalanceForTable();
  await withdrawal1();
  await withdrawal2();
  await finalSettlement();
  await getBalance();
}

cancelledGame();
