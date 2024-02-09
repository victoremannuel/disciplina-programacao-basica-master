const nums = []
const n = 2

for (let i = 0; i < n; i++) {
    let num = prompt('Digite um número:')
    num = Number(num)
    if (isNaN(num)) {
        console.log('Número inválido')
    } else {
        nums.push(num)
    }
}

let result = nums.sort(function(a, b){return a-b})
console.log(result)
console.log(result.reverse())