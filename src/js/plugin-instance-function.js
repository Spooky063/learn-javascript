'use strict';

var Plugin = (element, settings = {}) => {

    var defaults = {
        speed: 500,
    };

    var options = Object.assign({}, defaults, settings);

    var _ = {
        el: element,
        defaults,
        options
    };

    return _;

};

var start = performance.now();
var p1 = Plugin(document.querySelector('.plugin'));
var p2 = Plugin(document.querySelector('.other'), {accessible: true});
console.debug(`Instance function : `, p1);
console.debug(`Instance function : `, p2);
var end = performance.now() - start;
console.debug(`Instance function performance : ${end} ms`);