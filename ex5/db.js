const jsonfile = require("jsonfile");

const path1 = "./ex3/data/db1.json";
const path2 = "./ex3/data/db2.json";


class Db1 {
    constructor() {
        this.jsonfile = jsonfile;
    }

    select() {
        let res = this.jsonfile.readFileSync(path1);
        console.log(res.persons);
        return res.persons;
    }

    select_by_id(id) {
        let res = this.jsonfile.readFileSync(path1);
        let person = res ? res.persons.filter(e => e.id === id) : null;
        console.log(person);

        return person;
    }
}

class Db2 {
    constructor() {
        this.jsonfile = jsonfile;
    }

    select() {
        let res = this.jsonfile.readFileSync(path2);
        console.log(res.salaries);
        return res.salaries;
    }

    select_by_id(id) {
        let res = this.jsonfile.readFileSync(path2);
        let salary = res ? res.salaries.filter(e => e.id === id) : null;
        console.log(salary);

        return salary;
    }
}


module.exports = {
    Db1, Db2,
}
