function f1(x) {
    return 5 + x;
}

function f2(x) {
    let res = f1(x);
    return res * 2;
}

function f3(x) {
    let res = f2(x);
    return res % 3;
}

module.exports = {
    f1,
    f2,
    f3,
}
