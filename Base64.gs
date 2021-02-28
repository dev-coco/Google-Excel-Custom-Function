function base64encode(input) {
  return Utilities.base64Encode(input,Utilities.Charset.UTF_8);
}
function base64decode(input) {
  return Utilities.newBlob(Utilities.base64Decode(input,Utilities.Charset.UTF_8)).getDataAsString();
}
