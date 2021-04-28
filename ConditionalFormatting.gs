function applyConditionalFormatting() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet Name');

  var numRows = sheet.getLastRow();
  var rangeToHighlight = sheet.getRange("A:A");
  var rule = SpreadsheetApp.newConditionalFormatRule()
      .whenFormulaSatisfied('=COUNTIF($A:$A,A1)>1')
      .setBackground("#7b7b7b")
      .setRanges([rangeToHighlight])
      .build();
    
  var rules = sheet.getConditionalFormatRules();
  rules.push(rule);
  sheet.setConditionalFormatRules(rules);
}
