Feature: Example Calculator
  As a user
  I want to perform basic arithmetic operations
  So that I can calculate values

  Background:
    Given I have a calculator

  Scenario: Addition of two numbers
    When I add 5 and 3
    Then the result should be 8

  Scenario: Subtraction of two numbers
    When I subtract 3 from 10
    Then the result should be 7

  Scenario Outline: Multiple operations
    When I perform "<operation>" with <num1> and <num2>
    Then the result should be <result>

    Examples:
      | operation | num1 | num2 | result |
      | add       | 2    | 3    | 5      |
      | multiply  | 4    | 5    | 20     |
      | divide    | 10   | 2    | 5      |