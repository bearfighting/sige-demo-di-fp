const expect = require("chai").expect;
const { O } = require("./oop_class");

describe("Test de la class de o", () => {
    it("tester avec les fonctions identité", () => {
        const f = (x) => x;
        const o = new O(f, f, f);
        expect(o.f(1)).to.equal(1);
    })
})
