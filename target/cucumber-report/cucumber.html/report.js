$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("WomenPageTest.feature");
formatter.feature({
  "line": 1,
  "name": "WomenPage Test",
  "description": "As a user i should verify product and price name filter",
  "id": "womenpage-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 27622124300,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify the sort by product name filter",
  "description": "",
  "id": "womenpage-test;verify-the-sort-by-product-name-filter",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on women menu",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on Tops",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on jackets",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select sort by filter product name",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify products name display in alphabetical order",
  "keyword": "Then "
});
formatter.match({
  "location": "GearPageTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 1567288700,
  "status": "passed"
});
formatter.match({
  "location": "WomenPageTestSteps.iMouseHoverOnWomenMenu()"
});
formatter.result({
  "duration": 460153900,
  "status": "passed"
});
formatter.match({
  "location": "WomenPageTestSteps.iMouseHoverOnTops()"
});
formatter.result({
  "duration": 188132300,
  "status": "passed"
});
formatter.match({
  "location": "WomenPageTestSteps.iClickOnJackets()"
});
formatter.result({
  "duration": 2639194000,
  "status": "passed"
});
formatter.match({
  "location": "WomenPageTestSteps.iSelectSortByFilterProductName()"
});
formatter.result({
  "duration": 2130555600,
  "status": "passed"
});
formatter.match({
  "location": "WomenPageTestSteps.iVerifyProductsNameDisplayInAlphabeticalOrder()"
});
formatter.result({
  "duration": 861618700,
  "status": "passed"
});
formatter.after({
  "duration": 1951360300,
  "status": "passed"
});
});