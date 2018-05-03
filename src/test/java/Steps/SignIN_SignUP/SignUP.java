package Steps.SignIN_SignUP;

import Base.BaseUtile;
import Helpers.ConfigGetPropertyValues;
import Pages.SignIN_Page;
import Pages.SignUP_Page;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
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
public class SignUP extends BaseUtile{

    SignUP_Page PO;
    ConfigGetPropertyValues Config;
    String ConfigFile="Config/Config.properties";
    String MsgFile="Config/msg.properties";
    String UsersFile="Config/Users.properties";
    SignUP(BaseUtile Base){
        this.driver=Base.driver;
        PO = new SignUP_Page(Base.driver);
        Config = new ConfigGetPropertyValues();
    }


    @Given("^I'm in the home page$")
    public void i_m_in_the_home_page() throws IOException {

        String URL = driver.getCurrentUrl();
        Assert.assertEquals(URL, Config.getPropValues(ConfigFile,"url"));


    }

    @When("^I click on the link to join$")
    public void i_click_on_the_link_to_join() throws IOException {
        PO.Join.click();
        String URL = driver.getCurrentUrl();
        Assert.assertEquals(URL, Config.getPropValues(ConfigFile,"url")+"signup");

    }

    @And("^I create user account with ([^\\\"]*) ([^\\\"]*) ([^\\\"]*) ([^\\\"]*) ([^\\\"]*) birthday ([^\\\"]*)([^\\\"]*)([^\\\"]*)$")
    public void iCreateUserAccountWithFirstNameLastNameEmailPasswordGenderBirthdayMmDdAaaa(String FirstName, String LastName, String Email,
                                                                           String Password,String Gender, String mm,
                                                                           String dd, String aaaa)  {
        PO.firstName.sendKeys(FirstName);
        PO.lastName.sendKeys(LastName);
        PO.email.sendKeys(Email);
        PO.confirmEmail.sendKeys(Email);
        PO.password.sendKeys(Password);
        PO.gender.sendKeys(Gender);
        PO.month.sendKeys(mm);
        PO.day.sendKeys(dd);
        PO.year.sendKeys(aaaa);
        PO.submit.click();


        PO.submit.click();

    }



    @Then("^a confirmation box will appear$")
    public void a_confirmation_box_will_appear() throws IOException {

        List<WebElement> list = driver.findElements(By.xpath("//*[contains(text(),'" + Config.getPropValues(MsgFile,"success") + "')]"));
        Assert.assertTrue(list.size() > 0,"Text not found!");


    }

    @Given("^I'm a registered user$")
    public void i_m_a_registered_user() throws IOException {
        SignIN_Page P1 = new SignIN_Page(driver);


        String login=  Config.getPropValues(UsersFile,"login1");
        String userName=  Config.getPropValues(ConfigFile,"user1");
        String pass= Config.getPropValues(UsersFile,"pass1");
        P1.login.sendKeys(login);
        P1.password.sendKeys(pass);
        List<WebElement> list = driver.findElements(By.xpath("//*[contains(text(),'" + userName + "')]"));
        Assert.assertTrue(list.size() > 0,"Text not found!");
        list = driver.findElements(By.xpath("//*[contains(text(),'Sign out')]"));
        Assert.assertTrue(list.size() > 0,"Text not found!");
        P1.Sign_out.click();

    }

    @Then("^an error msg appears indicating that I already have an account$")
    public void an_error_msg_appears_indicating_that_I_already_have_an_account() throws IOException {

        List<WebElement> list = driver.findElements(By.xpath("//*[contains(text(),'" + Config.getPropValues(MsgFile,"failure") + "')]"));
        Assert.assertTrue(list.size() > 0,"Text not found!");

        list = driver.findElements(By.xpath("//*[contains(text(),'" + Config.getPropValues(MsgFile,"mailexist") + "')]"));
        Assert.assertTrue(list.size() > 0,"Text not found!");
    }



////////////////////////////////////





}
