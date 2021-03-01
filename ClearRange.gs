function clearRange() {
  var sheetActive = SpreadsheetApp.openById("Sheet ID");
  var sheetName = sheetActive.getSheetByName("Sheet Name");
  sheetName.getRange('A:A').clearContent();
}
