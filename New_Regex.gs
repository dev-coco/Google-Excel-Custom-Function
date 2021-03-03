function NewMatch(input,expression) {
  var regex = new RegExp(expression);
  var result = regex.exec(input);
  return result;
}

function NewReplace(input,expression,replace_strings) {
  var result = input.replace(new RegExp(expression,'gi'),replace_strings);
  return result;
}
