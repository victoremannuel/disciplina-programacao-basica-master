const x1 = 10
const x2 = 20
const x3 = 30

function maior(a, b, c) {
    if (a>= b && a>= c) return a
    else if (b >= a && b >= c) return b
    else return c
}

function menor(a, b, c) {
    if (a<= b && a<= c) return a
    else if (b <= a && b <= c) return b
    else return c
}

console.log(maior(x1, x2, x3))
console.log(menor(x1, x2, x3))