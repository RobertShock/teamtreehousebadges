(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
const events = require('./events');

let badges = [];

// $.get('../db/teamtreehouse.json').done((data) => {
// 	badges = data.badges;
// 	events.createDomString(badges);
// }).fail((error) => {
// 	console.log(error);
// });


$.ajax({method: 'GET', url: `https://teamtreehouse.com/robertshock.json`}).done((data) => {
	badges = data.badges;
	events.createDomString(badges);
}).fail((error) => {
	console.log(error);
});

module.exports = {};

},{"./events":2}],2:[function(require,module,exports){
"use strict";

const createDomString = (badgez) => {
	var badgeString = '';
    for(var i=0; i<badgez.length; i++){
        var newBadge = "";
        newBadge+=`<img class="badgeImage" src="${badgez[i].icon_url}">`;
        newBadge+= `</div>`;
        badgeString += newBadge;
    }
    printToDom(badgeString);
};

const printToDom = (string) => {
	$('#badgeHolder').html(string);
};

module.exports = {createDomString};

},{}],3:[function(require,module,exports){
"use strict";

require('./events');
require('./badges');

},{"./badges":1,"./events":2}]},{},[3]);
