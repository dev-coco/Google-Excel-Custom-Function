function UpdatedTime(str) {
  if(str){
    var now = new Date();
    var hours = now.getHours();
    if (hours<10) {
      var hours = "0"+hours;
    }
    var minutes = now.getMinutes();
    if (minutes<10) {
      var minutes = "0"+minutes;
    }
    var seconds = now.getSeconds();
    if (seconds<10) {
      var seconds = "0"+seconds;
    }
    return hours+":"+minutes+":"+seconds;
  }
  else return null;
}

function UpdatedDay(str) {
  if(str){
    var now = new Date();
    var month = now.getMonth() + 1;
    if (month<10) {
      var month = "0"+month;
    }
    var today = now.getDate();
    if (today<10) {
      var today = "0"+today;
    }
    return now.getFullYear()+"-"+month+"-"+today;
  }
  else return null;
}
