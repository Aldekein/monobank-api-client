'use strict';

const assert = require('chai').assert;
const Jar = require('src/Dto/Jar');

describe('src/Dto/Jar', () => {
  it('should construct a correct Jar object', function () {
    const jarData = {
      id: 'jar123',
      sendId: 'send123',
      title: 'Test Jar',
      description: 'This is a test jar',
      currencyCode: 980,
      balance: 1000000,
      goal: 5000000,
    };

    const jar = new Jar(jarData);

    assert.equal(jar.id, jarData.id);
    assert.equal(jar.sendId, jarData.sendId);
    assert.equal(jar.title, jarData.title);
    assert.equal(jar.description, jarData.description);
    assert.equal(jar.currencyCode.code, 'UAH'); // Ensure correct currency
    assert.equal(jar.balance, jarData.balance);
    assert.equal(jar.goal, jarData.goal);
  });

  it('should throw an error for invalid currencyCode', function () {
    const jarData = {
      id: 'jar123',
      sendId: 'send123',
      title: 'Test Jar',
      description: 'This is a test jar',
      currencyCode: 9999, // Invalid currency code
      balance: 1000000,
      goal: 5000000,
    };

    assert.throws(() => new Jar(jarData), Error, /^Invalid currencyCode value/);
  });
});
