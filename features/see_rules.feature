Feature: Game's rules exist
  As a player
  In order to play the game correctly
  I need to be able to see the rules of the game

  Scenario: Visit the rules' site
    Given I visit the site
    Then I should see "Rules of Rock-Paper-Scissors"
    And I click "Rules of Rock-Paper-Scissors" link