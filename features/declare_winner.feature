Feature: A winner is declared
  As a player
  In order to know whether I have won
  I need to see the results of the game

  Scenario: Choose a move
    Given I visit the site
    Then I should see "Rock - Paper - Scissors"
    And I click "rock" image
    And I should see "You played Rock!"
    And I should see "Computer played"
    Then I should see "victorious"