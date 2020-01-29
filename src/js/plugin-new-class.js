class Plugin2 {

    constructor(element, settings = {})
    {
        var _ = this;

        _.el = element;

        _.defaults = {
            speed: 500,
        };

        _.options = Object.assign({}, _.defaults, settings);

        _.init()
    }

    init()
    {
        var _ = this;

        console.log(`New class : `, _);
    }
}

var start = performance.now();
new Plugin2(document.querySelector('.plugin'));
new Plugin2(document.querySelector('.other'), {accessible: true});
var end = performance.now() - start;
console.debug(`New class performance : ${end} ms`);