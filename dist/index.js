const CONSTANT_VALUE = "CONSTANT_VALUE";

function hello(word) {
    if (word === void 0) { word = "TypeScript"; }
    return "Hello, ".concat(word);
}

module.exports = {
    CONSTANT_VALUE: CONSTANT_VALUE,
    hello: hello,
};
