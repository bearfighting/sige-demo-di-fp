const { Db1, Db2 } = require("./db");
const jsonfile = require("jsonfile");
const path1 = "./ex3/solution/data/db1.json";
const path2 = "./ex3/solution/data/db2.json";

const { Service } = require("./service");

// const db1 = new Db1(jsonfile, path1);
// db1.select();
// db1.select_by_id(3);

// const db2 = new Db2(jsonfile, path2);
// db2.select();
// db2.select_by_id(3);

// const service = new Service(new Db1(jsonfile, path1), new Db2(jsonfile, path2));
// service.combine_person_salary();

module.exports = {
    Db1,
    Db2,
    jsonfile,
    path1,
    path2,
    Service,
}
