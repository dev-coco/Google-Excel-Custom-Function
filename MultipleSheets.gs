function MultipleSheets() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  ["Sheet1", "Sheet2", "Sheet3"].forEach(function (s) {
    var sheet = ss.getSheetByName(s);
    // sheet....
  })
}
