Feature: Player makes a move
  As a player
  In order to choose my move
  I need to see available moves

  Scenario: Choose a move
    Given I visit the site
    Then I should see "Rock - Paper - Scissors"
    And I should see "rock"
    And I should see "paper"
    And I should see "scissors"