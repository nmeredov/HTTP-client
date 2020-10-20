import * as global from '../util/GlobalVariables.js';

export const initializeSessionBodyObjects = {
  correlationId: global.correlationId,
  sessionId: global.sessionId,
  casinoId: global.casinoId,
  licenseeSessionId: global.licenseeSessionId,
  currency: global.currency,
  licenseePlayerId: global.licenseePlayerId,
  channel: {
    type: global.channelType,
    wrapped: false,
    os: global.channelOs
  },
  clientIpAddress: global.clientIpAddress
};

export const completeSessionBodyObjects = {
  correlationId: global.correlationId,
  sessionId: global.sessionId,
  playerId: global.playerId,
  channel: {
    type: global.channelType,
    wrapped: false,
    os: global.channelOs
  }
};

export const getBalanceBodyObjects = {
  correlationId: global.correlationId,
  sessionId: global.sessionId,
  balanceId: global.balanceId
};

export const getBalanceForTableBodyObjects = {
  correlationId: global.correlationId,
  sessionId: global.sessionId,
  table: {
    tableId: global.tableId
    // virtualTableId: 'virtualTableId'
  },
  gameType: global.gameType,
  // gameSubType: 'gameSubType',
  balanceId: global.balanceId
};

export const withdrawalBodyObjects1 = {
  correlationId: global.correlationId,
  gameId: global.gameId1,
  sessionId: global.sessionId,
  txId: global.txId1,
  gameType: global.gameType,
  // gameSubType: 'gameSubType',
  table: {
    tableId: global.tableId
    // virtualTableId: 'virtualTableId'
  },
  bets: [
    {
      betId: global.betId1,
      code: 'HoldemBet0000001',
      amount: global.bet
    },
    {
      betId: global.betId2,
      code: 'HoldemBet0000002',
      amount: global.bet
    }
  ],
  placeTime: global.placeTime,
  balanceId: global.balanceId
};

export const withdrawalBodyObjects2 = {
  correlationId: global.correlationId,
  gameId: global.gameId1,
  sessionId: global.sessionId,
  txId: global.txId2,
  gameType: global.gameType,
  // gameSubType: 'gameSubType',
  table: {
    tableId: global.tableId
    // virtualTableId: 'virtualTableId'
  },
  bets: [
    {
      betId: global.betId3,
      code: 'HoldemBet0000003',
      amount: global.bet
    }
  ],
  placeTime: global.placeTime,
  balanceId: global.balanceId
};

export const finalSettlementBodyObjects = {
  correlationId: global.correlationId,
  gameId: global.gameId1,
  reason: {
    type: 'GameFinished',
    finishedTransactions: [
      {
        txId: global.txId1,
        payoffs: [
          {
            betId: global.betId1,
            amount: global.payyof
          },
          {
            betId: global.betId2,
            amount: global.payyof
          }
        ]
      },
      {
        txId: global.txId2,
        payoffs: [
          {
            betId: global.betId3,
            amount: global.payyof
          }
        ]
      }
    ]
  }
};
