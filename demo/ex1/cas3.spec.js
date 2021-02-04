const expect = require("chai").expect;
const { add_wrapper, add_wrapper_1 } = require("./cas3");

describe("Test de add_wrapper", () => {
    it("Test de addtion de 5 + x", () => {
        const add5 = add_wrapper(5);
        expect(add5(10)).to.be.equal(15);
    });

    it("Test de addtion de 10 + x", () => {
        const add5 = add_wrapper(10);
        expect(add5(10)).to.be.equal(20);
    });
});

describe("Test de add_wrapper_1", () => {
    it("Test de addtion de 5 + x", () => {
        const inc5 = add_wrapper_1(5);
        expect(inc5(10)).to.be.equal(15);
    });

    it("Test de addtion de 10 + x", () => {
        const inc5 = add_wrapper_1(10);
        expect(inc5(10)).to.be.equal(20);
    });
})
