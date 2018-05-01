package Steps.SignIN_SignUP;

import Base.BaseUtile;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


/**
 * Created by smrabet on 02/05/18.
 */
public class SignIn extends BaseUtile{

    SignIn(BaseUtile Base){
        this.driver=Base.driver;
    }

    @Given("^I'm in the home page$")
    public void i_m_in_the_home_page()  {
        // Write code here that turns the phrase above into concrete actions

    }

    @When("^I click on the link to join$")
    public void i_click_on_the_link_to_join()  {
        // Write code here that turns the phrase above into concrete actions

    }

    @When("^I enter Sirine Mrabet mrabet\\.sirine(\\d+)@gmail\\.com spg(\\d+)\\* Female birthday Sptembre(\\d+)$")
    public void i_enter_Sirine_Mrabet_mrabet_sirine_gmail_com_spg_Female_birthday_Sptembre(int arg1, int arg2, int arg3)  {

    }

    @When("^Accept the term of use$")
    public void accept_the_term_of_use()  {

    }

    @When("^click on Create account button$")
    public void click_on_Create_account_button()  {

    }

    @Then("^a confirmation box will appear$")
    public void a_confirmation_box_will_appear() {

    }

    @Given("^I'm a registered user$")
    public void i_m_a_registered_user()  {

    }

    @Then("^an error msg appears indicating that I already have an account$")
    public void an_error_msg_appears_indicating_that_I_already_have_an_account() {
    }
}
