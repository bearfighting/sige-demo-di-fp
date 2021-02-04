const O = {
    f1: null,
    f2: null,
    f3: null,
    f: function (x) {
        let res = this.f1(x);
        res = this.f2(res);
        return this.f3(res);
    }
}

module.exports = {
    O,
}
