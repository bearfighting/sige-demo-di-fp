// Ce n'est pas une bonne solution

/**
 * f1 5, 6, 8
 * @param {*} x
 */
function f1(x) {
    return 5 + x;
}

/**
 * f2 x * 2
 * @param {*} x
 */
function f2(x) {
    // une référence implicte, la fonction dépend directement d'une autre fonction.
    let res = f1(x);
    return res * 2;
}

/**
 * f3
 * @param {*} x
 */
function f3(x) {
    let res = f2(x);
    return res % 3;
}


module.exports = {
    f1,
    f2,
    f3,
}
