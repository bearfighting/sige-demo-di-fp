const { Db1, Db2 } = require("./db");
const { Service } = require("./service");

// const db1 = new Db1();
// db1.select();
// db1.select_by_id(3);

// const db2 = new Db2();
// db2.select();
// db2.select_by_id(3);

const service = new Service();
// service.combine_person_salary();
console.log(service.combine_person_salary_by_id(2));
