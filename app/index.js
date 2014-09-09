'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var KnockbackGenerator = module.exports = function KnockbackGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.options = options || {};

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(KnockbackGenerator, yeoman.generators.Base);

KnockbackGenerator.prototype.welcome = function welcome() {
  // welcome message
  console.log(this.yeoman);
  console.log('This comes with Knockback.js.');
};

KnockbackGenerator.prototype.askFor = function askFor() {

  var cb = this.async();

  if (this.options.promptDefaults) {
     this.appname = this.options.promptDefaults.appname;
     this.appdescription = this.options.promptDefaults.appdescription;
     cb();
     return;
   }

  var prompts = [{
    name: 'appname',
    message: 'What is the name of your app?',
    default: this.appname
  }, {
    name: 'appdescription',
    message: 'Description:',
    default: 'An awesome Knockback.js app'
  }];

  this.prompt(prompts, function (answers) {

    this.appname = answers.appname;
    this.appdescription = answers.appdescription;


    cb();
  }.bind(this));
};

KnockbackGenerator.prototype.gruntfile = function gruntfile() {
  this.template('Gruntfile.js');
};

KnockbackGenerator.prototype.packageJSON = function packageJSON() {
  this.template('_package.json', 'package.json');
};

KnockbackGenerator.prototype.bower = function bower() {
  this.template('_bower.json', 'bower.json');
};

KnockbackGenerator.prototype.git = function git() {
  this.copy('gitignore', '.gitignore');
};

KnockbackGenerator.prototype.configs = function jshint() {
  this.copy('jshintrc', '.jshintrc');
  this.copy('editorconfig', '.editorconfig');
}

KnockbackGenerator.prototype.docs = function docs() {
  this.copy('CONTRIBUTING.md', 'CONTRIBUTING.md');
  this.template('README.md', 'README.md');
};

KnockbackGenerator.prototype.app = function app() {
  this.directory('app', 'app');
  this.directory('test', 'test');
  this.template('index.html', 'index.html');
};
