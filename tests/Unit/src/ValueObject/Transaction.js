'use strict';

const assert = require('chai').assert;
const Transaction = require('src/Dto/Transaction');
const cc = require('currency-codes');

describe('src/Dto/Transaction', () => {
  it('should construct a correct Transaction object', function () {
    const transactionData = {
      id: 'trx123',
      time: 1693234800,
      description: 'Test Transaction',
      mcc: 1234,
      originalMcc: 5678,
      hold: true,
      amount: 100000,
      operationAmount: 95000,
      currencyCode: 980,
      commissionRate: 500,
      cashbackAmount: 200,
      balance: 5000000,
      comment: 'Test Comment',
      receiptId: 'rec123',
      invoiceId: 'inv123',
      counterEdrpou: '12345678',
      counterIban: 'UA123456789012345678901234567',
      counterName: 'Test Counterparty',
    };

    const transaction = new Transaction(transactionData);

    assert.equal(transaction.id, transactionData.id);
    assert.equal(transaction.time.getTime() / 1000, transactionData.time);
    assert.equal(transaction.description, transactionData.description);
    assert.equal(transaction.mcc, transactionData.mcc);
    assert.equal(transaction.originalMcc, transactionData.originalMcc);
    assert.equal(transaction.hold, transactionData.hold);
    assert.equal(transaction.amount, transactionData.amount);
    assert.equal(transaction.operationAmount, transactionData.operationAmount);
    assert.deepEqual(transaction.currencyCode, cc.number(transactionData.currencyCode));
    assert.equal(transaction.commissionRate, transactionData.commissionRate);
    assert.equal(transaction.cashbackAmount, transactionData.cashbackAmount);
    assert.equal(transaction.balance, transactionData.balance);
    assert.equal(transaction.comment, transactionData.comment);
    assert.equal(transaction.receiptId, transactionData.receiptId);
    assert.equal(transaction.invoiceId, transactionData.invoiceId);
    assert.equal(transaction.counterEdrpou, transactionData.counterEdrpou);
    assert.equal(transaction.counterIban, transactionData.counterIban);
    assert.equal(transaction.counterName, transactionData.counterName);
  });

  it('should handle missing optional fields gracefully', function () {
    const transactionData = {
      id: 'trx123',
      time: 1693234800,
      description: 'Test Transaction',
      mcc: 1234,
      originalMcc: 5678,
      hold: false,
      amount: 100000,
      operationAmount: 95000,
      currencyCode: 980,
      commissionRate: 500,
      cashbackAmount: 200,
      balance: 5000000,
    };

    const transaction = new Transaction(transactionData);

    assert.isNull(transaction.comment);
    assert.isNull(transaction.receiptId);
    assert.isNull(transaction.invoiceId);
    assert.isNull(transaction.counterEdrpou);
    assert.isNull(transaction.counterIban);
    assert.isNull(transaction.counterName);
  });
});
