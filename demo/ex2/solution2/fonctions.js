/**
 * function add
 * @param {*} x
 * @param {*} y
 */
const add = (x) => (y) => {
    return x + y;
}

/**
 * fonction multiplication
 * @param {*} x
 * @param {*} y
 */
const multiplication = (x) => (y) => {
    return x * y;
}

/**
 * modulo
 * @param {*} x
 * @param {*} y
 */
const modulo = (x) => (y) => {
    return y % x;
}

/**
 * exporter les fonctions inc5, double, modulo3
 */
module.exports = {
    inc5: add(5),
    double: multiplication(2),
    modulo3: modulo(3),
}
