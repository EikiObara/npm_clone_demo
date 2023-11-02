export const CONSTANT_VALUE = "CONSTANT_VALUE";

export function hello(word) {
    if (word === void 0) { word = "TypeScript"; }
    return "Hello, ".concat(word);
}
