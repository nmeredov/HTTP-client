import fetch from 'node-fetch';
import * as request from './CancelRequests.js';

export async function initializeSession() {
  return fetch(
    'http://10.10.88.52:9092/onewallet/api3/start_session_initialization',
    request.initializeSessionRequest
  ).catch((error) => console.log('error', error));
}

export async function completeSession() {
  return fetch(
    'http://10.10.88.52:9092/onewallet/api3/complete_session_initialization',
    request.completeSessionRequest
  ).catch((error) => console.log('error', error));
}

export async function getBalance() {
  return fetch(
    'http://10.10.88.52:9092/onewallet/api3/get_balance',
    request.getBalanceRequest
  ).catch((error) => console.log('error', error));
}

export async function getBalanceForTable() {
  return fetch(
    'http://10.10.88.52:9092/onewallet/api3/get_balance',
    request.getBalanceForTableRequest
  ).catch((error) => console.log('error', error));
}

export async function withdrawal1() {
  return fetch(
    'http://10.10.88.52:9092/onewallet/api3/withdrawal',
    request.withdrawalRequest1
  ).catch((error) => console.log('error', error));
}

export async function withdrawal2() {
  return fetch(
    'http://10.10.88.52:9092/onewallet/api3/withdrawal',
    request.withdrawalRequest2
  ).catch((error) => console.log('error', error));
}

export async function finalSettlement() {
  return fetch(
    'http://10.10.88.52:9092/onewallet/api3/final_settlement',
    request.finalSettlementRequest
  ).catch((error) => console.log('error', error));
}
