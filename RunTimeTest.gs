function run_time_test() {
  var ss = SpreadsheetApp.getActive();
  var sheet = ss.getSheetByName('SheetName');
  var LastColumn = sheet.getLastColumn();
  var LastRow = sheet.getLastRow();
  var start_time = new Date();
  var formulas = [["=NOW"]];
  var formulas1 = [["A1"]];
  var cell = sheet.getRange(1,LastColumn+1,1,formulas[0].length);
  cell.setFormulas(formulas);
  SpreadsheetApp.flush();
  var r = sheet.getRange(2,LastColumn+1,LastRow,formulas[0].length);
  var cells = sheet.getRange(2,LastColumn+1,1,formulas[0].length);
  cells.setFormulas(formulas1);
  cells.copyTo(r);
  SpreadsheetApp.flush();
  var end_time = new Date();
  var executiontime = end_time - start_time;
  Logger.log("耗时"+executiontime);
}
