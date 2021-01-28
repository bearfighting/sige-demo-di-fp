let o1 = {
    o: 5,
    f: function (x) {
        return x + this.o;
    },
}

let o2 = {
    o: null,
    f: function (x) {
        let res = this.o.f(x);
        return res * 2;
    },
}

let o3 = {
    o: null,
    f: function () {
        let res = this.o.f(x);
        return res % 3;
    }
}

module.exports = {
    o1, o2, o3,
}
