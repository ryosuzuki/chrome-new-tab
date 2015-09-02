
var limit = 0211;
var random = Math.floor(Math.random() * limit);
var fileName = formatNumber(random, 4);
var imgURL = chrome.extension.getURL("src/img/" + fileName + ".jpg");
// document.getElementById("someImage").src = imgURL;
// $('#background').fadeIn('slow', 0.3, function() {
//   $(this).css('background-image', 'url(' + imgURL + ')');
// })//.fadeTo('slow', 1);
$('#background').css("background-image", "url('" + imgURL + "')").animate({ opacity: 1 }, { duration: 2000 });

function formatNumber (num, length) {
  var r = "" + num;
  while (r.length < length) {
    r = "0" + r;
  }
  return r;
}


var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var d = new Date();
var hours = d.getHours(),
timeOfDay = 'am';
if (hours > 12) {
  hours -= 12;
  timeOfDay = 'pm';
}

var html = '<h1><span>' + timeOfDay + '</span>' + hours + ':' + d.getMinutes() + '</h1>';
var time = moment().format('h:mm');
var ampm = moment().format('A');
var date = moment().format('ddd, MMM D')

$('#time').html(time + '<span id="ampm">' + ampm + '</span>');
$('#ampm').text(ampm);
$('#date').text(date);


