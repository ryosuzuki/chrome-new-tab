
var limit = 0690;
var random = Math.floor(Math.random() * limit);
var fileName = formatNumber(random, 4);
var imgURL = chrome.extension.getURL("src/img/2560x1440/" + fileName + ".jpg");
$('#background').css("background-image", "url('" + imgURL + "')").animate({ opacity: 1 }, { duration: 1000 });

updateTime();
setInterval(updateTime, 1000);

function formatNumber (num, length) {
  var r = "" + num;
  while (r.length < length) { r = "0" + r; }
  return r;
}

function updateTime () {
  var time = moment().format('h:mm');
  var ampm = moment().format('A');
  var date = moment().format('ddd, MMM D')
  $('#time').html(time + '<span id="ampm">' + ampm + '</span>');
  $('#date').html(date);
}

