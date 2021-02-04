const { expect } = require("chai");
const { foo1, foo2, foo3, foo4, foo5, foo6 } = require("./composition_fonctions");

describe("Test de la fonction foo1", () => {
    it("(10 + 5) * 2 % 3", () => {
        expect(foo1(10)).to.equal(0);
    })

    it("(15 + 5) * 2 % 3", () => {
        expect(foo1(15)).to.equal(1);
    })

    it("(20 + 5) * 2 % 3", () => {
        expect(foo1(20)).to.equal(2);
    })
})

describe("Test de la fonction foo2", () => {
    it("(10 + 5) * 2 % 3", () => {
        expect(foo2(10)).to.equal(0);
    })

    it("(15 + 5) * 2 % 3", () => {
        expect(foo2(15)).to.equal(1);
    })

    it("(20 + 5) * 2 % 3", () => {
        expect(foo2(20)).to.equal(2);
    })
})

describe("Test de la fonction foo3", () => {
    it("(10 + 5) * 2 % 3", () => {
        expect(foo3(10)).to.equal(0);
    })

    it("(15 + 5) * 2 % 3", () => {
        expect(foo3(15)).to.equal(1);
    })

    it("(20 + 5) * 2 % 3", () => {
        expect(foo3(20)).to.equal(2);
    })
})

describe("Test de la fonction foo4", () => {
    it("(10 + 5) * 2 % 3", () => {
        expect(foo4(10)).to.equal(0);
    })

    it("(15 + 5) * 2 % 3", () => {
        expect(foo4(15)).to.equal(1);
    })

    it("(20 + 5) * 2 % 3", () => {
        expect(foo4(20)).to.equal(2);
    })
})

describe("Test de la fonction foo5", () => {
    it("(10 + 5) * 2 % 3", () => {
        expect(foo5(10)).to.equal(0);
    })

    it("(15 + 5) * 2 % 3", () => {
        expect(foo5(15)).to.equal(1);
    })

    it("(20 + 5) * 2 % 3", () => {
        expect(foo5(20)).to.equal(2);
    })
})

describe("Test de la fonction foo6", () => {
    it("(10 + 5) * 2 % 3", () => {
        expect(foo6(10)).to.equal(0);
    })

    it("(15 + 5) * 2 % 3", () => {
        expect(foo6(15)).to.equal(1);
    })

    it("(20 + 5) * 2 % 3", () => {
        expect(foo6(20)).to.equal(2);
    })
})

// describe("Test de la fonction foo7", () => {
//     it("(10 + 5) * 2 % 3", () => {
//         expect(foo7(10)).to.equal(0);
//     })

//     it("(15 + 5) * 2 % 3", () => {
//         expect(foo7(15)).to.equal(1);
//     })

//     it("(20 + 5) * 2 % 3", () => {
//         expect(foo7(20)).to.equal(2);
//     })
// })
