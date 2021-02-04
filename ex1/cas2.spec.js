const expect = require("chai").expect;
const { Addtion_Class, Addtion_Objet } = require("./cas2");

describe("Addition_Class", () => {
    it("Addtion_class pour une addition de 5 + x", () => {
        const addtion = new Addtion_Class(5);

        expect(addtion.add(10)).to.be.equal(15);
    })

    it("Addtion_class pour une addition de 10 + x", () => {
        const addtion = new Addtion_Class(10);

        expect(addtion.add(10)).to.be.equal(20);
    })
})

describe("Addtion_Objet", () => {
    it("Addtion_Object pour une addition de 5 + x", () => {
        let inc = {};
        Object.assign(inc, Addtion_Objet);
        inc.x = 5;
        expect(inc.add(10)).to.be.equal(15);
    })

    it("Addtion_Object pour une addition de 10 + x", () => {
        let inc = {};
        Object.assign(inc, Addtion_Objet, { x: 10 });
        expect(inc.add(10)).to.be.equal(20);
    })
})
