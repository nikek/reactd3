#!/usr/bin/env node

var lingon = require('lingon');
var react = require('gulp-react');

lingon.preProcessors.push('jsx', function() {
  return react();
});