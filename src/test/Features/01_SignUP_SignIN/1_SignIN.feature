Feature: As a registered user I can sign-in


  @stable
  Scenario Outline:  Sign-in a registered user
    Given I'm in the home page
    When I click on the link to sign-in
    And I enter <login> <password> 
    And click on Create account button
    Then a confirmation box will appear
    Examples:
      |FirstName | LastName | Password    | Gender     | Email                           |mm      | dd | aaaa |
      | Sirine   | Mrabet   | s@tg$M9%    | Female     | mrabet.sirine1@gmail.com        |Sptembre| 30 | 1986 |

  @stable
  Scenario Outline:  Sign-in a non-registered user
    Given I'm in the home page
    When I click on the link to join
    And I enter <FirstName> <LastName> <Email> <Password> <Gender> birthday <mm><dd><aaaa>
    And Accept the term of use
    And click on Create account button
    Then a confirmation box will appear
    Examples:
      |FirstName | LastName | Password    | Gender     | Email                           |mm      | dd | aaaa |
      | Sirine   | Mrabet   | s@tg$M9%    | Female     | mrabet.sirine1@gmail.com        |Sptembre| 30 | 1986 |
