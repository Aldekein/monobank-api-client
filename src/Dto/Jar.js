'use strict';

const cc = require('currency-codes');

class Jar {
  /**
   * @param {string} id
   * @param {string} sendId
   * @param {string} title
   * @param {string} description
   * @param {int} currencyCode
   * @param {int} balance
   * @param {int} goal
   */
  constructor({ id, sendId, title, description, currencyCode, balance, goal }) {
    this._id = id;
    this._sendId = sendId;
    this._title = title;
    this._description = description;

    // Validate currencyCode
    const validCurrency = cc.number(currencyCode);
    if (!validCurrency) {
      throw new Error(`Invalid currencyCode value "${currencyCode}"`);
    }
    this._currencyCode = validCurrency;

    this._balance = balance;
    this._goal = goal;
  }

  /**
   * @returns {string}
   */
  get id() {
    return this._id;
  }

  /**
   * @returns {string}
   */
  get sendId() {
    return this._sendId;
  }

  /**
   * @returns {string}
   */
  get title() {
    return this._title;
  }

  /**
   * @returns {string}
   */
  get description() {
    return this._description;
  }

  /**
   * @returns {CurrencyCodeRecord}
   */
  get currencyCode() {
    return this._currencyCode;
  }

  /**
   * @returns {int}
   */
  get balance() {
    return this._balance;
  }

  /**
   * @returns {int}
   */
  get goal() {
    return this._goal;
  }
}

module.exports = Jar;
