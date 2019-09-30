Feature: Player makes a move
  As a player
  In order to play the game
  I need to be able to pick an available move

  Scenario: Choose a move
    Given I visit the site
    Then I should see "Rock - Paper - Scissors"
    And I click "rock"
    Then I should see "You played Rock!"
