const {
    Db1,
    Db2,
    jsonfile,
    path1,
    path2,
    Service, } = require("../ex3/solution");

const awilix = require("awilix");
// create a container
const container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY
})

container.register({
    jsonfile: awilix.asValue(jsonfile),
    path1: awilix.asValue(path1),
    path2: awilix.asValue(path2),
    db1: awilix.asClass(Db1),
    db2: awilix.asClass(Db2),
    service: awilix.asClass(Service),
})

const service = container.resolve("service");
const res = service.combine_person_salary_by_id(2);
console.log("res", res);
