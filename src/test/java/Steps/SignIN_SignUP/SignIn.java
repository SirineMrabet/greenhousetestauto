package Steps.SignIN_SignUP;

import Base.BaseUtile;
import Helpers.ConfigGetPropertyValues;
import Pages.SignIN_Page;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

import java.io.IOException;
import java.util.List;


/**
 * Created by smrabet on 02/05/18.
 */
public class SignIn extends BaseUtile{

    SignIN_Page PO;
    ConfigGetPropertyValues Config;
    String ConfigFile="Config/Config.properties";
    String MsgFile="Config/msg.properties";
    String UsersFile="Config/Users.properties";



    SignIn(BaseUtile Base){
        this.driver=Base.driver;
        PO = new SignIN_Page(Base.driver);
        Config = new ConfigGetPropertyValues();
    }

    @When("^I click on the link to sign-in$")
    public void i_click_on_the_link_to_sign_in() throws IOException {
        PO.SignIN.click();
        String URL = driver.getCurrentUrl();
        Assert.assertEquals(URL, Config.getPropValues(ConfigFile,"url")+"signin");

    }

    @And("^I put ([^\\\"]*) ([^\\\"]*)$")
    public void iPutLoginPassword(String login, String pass)  {
        PO.login.sendKeys(login);
        PO.password.sendKeys(pass);
            }

    @When("^I click on sign-in button$")
    public void i_click_on_sign_in_button()  {
        PO.submit.click();

    }

    @Then("^the current user is connected$")
    public void the_current_user_is_connected() throws IOException {
        SignIN_Page P1 = new SignIN_Page(driver);
        String userName=  Config.getPropValues(UsersFile,"user1");

        List<WebElement> list = driver.findElements(By.xpath("//*[contains(text(),'" + userName + "')]"));
        Assert.assertTrue(list.size() > 0,"Text not found!");
        list = driver.findElements(By.xpath("//*[contains(text(),'Sign out')]"));
        Assert.assertTrue(list.size() > 0,"Text not found!");
        P1.Sign_out.click();

    }

    

    @Then("^the current user is not connected$")
    public void the_current_user_is_not_connected() throws IOException {
        SignIN_Page P1 = new SignIN_Page(driver);
        String userName=  Config.getPropValues(ConfigFile,"user1");

        List<WebElement> list = driver.findElements(By.xpath("//*[contains(text(),'" + userName + "')]"));
        Assert.assertFalse(list.size() > 0,"Text found!");
        list = driver.findElements(By.xpath("//*[contains(text(),'Sign out')]"));
        Assert.assertFalse(list.size() > 0,"Text found!");


    }

    @Then("^an error msg is displayed indicating that the current user does no have an account$")
    public void an_error_msg_is_displayed_indicating_that_the_current_user_does_no_have_an_account() throws IOException {
        List<WebElement> list = driver.findElements(By.xpath("//*[contains(text(),'" + Config.getPropValues(MsgFile,"NOTExist") + "')]"));
        Assert.assertTrue(list.size() > 0,"Text not found!");



    }


}
