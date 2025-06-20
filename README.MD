# @fflow/core

Core is the main component of fflow, providing a comprehensive BDD (Behavior-Driven Development) testing framework for JavaScript applications.

## Features

- 🥒 Built on Cucumber.js for industry-standard BDD testing
- ✅ Integrated with Chai for powerful assertions
- 🌍 Custom World implementation for scenario context management
- 🎣 Hooks for setup and teardown operations
- 📋 Multiple report formats (JSON, HTML, Progress)
- 🔧 Easy-to-use API for creating custom step definitions

## Installation

```bash
npm install @fflow/core --save-dev
```

## Quick Start

### 1. Create a feature file

Create a `.feature` file in your `features` directory:

```gherkin
Feature: User Authentication
  As a user
  I want to log in to the system
  So that I can access my account

  Scenario: Successful login
    Given I am on the login page
    When I enter valid credentials
    Then I should be redirected to the dashboard
```

### 2. Write step definitions

```javascript
const { Given, When, Then, expect } = require('@fflow/core');

Given('I am on the login page', function() {
  // Navigate to login page
  this.setContext('currentPage', '/login');
});

When('I enter valid credentials', function() {
  // Simulate entering credentials
  const credentials = {
    username: 'user@example.com',
    password: 'password123'
  };
  this.setContext('credentials', credentials);
});

Then('I should be redirected to the dashboard', function() {
  // Verify redirection
  const currentPage = this.getContext('currentPage');
  expect(currentPage).to.equal('/dashboard');
});
```

### 3. Run your tests

```bash
npm test
```

## API Reference

### Step Definitions

```javascript
const { Given, When, Then } = require('@fflow/core');

Given('a precondition', function() {
  // Setup code
});

When('an action occurs', function() {
  // Action code
});

Then('expect a result', function() {
  // Assertion code
});
```

### World Context

The World provides isolated context for each scenario:

```javascript
// Store data
this.setContext('key', value);

// Retrieve data
const value = this.getContext('key');

// Clear all context
this.clearContext();

// Access Chai expect
this.expect(actual).to.equal(expected);
```

### Hooks

```javascript
const { Before, After, BeforeAll, AfterAll } = require('@fflow/core');

BeforeAll(function() {
  // Runs once before all scenarios
});

Before(function() {
  // Runs before each scenario
});

After(function(scenario) {
  // Runs after each scenario
});

AfterAll(function() {
  // Runs once after all scenarios
});
```

### Custom World

Create a custom World class with additional functionality:

```javascript
const { createWorld, setWorldConstructor } = require('@fflow/core');

const CustomWorld = createWorld({
  // Add custom properties or methods
  apiClient: null,
  
  async makeRequest(endpoint) {
    // Custom method
    return await this.apiClient.get(endpoint);
  }
});

setWorldConstructor(CustomWorld);
```

## Configuration

Create a `cucumber.js` file in your project root:

```javascript
module.exports = {
  default: {
    require: [
      'features/step_definitions/**/*.js',
      'features/support/**/*.js'
    ],
    format: [
      'progress',
      'json:reports/cucumber_report.json',
      'html:reports/cucumber_report.html'
    ],
    publishQuiet: true
  }
};
```

## Available Scripts

- `npm test` - Run all tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:dry-run` - Validate feature files without executing
- `npm run test:parallel` - Run tests in parallel
- `npm run test:tags @tagname` - Run specific tagged scenarios
- `npm run report` - Generate test reports

## Project Structure

```
your-project/
├── features/
│   ├── step_definitions/
│   │   └── your_steps.js
│   ├── support/
│   │   ├── world.js
│   │   └── hooks.js
│   └── your.feature
├── cucumber.js
└── package.json
```

## Best Practices

1. **Keep scenarios focused**: Each scenario should test one specific behavior
2. **Use Background wisely**: Only include steps that are truly common to all scenarios
3. **Write declarative scenarios**: Focus on what, not how
4. **Reuse step definitions**: Create generic, reusable steps when possible
5. **Use tags for organization**: Tag features and scenarios for selective execution

## Example Project

Check out the included example in the `features` directory to see a working calculator implementation with:
- Feature file with multiple scenarios
- Step definitions
- World context usage
- Scenario outlines with examples

## Contributing

Please submit issues and pull requests to the [fflow/core repository](https://github.com/get-fflow/core).

## License

ISC
