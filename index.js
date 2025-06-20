/**
 * @fflow/core - Core BDD testing package for fflow
 * 
 * This module exports utilities and helpers for writing BDD tests
 */

const { Given, When, Then, Before, After, BeforeAll, AfterAll } = require('@cucumber/cucumber');
const { setWorldConstructor } = require('@cucumber/cucumber');
const { expect } = require('chai');

// Re-export Cucumber's BDD functions
module.exports = {
  // Step definition functions
  Given,
  When,
  Then,
  
  // Hook functions
  Before,
  After,
  BeforeAll,
  AfterAll,
  
  // World constructor setter
  setWorldConstructor,
  
  // Assertion library
  expect,
  
  // Helper to create a basic World class
  createWorld: (extensions = {}) => {
    return class World {
      constructor() {
        this.expect = expect;
        this.context = {};
        
        // Apply any extensions
        Object.assign(this, extensions);
      }
      
      setContext(key, value) {
        this.context[key] = value;
      }
      
      getContext(key) {
        return this.context[key];
      }
      
      clearContext() {
        this.context = {};
      }
    };
  }
};