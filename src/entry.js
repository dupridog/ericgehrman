var angular = require('angular'); 
var _ = require('lodash');
var moment = require('moment');

require('angular-ui-router');
require('./sass/global.scss');
require('font-awesome-webpack');

window.moment = moment;
window.app = angular.module('ericgehrman', ['ui.router']);


require('./js/templates.js');
require('./js/controllers.js'); 
require('./js/routes.js'); 
