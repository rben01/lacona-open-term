(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.extensions = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.OpenTerminal = undefined;

var _elliptical = require('elliptical');

var _laconaPhrases = require('lacona-phrases');

var _laconaApi = require('lacona-api');

var OpenTerminal = exports.OpenTerminal = {
	extends: [_laconaPhrases.Command],

	execute: function execute(result) {
		var fp = result.filepath;
		var cmd = 'if [[ -d "' + fp + '" ]]; then ' + 'open -a Terminal "' + fp + '"; ' + 'elif [[ -f "' + fp + '" ]]; then ' + 'open -a Terminal "$(dirname "' + fp + '")"; ' + 'else ' + 'osascript -e \'display notification "Failed to run Lacona command"\'; ' + 'fi ';

		(0, _laconaApi.callSystem)({ command: "/bin/bash", args: ['-c', cmd] }, function () {});
	},
	describe: function describe() {
		return (0, _elliptical.createElement)(
			'sequence',
			null,
			(0, _elliptical.createElement)('literal', { text: 'new terminal window at ' }),
			(0, _elliptical.createElement)(_laconaPhrases.File, { id: 'filepath' })
		);
	}
}; /** @jsx createElement */


exports.default = [OpenTerminal];

},{"elliptical":"elliptical","lacona-api":"lacona-api","lacona-phrases":"lacona-phrases"}]},{},[1])(1)
});