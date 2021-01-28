// 3. les autres functions qui fait l'addtion d'un certain nomber et x
// 3.1 Solution de OOP
class Addtion_Class {
    constructor(x) {
        this.x = x;
    }

    add(y) {
        return this.x + y;
    }
};

// 3.2 Solution de OOP avec un objet
const Addtion_Objet = {
    x: null,
    add: function (y) {
        return this.x + y;
    }
}

module.exports = {
    Addtion_Class,
    Addtion_Objet,
}
