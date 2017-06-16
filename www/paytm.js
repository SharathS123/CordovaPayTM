
var exec = require('cordova/exec');
var PLUGIN_NAME = 'PayTM';

var PayTM = {
    alert("PAYTM_INSIDE");
    startPayment: function(orderId, customerId, email, phone, amount, method,callback,checksum, successCallback, failureCallback) {
    exec(successCallback,
                 failureCallback, 
                 "PayTM",
                 "startPayment",
                 [orderId, customerId, email, phone, amount, method,callback,checksum]);
  }

};

module.exports = PayTM;

