const fetch = require('node-fetch');

const sessionId = '2a47ffce1103cf1313a153390f23ad86b71ef89e';

const raw = JSON.stringify ({
  'correlationId':'00000174c629110700340000062a95c9',
  'sessionId':sessionId,
  'balanceId':'combined'
})

const requestOptions = {
  method: 'POST',
  body: raw,
  headers: {'Content-Type' : 'application/json'}
}

 fetch('http://10.10.88.52:9092/onewallet/api3/get_balance', requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error))