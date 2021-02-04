const expect = require("chai").expect;
const { f1, f2, f3 } = require("./fonction_chaine");

describe("Test de la fonction de f1", () => {
    it("add5 + 10 est égal à 15", () => {
        expect(f1(10)).to.be.equal(15);
    })
})

describe("Test de la fonction de f2", () => {
    it("(add15 + 10) * 2 est égal à 20", () => {
        expect(f2(10)).to.be.equal(30);
    })
})

describe("Test de la fonction de f3", () => {
    it("(add15 + 11) * 2 % 3 est égal à 20", () => {
        expect(f3(11)).to.be.equal(2);
    })
})
