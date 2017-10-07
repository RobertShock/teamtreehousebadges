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
