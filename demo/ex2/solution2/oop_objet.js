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

// La limite: c'est encore difficile devant l'extension ex f1, f2, f3, f4;

module.exports = {
    O,
}
