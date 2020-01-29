(function (factory) {
    typeof define === 'function' && define.amd
        ? define(factory)
        : typeof exports === 'object'
        ? (module.exports = factory())
        : factory()
})(function () {
    'use strict';

    var _window = typeof window !== 'undefined' ? window : this;

    var Plugin1 = (_window.Plugin1 = function Plugin1(element, settings = {})
    {
        var _ = this;

        _.el = element;

        _.defaults = {
            speed: 500,
        };

        _.options = Object.assign({}, _.defaults, settings);

        _.init()
    });

    Plugin1.prototype.init = function () {
        var _ = this;

        console.debug(`New function : `, _);
    };

    return Plugin1;

});

var start = performance.now();
new Plugin1(document.querySelector('.plugin'));
new Plugin1(document.querySelector('.other'), {accessible: true});
var end = performance.now() - start;
console.debug(`New function performance : ${end} ms`);