var clock = function(){
  this.days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  this.el = {
    lightBtn: this.id('lightswitch'),
    settingsBtn: this.id('open-settings'),
    settingsRadios: document.getElementsByName('clocktype'),
    settingsDropdown: this.id('settings-dropdown'),
    time: this.id('time')
  };


};

clock.prototype.init = function(){
  var d = new Date();

  var hours = d.getHours(),
  timeOfDay = 'am';

  if (hours > 12) {
    hours -= 12;
    timeOfDay = 'pm';
  }

  var html = '<h1><span>' + timeOfDay + '</span>' + hours + ':' + this.formatZero(d.getMinutes()) + '<small>' + this.formatZero(d.getSeconds()) + '</small></h1>';
  this.el.time.innerHTML = html;
};

window.Clock = new clock();
Clock.init();
