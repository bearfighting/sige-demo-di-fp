const { Db1, Db2 } = require("./db");
class Service {

    constructor() {
        this.db1 = new Db1();
        this.db2 = new Db2();
    }

    combine_person_salary() {
        const persons = this.db1.select();
        const salaries = this.db2.select();

        const persons_salaries = persons.map((person) => {
            let res = {};
            let salary = salaries.find(salary => salary.id === person.id);
            Object.assign(res, person, salary);
            return res;
        })

        return persons_salaries;
    }
}

module.exports = {
    Mailer, Sender,
}
