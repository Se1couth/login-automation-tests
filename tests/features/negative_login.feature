Feature: Negative Login Tests
  Scenario: Login with invalid credentials
    Given I am on the login page
    When I login with invalid credentials
    Then I should see an error message
