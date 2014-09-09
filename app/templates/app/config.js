require.config({
  // make bower_components more sensible
  // expose jquery 
  paths: {
    "bower_components": "../bower_components",
    "jquery": "../bower_components/jquery/jquery"
  },
  map: {
    "*": {
      "knockback": "../bower_components/knockback",
      "kb": "../bower_components/knockback"
    }
  }
});

// Use the debug version of knockout it development only
// When compiling with grunt require js will only look at the first 
// require.config({}) found in this file
require.config({
  map: {
    "*": {
      "knockback": "../bower_components/knockback",
      "kb": "../bower_components/knockback"
    }
  }
});

if (!window.requireTestMode) {
  require(['main'], function(){ });
}
