class F1 {
    constructor(x) {
        this.x = x;
    };

    f1(y) {
        return this.x + y;
    };
};

class F2 {
    constructor(f) {
        this.f = f;
    }

    f2(x) {
        let res = this.f.f1(x);
        return res * 2;
    }
}

class F3 {
    constructor(f) {
        this.f = f;
    }

    f3(x) {
        let res = this.f.f2(x);
        return res % 3;
    }
}

module.exports = {
    F1, F2, F3,
}
