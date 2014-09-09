// to depend on a bower installed component:
// define(['component/componentName/file'])

define(["jquery", "knockback"], function($, kb) {
  var viewModel = {
    status: kb.observable('active')
  };
  ko.applyBindings(viewModel, $('html')[0]);
});
