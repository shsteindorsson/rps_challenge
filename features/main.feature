Feature: Game's site exists
  As a player
  In order to play a game of Rock-Paper-Scissors in my browser
  I need to have access to an online version of the game

  Scenario: Visit the game's site
    Given I visit the site
    Then I should see "Rules of Rock-Paper-Scissors"
    