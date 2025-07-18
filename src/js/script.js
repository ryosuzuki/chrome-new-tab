
var limit = 0690;
var random = Math.floor(Math.random() * limit);
var fileName = formatNumber(random, 4);
// var imgURL = chrome.extension.getURL("src/img/" + fileName + ".jpg");
var imgURL = "https://raw.githubusercontent.com/ryosuzuki/chrome-new-tab/master/src/img/1280x720/" + fileName + ".jpg"
$('<img/>').attr('src', imgURL).load( function() {
  $(this).remove();
  $('#background').css("background-image", "url('" + imgURL + "')").animate({ opacity: 1, easing: "easein" }, { duration: 1500 });
})

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

