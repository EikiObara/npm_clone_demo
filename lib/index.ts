namespace Hello {
    export const CONSTANT_VALUE: string = "CONSTANT_VALUE";

    export function hello(word: string = "Typescript") {
        return `Hello, ${word}`;
    }
}
