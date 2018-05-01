package Helpers;

import Base.BaseUtile;
import  cucumber.api.Scenario;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;

import java.io.File;
import java.io.IOException;
import java.util.logging.Logger;

import static org.apache.commons.io.FileUtils.*;

public class CaptureScreenshot {

    /**
     * Static method to capture screenshot when scenario fails and embedded image to cucumber.json in reports directory
     * Print url of the page when error occurred
     *
     * @param scenario
     */

    private static final Logger LOGGER = Logger.getLogger(CaptureScreenshot.class.getName());



    public static void captureScreenshotOnFailure(Scenario scenario, WebDriver driver) {
        if (scenario.isFailed()) {
            try {
                File screenshot = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
                copyFile(screenshot, new File("c:\\tmp\\screenshot.png"));
                //scenario.embed(screenshot, "image/png");
                scenario.write("URL at failure: " + driver.getCurrentUrl());
            } catch (WebDriverException wde) {
                scenario.write("Embed Failed " + wde.getMessage());
                LOGGER.info("Embed Failed" + "\n" + wde);
            } catch (ClassCastException cce) {
                LOGGER.info(cce.getMessage() + "\n" + cce);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
