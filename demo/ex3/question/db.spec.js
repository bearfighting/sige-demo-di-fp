const { Db1, Db2 } = require("./db");

const expect = require("chai").expect;

describe("Test de la classe de Db1", () => {
    it("Tester les valeurs de la db1", () => {
        const res = { id: 2, name: 'heihei' };
        const db = new Db1();
        expect(db.select_by_id(2)).to.deep.equal(res);
    })
})

describe("Test de la classe de Db2", () => {
    it("Tester les valeurs de la db2", () => {
        const res = { id: 2, salary: 60000 };
        const db = new Db2();
        expect(db.select_by_id(2)).to.deep.equal(res);
    })
})
