package Steps.SignIN_SignUP;

import Base.BaseUtile;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * Created by smrabet on 02/05/18.
 */
public class SignUP extends BaseUtile{

    SignUP(BaseUtile Base){
        this.driver=Base.driver;
    }


    @When("^I click on the link to sign-in$")
    public void i_click_on_the_link_to_sign_in()  {

    }

    @When("^I enter SirineMrabet s@tg\\$M(\\d+)%$")
    public void i_enter_SirineMrabet_s_tg$M(int arg1) {

    }

    @When("^I click on sign-in button$")
    public void i_click_on_sign_in_button()  {

    }

    @Then("^the current user is connected$")
    public void the_current_user_is_connected()  {

    }

    @When("^I enter SirineMrabet stesting$")
    public void i_enter_SirineMrabet_stesting()  {

    }

    @Then("^the current user is not connected$")
    public void the_current_user_is_not_connected()  {

    }

    @Then("^an error msg is displayed indicating that the current user does no have an account$")
    public void an_error_msg_is_displayed_indicating_that_the_current_user_does_no_have_an_account()  {

    }



}
