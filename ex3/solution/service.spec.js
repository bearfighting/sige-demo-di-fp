const { Service } = require("./service");
const expect = require("chai").expect;

describe("Test de la classe de service", () => {
    it("Tester les valeurs de la db", () => {
        db1 = {
            select_by_id: () => {
                return { id: 2, name: 'heihei' };
            },
        }
        db2 = {
            select_by_id: () => {
                return { id: 2, salary: 60000 };
            }
        }
        const res = { id: 2, name: 'heihei', salary: 60000 };
        const service = new Service({ db1, db2 });
        expect(service.combine_person_salary_by_id(2)).to.deep.equal(res);
    })
})
