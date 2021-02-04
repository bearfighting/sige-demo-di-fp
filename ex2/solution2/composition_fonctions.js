const { inc5, double, modulo3 } = require("./fonctions");

// Function composition 101

/**
 * composition primitive
 * Type: number => number
 */
const foo1 = (x) => {
    return modulo3(double(inc5(x)));
}

/**
 * composition avec la fonction compose
 * @param {*} f2
 * @param {*} f1
 * @param {*} x
 * Type: f(number => number) => f(number => number) => number => number
 */
const compose2 = (f2) => (f1) => (x) => {
    return f2(f1(x));
}

/**
 *
 * @param {*} f3
 * @param {*} f2
 * @param {*} f1
 * @param {*} x
 * Type: f(number => number) => f(number => number) => f(number => number) => number => number
 */
const compose3 = (f3) => (f2) => (f1) => (x) => {
    return f3(f2(f1(x)));
}

/**
 * composition par la fonction compose multiple et la fonction pipe
 * Type: compose :: List(f(number => number)) => number => List(f number)
 */
const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);
const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);


/**
 * composition dans une liste comme le contexte
 * fonctor :: f(number => number) => number => f(number)
 */
const foo5 = (x) => {
    return [x]
        .map(inc5)
        .map(double)
        .map(modulo3)[0]
}

/**
 * Un context Identité
 */
const Identity = value => ({
    map: fn => Identity(fn(value)),
    fold: fn => fn(value),
});

const foo6 = (x) => {
    return Identity(x)
        .map(inc5)
        .map(double)
        .fold(modulo3)
}

// const trace = label => value => {
//     console.log(`${label}: ${value}`);
//     return value;
// };
// const compose_effect = (fns) => (x) => {
//     return Identity(x)
//         .map(compose(fns))
//         .fold(x => x);
// }

module.exports = {
    foo1,
    foo2: compose3(modulo3)(double)(inc5),
    foo3: compose(modulo3, double, inc5),
    foo4: pipe(inc5, double, modulo3),
    foo5,
    foo6,
    // foo7: compose_effect(modulo3, trace, double, trace, inc5),
}
