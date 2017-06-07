
var exec = require('cordova/exec');
var PLUGIN_NAME = 'PayTM';

var PayTM = {
    startPayment: function(orderId, customerId, email, phone, amount, method,callback, successCallback, failureCallback) {
    exec(successCallback,
                 failureCallback, 
                 "PayTM",
                 "startPayment",
                 [orderId, customerId, email, phone, amount, method,callback]);
  }

};

module.exports = PayTM;

