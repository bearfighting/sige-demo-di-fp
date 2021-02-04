/**
 * class O avec une fonction f(x)
 * attribut f1, f2, f3
 */
class O {
    constructor(f1, f2, f3) {
        this.f1 = f1;
        this.f2 = f2;
        this.f3 = f3;
    }

    f(x) {
        let res = this.f1(x);
        res = this.f2(res);
        return this.f3(res);
    }
}

// La limite: c'est encore difficile devant l'extension ex f1, f2, f3, f4;

module.exports = {
    O,
}
