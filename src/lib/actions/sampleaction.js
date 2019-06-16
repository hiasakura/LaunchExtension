'use strict';

var extentionMsg = turbine.getExtensionSettings().msgID;

module.exports = function(settings) {
  alert("This is Text Message for you !! " + extentionMsg);
};
