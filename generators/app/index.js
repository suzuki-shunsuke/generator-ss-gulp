'use strict';

const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  writing() {
    this.fs.extendJSON('package.json', {
      scripts: {gulp: 'gulp'}});
  }

  install() {
    this.yarnInstall(['gulp'], {dev: true});
  }
};
