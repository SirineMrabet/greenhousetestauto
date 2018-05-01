Feature: As a registered user I can sign-in


  @stable
  Scenario Outline:  Sign-in a registered user
    Given I'm in the home page
    When I click on the link to sign-in
    And I enter <login> <password> 
    And I click on sign-in button
    Then the current user is connected
    Examples:
      | login            | password    |
      | SirineMrabet     | s@tg$M9%    |

  @stable
  Scenario Outline:  Sign-in a non-registered user
    Given I'm in the home page
    When I click on the link to sign-in
    And I enter <login> <password>
    And I click on sign-in button
    Then the current user is not connected
    And an error msg is displayed indicating that the current user does no have an account
    Examples:
      | login            | password    |
      | SirineMrabet     | stesting    |


    #other possible scenarios
    # Sign-in with  FB, twitter, Linked-In
    # Forget my password