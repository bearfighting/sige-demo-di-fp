const expect = require("chai").expect;
const { o1, o2, o3 } = require("./oop_objet");

describe("Test de l'objet o1", () => {
    it("add 5 + 10 est égal à 15", () => {
        let o = {};
        Object.assign(o, o1);
        expect(o.f(10)).to.equal(15);
    });

    it("add 10 + 10 est égal à 20", () => {
        let o = {};
        Object.assign(o, o1, { o: 10 });
        expect(o.f(10)).to.equal(20);
    })
})

describe("Test de la classe de o2", () => {
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

// describe("Test de la fonction de f3", () => {
//     it("modulo de res de f(11) est égal à 2", () => {
//         class Mock {
//             f2(x) {
//                 return x;
//             }
//         }
//         let f = new F3(new Mock());
//         expect(f.f3(11)).to.equal(2);
//     })
// })
