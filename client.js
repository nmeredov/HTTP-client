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

// console.log(correlationId);
// console.log(sessionId);
// console.log(licenseeSessionId);



const raw1 = JSON.stringify({
  correlationId: correlationId,
  sessionId: sessionId,
  balanceId: 'combined',
  casinoId: 'xtreme0000000001',
  licenseeSessionId: licenseeSessionId,
  currency: 'EUR',
  licenseePlayerId: 'vm000000000001',
  channel: {
    type: 'Phone',
    wrapped: false,
    os: 'Other'
  },
  clientIpAddress: '127.0.0.1'
});

const raw2 = JSON.stringify({
  correlationId: correlationId,
  sessionId: sessionId,
  balanceId: 'combined'
});

const requestOptions1 = {
  method: 'PUT',
  body: raw1,
  headers: { 'Content-Type': 'application/json' }
};

const requestOptions2 = {
  method: 'PUT',
  body: raw1,
  headers: { 'Content-Type': 'application/json' }
};

const requestOptions3 = {
  method: 'POST',
  body: raw2,
  headers: { 'Content-Type': 'application/json' }
};

fetch(
  'http://10.10.88.52:9092/onewallet/api3/start_session_initialization',
  requestOptions1
)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log('error', error));

fetch(
  'http://10.10.88.52:9092/onewallet/api3/complete_session_initialization',
  requestOptions2
)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log('error', error));

fetch('http://10.10.88.52:9092/onewallet/api3/get_balance', requestOptions3)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log('error', error));
