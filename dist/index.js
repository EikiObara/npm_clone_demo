"use strict";
var Hello;
(function (Hello) {
    Hello.CONSTANT_VALUE = "CONSTANT_VALUE";
    function hello(word = "Typescript") {
        return `Hello, ${word}`;
    }
    Hello.hello = hello;
})(Hello || (Hello = {}));
