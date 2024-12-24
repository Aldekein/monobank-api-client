'use strict';

const Account = require('./Account');
const Jar = require('./Jar');

class UserInfo {
  /**
   * @param {string} clientId
   * @param {string} name
   * @param {string} webHookUrl
   * @param {string} permissions
   * @param {Account[]} accounts
   * @param {Jar[]} jars
   */
  constructor({ clientId, name, webHookUrl, permissions, accounts, jars }) {
    this._clientId = clientId;
    this._name = name;
    this._webHookUrl = webHookUrl;
    this._permissions = permissions;
    this._accounts = accounts;
    this._jars = jars;
  }

  /**
   * @returns {string}
   */
  get clientId() {
    return this._clientId;
  }

  /**
   * @returns {string}
   */
  get name() {
    return this._name;
  }

  /**
   * @returns {string}
   */
  get webHookUrl() {
    return this._webHookUrl;
  }

  /**
   * @returns {string}
   */
  get permissions() {
    return this._permissions;
  }

  /**
   * @returns {Account[]}
   */
  get accounts() {
    return this._accounts;
  }

  /**
   * @returns {Jar[]}
   */
  get jars() {
    return this._jars;
  }
}

module.exports = UserInfo;
