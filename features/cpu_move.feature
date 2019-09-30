Feature: Player makes a move
  As a player
  In order to know the results
  I need to see which move the computer picked

  Scenario: Choose a move
    Given I visit the site
    Then I should see "Rock - Paper - Scissors"
    And I click "rock" image
    And I should see "You played Rock!"
    Then I should see "Computer played"
