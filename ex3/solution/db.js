class Db1 {
    constructor({ jsonfile, path1 }) {
        this.jsonfile = jsonfile;
        this.path1 = path1;
    }

    select() {
        let res = this.jsonfile.readFileSync(this.path1);
        return res.persons;
    }

    select_by_id(id) {
        let res = this.jsonfile.readFileSync(this.path1);
        let person = res ? res.persons.find(e => e.id === id) : null;

        return person;
    }
}

class Db2 {
    constructor({ jsonfile, path2 }) {
        this.jsonfile = jsonfile;
        this.path2 = path2;
    }

    select() {
        let res = this.jsonfile.readFileSync(this.path2);
        return res.salaries;
    }

    select_by_id(id) {
        let res = this.jsonfile.readFileSync(this.path2);
        let salary = res ? res.salaries.find(e => e.id === id) : null;

        return salary;
    }
}


module.exports = {
    Db1, Db2,
}
