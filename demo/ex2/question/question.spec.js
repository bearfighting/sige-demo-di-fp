const expect = require("chai").expect;
const { foo } = require("./question");

describe("Test de la fonction de foo", () => {
    it("(n + 5) * 2 % 3", () => {
        expect(foo(10)).to.equal(0);
    })
})
