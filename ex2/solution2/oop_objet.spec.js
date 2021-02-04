const expect = require("chai").expect;
const { O } = require("./oop_objet");

describe("Test de la class de o", () => {
    it("tester avec les fonctions identité", () => {
        let o = {};
        const f = (x) => x;
        Object.assign(o, O, { f1: f }, { f2: f }, { f3: f });
        expect(o.f(1)).to.equal(1);
    })
})
