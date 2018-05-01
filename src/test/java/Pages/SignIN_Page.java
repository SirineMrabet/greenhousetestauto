package Pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class SignIN_Page {

    public SignIN_Page(WebDriver driver)
    {
        PageFactory.initElements(driver, this);
    }


    public static final String _login = "login";
    @FindBy(how = How.ID, using = _login)
    public WebElement login;

    public static final String _password = "password";
    @FindBy(how = How.XPATH, using = _password)
    public WebElement password;

    public static final String _submit = "//button[@type='submit']";
    @FindBy(how = How.XPATH, using = _submit)
    public WebElement submit;

    public static final String _facebook_signin = "facebook_signin";
    @FindBy(how = How.ID, using = _facebook_signin)
    public WebElement facebook_signin;

    public static final String _twitter_signin = "twitter_signin";
    @FindBy(how = How.ID, using = _twitter_signin)
    public WebElement twitter_signin;

    public static final String _linkedin_signin = "linkedin_signin";
    @FindBy(how = How.ID, using = _linkedin_signin)
    public WebElement linkedin_signin;

}
