Feature: As a non-registered user I can sign-up


  @stable
     Scenario Outline:  Sign-up a non-registered user
       Given I'm in the home page
       When I click on the link to join
       And I create user account with <FirstName> <LastName> <Email> <Password> <Gender> birthday <mm><dd><aaaa>
       Then a confirmation box will appear
      Examples:
      |FirstName | LastName | Password    | Gender     | Email                           |mm      | dd | aaaa |
      | Sirine   | Mrabet   | spg2015*    | Female     | mrabet.sirine1@gmail.com        |Sptembre| 30 | 1986 |

  @stable
  Scenario Outline:  Sign-up a registered user
    Given I'm in the home page
    And I'm a registered user
    When I click on the link to join
    And I create user account with <FirstName> <LastName> <Email> <Password> <Gender> birthday <mm><dd><aaaa>
    Then an error msg appears indicating that I already have an account
    Examples:
      |FirstName | LastName | Password    | Gender     | Email                           |mm      | dd | aaaa |
      | Sirine   | Mrabet   | spg2015*    | Female     | mrabet.sirine1@gmail.com        |Sptembre| 30 | 1986 |


    #other possible scenarios
    # verify the required / non-required fields