const { F1, F2, F3 } = require("./oop_classs");

// OOP avec les classes
const f1 = new F1(5);
const f2 = new F2(f1);
const f3 = new F3(f2);

console.log(f3.f3(10))
const f4 = new F3(new F2(new F1(5)));
// f3 == f4;

// OOP avec les objets
