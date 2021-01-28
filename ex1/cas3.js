// 4.Solution de programmation fonctionelle
// 4.1 Fonction avec la fermeture
function add_wrapper(x) {
    return function (y) {
        return x + y;
    };
};

// 4.1 Fonctions fléchées
const add_wrapper_1 = (x) => (y) => {
    return x + y;
};

module.exports = {
    add_wrapper,
    add_wrapper_1,
}
