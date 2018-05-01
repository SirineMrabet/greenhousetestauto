$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("01_SignUP_SignIN/0_SignUP.feature");
formatter.feature({
  "line": 1,
  "name": "As a non-registered user I can sign-up",
  "description": "",
  "id": "as-a-non-registered-user-i-can-sign-up",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Sign-up a non-registered user",
  "description": "",
  "id": "as-a-non-registered-user-i-can-sign-up;sign-up-a-non-registered-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@stable"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I\u0027m in the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on the link to join",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter \u003cFirstName\u003e \u003cLastName\u003e \u003cEmail\u003e \u003cPassword\u003e \u003cGender\u003e birthday \u003cmm\u003e\u003cdd\u003e\u003caaaa\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Accept the term of use",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click on Create account button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "a confirmation box will appear",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "as-a-non-registered-user-i-can-sign-up;sign-up-a-non-registered-user;",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "Password",
        "Gender",
        "Email",
        "mm",
        "dd",
        "aaaa"
      ],
      "line": 13,
      "id": "as-a-non-registered-user-i-can-sign-up;sign-up-a-non-registered-user;;1"
    },
    {
      "cells": [
        "Sirine",
        "Mrabet",
        "spg2015*",
        "Female",
        "mrabet.sirine1@gmail.com",
        "Sptembre",
        "30",
        "1986"
      ],
      "line": 14,
      "id": "as-a-non-registered-user-i-can-sign-up;sign-up-a-non-registered-user;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1578575,
  "error_message": "java.lang.NullPointerException\n\tat Helpers.ConfigGetPropertyValues.getPropValues(ConfigGetPropertyValues.java:30)\n\tat Hook.Hook.InitializeTest(Hook.java:38)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:108)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:661)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:869)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1193)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:126)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:744)\n\tat org.testng.TestRunner.run(TestRunner.java:602)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:380)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:375)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1301)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1226)\n\tat org.testng.TestNG.runSuites(TestNG.java:1144)\n\tat org.testng.TestNG.run(TestNG.java:1115)\n\tat org.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:72)\n\tat org.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:127)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 14,
  "name": "Sign-up a non-registered user",
  "description": "",
  "id": "as-a-non-registered-user-i-can-sign-up;sign-up-a-non-registered-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@stable"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I\u0027m in the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on the link to join",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter Sirine Mrabet mrabet.sirine1@gmail.com spg2015* Female birthday Sptembre301986",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Accept the term of use",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click on Create account button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "a confirmation box will appear",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 48198840,
  "error_message": "java.lang.NullPointerException\n\tat Helpers.CaptureScreenshot.captureScreenshotOnFailure(CaptureScreenshot.java:33)\n\tat Hook.Hook.TearDownTest(Hook.java:70)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:108)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:661)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:869)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1193)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:126)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:744)\n\tat org.testng.TestRunner.run(TestRunner.java:602)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:380)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:375)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1301)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1226)\n\tat org.testng.TestNG.runSuites(TestNG.java:1144)\n\tat org.testng.TestNG.run(TestNG.java:1115)\n\tat org.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:72)\n\tat org.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:127)\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Sign-up a registered user",
  "description": "",
  "id": "as-a-non-registered-user-i-can-sign-up;sign-up-a-registered-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@stable"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I\u0027m in the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I\u0027m a registered user",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on the link to join",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I enter \u003cFirstName\u003e \u003cLastName\u003e \u003cEmail\u003e \u003cPassword\u003e \u003cGender\u003e birthday \u003cmm\u003e\u003cdd\u003e\u003caaaa\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Accept the term of use",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "click on Create account button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "an error msg appears indicating that I already have an account",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "as-a-non-registered-user-i-can-sign-up;sign-up-a-registered-user;",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "Password",
        "Gender",
        "Email",
        "mm",
        "dd",
        "aaaa"
      ],
      "line": 26,
      "id": "as-a-non-registered-user-i-can-sign-up;sign-up-a-registered-user;;1"
    },
    {
      "cells": [
        "Sirine",
        "Mrabet",
        "spg2015*",
        "Female",
        "mrabet.sirine1@gmail.com",
        "Sptembre",
        "30",
        "1986"
      ],
      "line": 27,
      "id": "as-a-non-registered-user-i-can-sign-up;sign-up-a-registered-user;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 350017,
  "error_message": "java.lang.NullPointerException\n\tat Helpers.ConfigGetPropertyValues.getPropValues(ConfigGetPropertyValues.java:30)\n\tat Hook.Hook.InitializeTest(Hook.java:38)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:108)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:661)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:869)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1193)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:126)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:744)\n\tat org.testng.TestRunner.run(TestRunner.java:602)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:380)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:375)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1301)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1226)\n\tat org.testng.TestNG.runSuites(TestNG.java:1144)\n\tat org.testng.TestNG.run(TestNG.java:1115)\n\tat org.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:72)\n\tat org.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:127)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 27,
  "name": "Sign-up a registered user",
  "description": "",
  "id": "as-a-non-registered-user-i-can-sign-up;sign-up-a-registered-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@stable"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I\u0027m in the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I\u0027m a registered user",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on the link to join",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I enter Sirine Mrabet mrabet.sirine1@gmail.com spg2015* Female birthday Sptembre301986",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Accept the term of use",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "click on Create account button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "an error msg appears indicating that I already have an account",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 182336,
  "error_message": "java.lang.NullPointerException\n\tat Helpers.CaptureScreenshot.captureScreenshotOnFailure(CaptureScreenshot.java:33)\n\tat Hook.Hook.TearDownTest(Hook.java:70)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:108)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:661)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:869)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1193)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:126)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:744)\n\tat org.testng.TestRunner.run(TestRunner.java:602)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:380)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:375)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1301)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1226)\n\tat org.testng.TestNG.runSuites(TestNG.java:1144)\n\tat org.testng.TestNG.run(TestNG.java:1115)\n\tat org.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:72)\n\tat org.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:127)\n",
  "status": "failed"
});
formatter.uri("01_SignUP_SignIN/1_SignIN.feature");
formatter.feature({
  "line": 1,
  "name": "As a registered user I can sign-in",
  "description": "",
  "id": "as-a-registered-user-i-can-sign-in",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Sign-in a registered user",
  "description": "",
  "id": "as-a-registered-user-i-can-sign-in;sign-in-a-registered-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@stable"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I\u0027m in the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on the link to sign-in",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter \u003clogin\u003e \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on sign-in button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the current user is connected",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "as-a-registered-user-i-can-sign-in;sign-in-a-registered-user;",
  "rows": [
    {
      "cells": [
        "login",
        "password"
      ],
      "line": 12,
      "id": "as-a-registered-user-i-can-sign-in;sign-in-a-registered-user;;1"
    },
    {
      "cells": [
        "SirineMrabet",
        "s@tg$M9%"
      ],
      "line": 13,
      "id": "as-a-registered-user-i-can-sign-in;sign-in-a-registered-user;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 477702,
  "error_message": "java.lang.NullPointerException\n\tat Helpers.ConfigGetPropertyValues.getPropValues(ConfigGetPropertyValues.java:30)\n\tat Hook.Hook.InitializeTest(Hook.java:38)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:108)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:661)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:869)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1193)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:126)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:744)\n\tat org.testng.TestRunner.run(TestRunner.java:602)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:380)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:375)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1301)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1226)\n\tat org.testng.TestNG.runSuites(TestNG.java:1144)\n\tat org.testng.TestNG.run(TestNG.java:1115)\n\tat org.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:72)\n\tat org.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:127)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 13,
  "name": "Sign-in a registered user",
  "description": "",
  "id": "as-a-registered-user-i-can-sign-in;sign-in-a-registered-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@stable"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I\u0027m in the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on the link to sign-in",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter SirineMrabet s@tg$M9%",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on sign-in button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the current user is connected",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 174521,
  "error_message": "java.lang.NullPointerException\n\tat Helpers.CaptureScreenshot.captureScreenshotOnFailure(CaptureScreenshot.java:33)\n\tat Hook.Hook.TearDownTest(Hook.java:70)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:108)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:661)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:869)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1193)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:126)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:744)\n\tat org.testng.TestRunner.run(TestRunner.java:602)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:380)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:375)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1301)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1226)\n\tat org.testng.TestNG.runSuites(TestNG.java:1144)\n\tat org.testng.TestNG.run(TestNG.java:1115)\n\tat org.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:72)\n\tat org.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:127)\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Sign-in a non-registered user",
  "description": "",
  "id": "as-a-registered-user-i-can-sign-in;sign-in-a-non-registered-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@stable"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I\u0027m in the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I click on the link to sign-in",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I enter \u003clogin\u003e \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on sign-in button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "the current user is not connected",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "an error msg is displayed indicating that the current user does no have an account",
  "keyword": "And "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "as-a-registered-user-i-can-sign-in;sign-in-a-non-registered-user;",
  "rows": [
    {
      "cells": [
        "login",
        "password"
      ],
      "line": 24,
      "id": "as-a-registered-user-i-can-sign-in;sign-in-a-non-registered-user;;1"
    },
    {
      "cells": [
        "SirineMrabet",
        "stesting"
      ],
      "line": 25,
      "id": "as-a-registered-user-i-can-sign-in;sign-in-a-non-registered-user;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 567908,
  "error_message": "java.lang.NullPointerException\n\tat Helpers.ConfigGetPropertyValues.getPropValues(ConfigGetPropertyValues.java:30)\n\tat Hook.Hook.InitializeTest(Hook.java:38)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:108)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:661)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:869)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1193)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:126)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:744)\n\tat org.testng.TestRunner.run(TestRunner.java:602)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:380)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:375)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1301)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1226)\n\tat org.testng.TestNG.runSuites(TestNG.java:1144)\n\tat org.testng.TestNG.run(TestNG.java:1115)\n\tat org.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:72)\n\tat org.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:127)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 25,
  "name": "Sign-in a non-registered user",
  "description": "",
  "id": "as-a-registered-user-i-can-sign-in;sign-in-a-non-registered-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@stable"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I\u0027m in the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I click on the link to sign-in",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I enter SirineMrabet stesting",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on sign-in button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "the current user is not connected",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "an error msg is displayed indicating that the current user does no have an account",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 164867,
  "error_message": "java.lang.NullPointerException\n\tat Helpers.CaptureScreenshot.captureScreenshotOnFailure(CaptureScreenshot.java:33)\n\tat Hook.Hook.TearDownTest(Hook.java:70)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:108)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:661)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:869)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1193)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:126)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:744)\n\tat org.testng.TestRunner.run(TestRunner.java:602)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:380)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:375)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1301)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1226)\n\tat org.testng.TestNG.runSuites(TestNG.java:1144)\n\tat org.testng.TestNG.run(TestNG.java:1115)\n\tat org.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:72)\n\tat org.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:127)\n",
  "status": "failed"
});
});