const expect = require("chai").expect;
const { add5, add10 } = require("./questions");

describe("Test de la fonction de add5", () => {
    it("add5 + 10 est égal à 15", () => {
        expect(add5(10)).to.be.equal(15);
    })
})

describe("Test de la fonction de add10", () => {
    it("add10 + 10 est égal à 20", () => {
        expect(add10(10)).to.be.equal(20);
    })
})
