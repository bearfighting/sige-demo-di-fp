class Service {

    constructor({ db1, db2 }) {
        this.db1 = db1;
        this.db2 = db2;
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

    combine_person_salary_by_id(id) {
        const person = this.db1.select_by_id(id);
        const salary = this.db2.select_by_id(id);

        let res = {};
        Object.assign(res, person, salary);

        return res;
    }
}

module.exports = {
    Service
}
