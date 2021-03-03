function DeleteRow() {
  var sheetActive = SpreadsheetApp.openById("Sheet ID");
  var sheetName = sheetActive.getSheetByName("Sheet Name");
  sheetName.deleteRow("Row Numbers");
}
