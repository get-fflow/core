import { Before, After, BeforeAll, AfterAll, Status } from '@cucumber/cucumber';

/**
 * Runs once before all scenarios
 */
BeforeAll(function () {
  console.log('Starting BDD test suite...');
});

/**
 * Runs once after all scenarios
 */
AfterAll(function () {
  console.log('BDD test suite completed.');
});

/**
 * Runs before each scenario
 */
Before(function () {
  // Clear context before each scenario
  this.clearContext();
});

/**
 * Runs after each scenario
 */
After(function (scenario) {
  if (scenario.result.status === Status.FAILED) {
    // You can add custom failure handling here
    console.error(`Scenario failed: ${scenario.pickle.name}`);
  }
});