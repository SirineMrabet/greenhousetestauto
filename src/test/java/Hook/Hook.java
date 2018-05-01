package Hook;

import Base.BaseUtile;
import Helpers.CaptureScreenshot;
import Helpers.ConfigGetPropertyValues;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;
import java.util.concurrent.TimeUnit;


/**
 * Created by smrabet on 29/11/2017.
 */

public class Hook extends BaseUtile {

    private BaseUtile base;
    private String Browser;
    private String URL;
    public Hook(BaseUtile base) {
        this.base = base;
        this.driver = base.driver;
    }


    @Before
    public void InitializeTest(Scenario scenario)throws IOException {
        //************************* Get the URL and the browser configuration preferences from config file ***********//
        ConfigGetPropertyValues Conf = new ConfigGetPropertyValues();
        Browser = Conf.getPropValues("Config/Config.properties","browser");
        URL= Conf.getPropValues("Config/Config.properties","url");

        System.out.println("Opening the browser");
        System.out.println("Scenario Name: "+scenario.getName());


        if(Browser.equals("Firefox")) {
            System.setProperty("webdriver.firefox.marionette", "D:\\libs\\geckodriver.exe");
            base.driver = new FirefoxDriver ();
        }
        else if (Browser.equals("Chrome")){
            System.setProperty( "webdriver.chrome.driver","D:\\libs\\geckodriver.exe");
            //base.driver = new HtmlUnitDriver(true);
            base.driver = new ChromeDriver();

        }
        base.driver.get(URL);
        base.driver.manage().window().maximize();
        base.driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);


    }


    @After
    public void TearDownTest(Scenario scenario) {

         if (scenario.isFailed()) {
            System.out.println(scenario.getName());
        }
        System.out.println("Ending test");
        CaptureScreenshot.captureScreenshotOnFailure(scenario,base.driver);
        base.driver.quit();

    }

    public BaseUtile getBase() {
        return base;
    }




}

