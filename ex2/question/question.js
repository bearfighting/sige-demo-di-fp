function foo(n) {
    let res = n + 5;
    res = res * 2;
    return res % 3;
}

module.exports = {
    foo,
}
