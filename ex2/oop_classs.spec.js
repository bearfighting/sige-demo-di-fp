const expect = require("chai").expect;
const { F1, F2, F3 } = require("./oop_classs");

describe("Test de la classe F1", () => {
    it("add 5 + 10 est égal à 15", () => {
        let f = new F1(5);
        expect(f.f1(10)).to.equal(15);
    })
})

describe("Test de la classe de F2", () => {
    it("2 * f(10) est égal à 20", () => {
        class Mock {
            f1(x) {
                return x;
            }
        }
        let f = new F2(new Mock());
        expect(f.f2(10)).to.equal(20);
    })
})

describe("Test de la fonction de f3", () => {
    it("modulo de res de f(11) est égal à 2", () => {
        class Mock {
            f2(x) {
                return x;
            }
        }
        let f = new F3(new Mock());
        expect(f.f3(11)).to.equal(2);
    })
})
