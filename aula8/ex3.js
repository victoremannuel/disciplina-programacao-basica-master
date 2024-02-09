function jogarDado() {
    const min = 1
    const max = 6
    return Math.floor(Math.random() * (max - min) + min);
}

let f1 = 0
let f2 = 0
let f3 = 0
let f4 = 0
let f5 = 0
let f6 = 0

const count = 10

for (let i = 0; i < count; i++) {
    const n = jogarDado()
    console.log(n)
    if (n == 1) f1++
    if (n == 2) f2++
    if (n == 3) f3++
    if (n == 4) f4++
    if (n == 5) f5++
    if (n == 6) f6++
}

console.log(f1/count)
console.log(f2/count)
console.log(f3/count)
console.log(f4/count)
console.log(f5/count)
console.log(f6/count)