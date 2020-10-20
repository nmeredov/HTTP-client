import * as body from './CancelBody.js';

export const initializeSessionBody = JSON.stringify(body.initializeSessionBodyObjects);
export const completeSessionBody = JSON.stringify(body.completeSessionBodyObjects);
export const getBalanceBody = JSON.stringify(body.getBalanceBodyObjects);
export const getBalanceForTableBody = JSON.stringify(body.getBalanceForTableBodyObjects);
export const withdrawalBody1 = JSON.stringify(body.withdrawalBodyObjects1);
export const withdrawalBody2 = JSON.stringify(body.withdrawalBodyObjects2);
export const finalSettlementBody = JSON.stringify(body.finalSettlementBodyObjects);

export const initializeSessionRequest = {
  method: 'PUT',
  body: initializeSessionBody,
  headers: { 'Content-Type': 'application/json' }
};

export const completeSessionRequest = {
  method: 'PUT',
  body: completeSessionBody,
  headers: { 'Content-Type': 'application/json' }
};

export const getBalanceRequest = {
  method: 'POST',
  body: getBalanceBody,
  headers: { 'Content-Type': 'application/json' }
};

export const getBalanceForTableRequest = {
  method: 'POST',
  body: getBalanceForTableBody,
  headers: { 'Content-Type': 'application/json' }
};

export const withdrawalRequest1 = {
  method: 'PUT',
  body: withdrawalBody1,
  headers: { 'Content-Type': 'application/json' }
};

export const withdrawalRequest2 = {
  method: 'PUT',
  body: withdrawalBody2,
  headers: { 'Content-Type': 'application/json' }
};

export const finalSettlementRequest = {
  method: 'PUT',
  body: finalSettlementBody,
  headers: { 'Content-Type': 'application/json' }
};
