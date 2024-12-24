'use strict';

const cc = require('currency-codes');

class Transaction {
  /**
   * @param {Object} transactionData
   * @param {string} transactionData.id Унікальний id транзакції
   * @param {number} transactionData.time Час транзакції в секундах в форматі UNIX time
   * @param {string} transactionData.description Опис транзакцій
   * @param {number} transactionData.mcc Код типу транзакції (Merchant Category Code), відповідно ISO 18245
   * @param {number} transactionData.originalMcc Оригінальний код типу транзакції (Merchant Category Code), відповідно ISO 18245
   * @param {boolean} transactionData.hold Статус блокування суми (детальніше - https://en.wikipedia.org/wiki/Authorization_hold)
   * @param {number} transactionData.amount Сума у валюті рахунку в мінімальних одиницях валюти (копійках, центах)
   * @param {number} transactionData.operationAmount Сума у валюті транзакції в мінімальних одиницях валюти (копійках, центах)
   * @param {number} transactionData.currencyCode Код валюти рахунку відповідно ISO 4217
   * @param {number} transactionData.commissionRate Розмір комісії в мінімальних одиницях валюти (копійках, центах)
   * @param {number} transactionData.cashbackAmount Розмір кешбеку в мінімальних одиницях валюти (копійках, центах)
   * @param {number} transactionData.balance Баланс рахунку в мінімальних одиницях валюти (копійках, центах)
   * @param {string|null} [transactionData.comment] Коментар до переказу, уведений користувачем. Якщо не вказаний, поле буде відсутнім
   * @param {string|null} [transactionData.receiptId] Номер квитанції для check.gov.ua. Поле може бути відсутнім
   * @param {string|null} [transactionData.invoiceId] Номер квитанції ФОПа, приходить у випадку якщо це операція із зарахуванням коштів
   * @param {string|null} [transactionData.counterEdrpou] ЄДРПОУ контрагента, присутній лише для елементів виписки рахунків ФОП
   * @param {string|null} [transactionData.counterIban] IBAN контрагента, присутній лише для елементів виписки рахунків ФОП
   * @param {string|null} [transactionData.counterName] Найменування контрагента
   */
  constructor({
    id,
    time,
    description,
    mcc,
    originalMcc,
    hold,
    amount,
    operationAmount,
    currencyCode,
    commissionRate,
    cashbackAmount,
    balance,
    comment,
    receiptId,
    invoiceId,
    counterEdrpou,
    counterIban,
    counterName,
  }) {
    const dateObj = new Date();
    dateObj.setTime(time * 1000);

    this._id = id;
    this._time = dateObj;
    this._description = description;
    this._mcc = mcc;
    this._originalMcc = originalMcc;
    this._hold = hold;
    this._amount = amount;
    this._operationAmount = operationAmount;
    this._currencyCode = cc.number(currencyCode);
    this._commissionRate = commissionRate;
    this._cashbackAmount = cashbackAmount;
    this._balance = balance;
    this._comment = comment || null;
    this._receiptId = receiptId || null;
    this._invoiceId = invoiceId || null;
    this._counterEdrpou = counterEdrpou || null;
    this._counterIban = counterIban || null;
    this._counterName = counterName || null;
  }

  /**
   * @returns {string}
   */
  get id() {
    return this._id;
  }

  /**
   * @returns {Date}
   */
  get time() {
    return this._time;
  }

  /**
   * @returns {string}
   */
  get description() {
    return this._description;
  }

  /**
   * @returns {number}
   */
  get mcc() {
    return this._mcc;
  }

  /**
   * @returns {number}
   */
  get originalMcc() {
    return this._originalMcc;
  }

  /**
   * @returns {boolean}
   */
  get hold() {
    return this._hold;
  }

  /**
   * @returns {number}
   */
  get amount() {
    return this._amount;
  }

  /**
   * @returns {number}
   */
  get operationAmount() {
    return this._operationAmount;
  }

  /**
   * @returns {CurrencyCodeRecord}
   */
  get currencyCode() {
    return this._currencyCode;
  }

  /**
   * @returns {number}
   */
  get commissionRate() {
    return this._commissionRate;
  }

  /**
   * @returns {number}
   */
  get cashbackAmount() {
    return this._cashbackAmount;
  }

  /**
   * @returns {number}
   */
  get balance() {
    return this._balance;
  }

  /**
   * @returns {string|null}
   */
  get comment() {
    return this._comment;
  }

  /**
   * @returns {string|null}
   */
  get receiptId() {
    return this._receiptId;
  }

  /**
   * @returns {string|null}
   */
  get invoiceId() {
    return this._invoiceId;
  }

  /**
   * @returns {string|null}
   */
  get counterEdrpou() {
    return this._counterEdrpou;
  }

  /**
   * @returns {string|null}
   */
  get counterIban() {
    return this._counterIban;
  }

  /**
   * @returns {string|null}
   */
  get counterName() {
    return this._counterName;
  }
}

module.exports = Transaction;
