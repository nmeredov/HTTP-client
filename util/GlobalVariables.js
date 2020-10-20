import { setEnvironmentVariable } from './RandomGenerator.js'

export const gameType = 'holdem';
export const tableId = 'HoldemTable00001';
export const bet = 5;
export const bet1 = 10; // two bet in first transaction
export const payyof = 10;
export const payyof1 = 30; // two payyof in first transaction and one payyof in second transaction
let timestamp = new Date().toJSON();
export const placeTime = timestamp;
export const casinoId = 'joycasino0000001';
export const currency = 'EUR';
export const licenseePlayerId = 'aaaaaa';
export const playerId = '108nit1q4ndf1jx9';
export const balanceId = 'combined';
export const channelType = 'Phone';
export const channelOs = 'Other';
export const clientIpAddress = '127.0.0.1';

export const correlationId = setEnvironmentVariable.getRandomId(32);
export const sessionId = setEnvironmentVariable.getRandomId(32);
export const licenseeSessionId = setEnvironmentVariable.getRandomId(32);
export const gameId = setEnvironmentVariable.getRandomId(24);
export const gameId1 = setEnvironmentVariable.getRandomId(24);
export const txId1 = setEnvironmentVariable.getRandomNumericId(18);
export const txId2 = setEnvironmentVariable.getRandomNumericId(18);
export const betId1 = setEnvironmentVariable.getRandomId(32);
export const betId2 = setEnvironmentVariable.getRandomId(32);
export const betId3 = setEnvironmentVariable.getRandomId(32);
