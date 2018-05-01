package Runner;
import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;
/**
 * Created by smrabet on 29/11/17.
 */
@CucumberOptions(plugin = { "html:target/cucumber-html-report", "json:target/cucumber.json" },
        features = {"src/test/Features"},
        strict = true,
        monochrome = true,
        glue = {"Steps","Hook"},
        tags = {"@stable"}
)
public class TestRunner extends AbstractTestNGCucumberTests{
}