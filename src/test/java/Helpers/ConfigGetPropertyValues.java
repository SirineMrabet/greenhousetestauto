package Helpers;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

/**
 * Created by SPG on 12/01/2018.
 */
public class ConfigGetPropertyValues {
    String result = "";

    InputStream inputStream = null;
    Properties prop = new Properties();

    public String getPropValues(String file, String NameProp) throws IOException {
        try {

            String propFileName = file;
            inputStream =  getClass().getClassLoader().getResourceAsStream(propFileName);
            if (inputStream != null) {
                prop.load(inputStream);
            } else {
                throw new FileNotFoundException("property file '" + propFileName + "' not found in the classpath");
            }
        } catch (Exception e) {
            System.out.println("Exception: " + e);
        } finally {
            inputStream.close();
        }
        result = prop.getProperty(NameProp);
        return result;
    }
}
