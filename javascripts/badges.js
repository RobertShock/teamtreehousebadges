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
