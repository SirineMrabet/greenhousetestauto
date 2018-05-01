package Pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

/**
 * Created by SPG on 12/01/2018.
 */
public class SignUP_Page {


    public SignUP_Page(WebDriver driver)
    {
        PageFactory.initElements(driver, this);
    }




    public static final String _firstName = "firstName";
    @FindBy(how = How.ID, using = _firstName)
    public WebElement firstName;

    public static final String _lastName = "lastName";
    @FindBy(how = How.ID, using = _lastName)
    public WebElement lastName;

    public static final String _email= "email";
    @FindBy(how = How.ID, using = _email )
    public WebElement email;


    public static final String _confirmEmail= "email";
    @FindBy(how = How.ID, using = _confirmEmail )
    public WebElement confirmEmail;

    public static final String _password= "password";
    @FindBy(how = How.ID, using = _password )
    public WebElement password;

    public static final String _gender= "gender";
    @FindBy(how = How.ID, using = _gender )
    public WebElement gender;

    public static final String _month= "month";
    @FindBy(how = How.ID, using = _month )
    public WebElement month;

    public static final String _day= "day";
    @FindBy(how = How.ID, using = _day )
    public WebElement day;

    public static final String _year= "year";
    @FindBy(how = How.ID, using = _year )
    public WebElement year;


    public static final String _submit = "//button[@type='submit']";
    @FindBy(how = How.XPATH, using = _submit)
    public WebElement submit;


}
