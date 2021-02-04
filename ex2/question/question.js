function foo(n) {
    let res = n + 5;
    res = res * 2;
    return res % 3;
}

// Deux Questions 1: inflexible à modifier ex si l'on veut une autre fonction (n + 10) * 2 % 3 et encore l'acienne fonction.
// 2: difficile vers l'extension, si l'on autre fonction (n + 5) * 2 % 3 == 1

module.exports = {
    foo,
}
