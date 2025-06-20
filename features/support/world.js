import { setWorldConstructor } from '@cucumber/cucumber';
import { expect } from 'chai';

/**
 * World provides a isolated context for each scenario.
 * You can add any shared data or utilities here.
 */
class CustomWorld {
  constructor() {
    // Make chai expect available in all step definitions
    this.expect = expect;
    
    // Initialize any shared data
    this.context = {};
  }

  /**
   * Store a value in the scenario context
   * @param {string} key - The key to store the value under
   * @param {*} value - The value to store
   */
  setContext(key, value) {
    this.context[key] = value;
  }

  /**
   * Retrieve a value from the scenario context
   * @param {string} key - The key to retrieve
   * @returns {*} The stored value
   */
  getContext(key) {
    return this.context[key];
  }

  /**
   * Clear the scenario context
   */
  clearContext() {
    this.context = {};
  }
}

setWorldConstructor(CustomWorld);