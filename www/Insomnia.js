function Insomnia() {
}

Insomnia.prototype.keepAwake = function (successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "Insomnia", "keepAwake", []);
};

Insomnia.prototype.allowSleepAgain = function (successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "Insomnia", "allowSleepAgain", []);
};

Insomnia.install = function () {
  if (!cordova.plugins) {
    cordova.plugins = {};
  }

  cordova.plugins.insomnia = new Insomnia();
  return cordova.plugins.insomnia;
};

cordova.addConstructor(Insomnia.install);
