/**
 * Example: Using @fflow/core in your project
 * 
 * This demonstrates how to use the @fflow/core package
 * to write BDD tests in your application
 */

// Import the BDD utilities from @fflow/core
const { Given, When, Then, expect, createWorld, setWorldConstructor } = require('@fflow/core');

// Example 1: Simple step definitions
Given('I have a user with name {string}', function(name) {
  this.setContext('userName', name);
});

When('I greet the user', function() {
  const name = this.getContext('userName');
  const greeting = `Hello, ${name}!`;
  this.setContext('greeting', greeting);
});

Then('the greeting should be {string}', function(expectedGreeting) {
  const actualGreeting = this.getContext('greeting');
  this.expect(actualGreeting).to.equal(expectedGreeting);
});

// Example 2: Custom World with API client
const CustomWorld = createWorld({
  apiClient: {
    get: async (url) => {
      // Simulated API call
      return { status: 200, data: { message: 'Success' } };
    },
    post: async (url, data) => {
      return { status: 201, data: { id: 123, ...data } };
    }
  },
  
  async fetchUser(userId) {
    const response = await this.apiClient.get(`/users/${userId}`);
    return response.data;
  }
});

// Set the custom world
setWorldConstructor(CustomWorld);

// Example 3: Step with async operations
When('I fetch user {int} from the API', async function(userId) {
  const user = await this.fetchUser(userId);
  this.setContext('currentUser', user);
});

// Example 4: Data table handling
Given('the following users exist:', function(dataTable) {
  const users = dataTable.hashes();
  this.setContext('users', users);
});

// Example 5: Using regex patterns
Then(/^the response status should be (\d+)$/, function(statusCode) {
  const response = this.getContext('lastResponse');
  this.expect(response.status).to.equal(parseInt(statusCode));
});