/*
Crie um programa que gere automaticamente valores de altura e sexo de 10 pessoas.
Guarde os valores em arrays.
Imprima na tela quantas pessoas são do sexo masculino e quantas pessoas são do sexo feminino.
Mostre também qual é a maior altura e se essa altura é de um homem ou uma mulher.
 */

let alturas = []
let sexos = []

function geraAltura() {
    const min = 1.4
    const max = 2.2
    return +(Math.random() * (max - min) + min).toFixed(2);
}

function geraSexo() {
    return Math.random() > 0.5 ? 'M' : 'F'
}

let n = 10

for (let i = 0; i < n; i++) {
    alturas[i] = geraAltura()
    sexos[i] = geraSexo()
}

let contadorMasculino = 0
let contadorFeminino = 0
let maiorAltura = 0
let sexoDaMaiorPessoa = ''

for (let i = 0; i < n; i++) {
    if (sexos[i] === 'M') contadorMasculino++
    else contadorFeminino++

    if (alturas[i] > maiorAltura) {
        maiorAltura = alturas[i]
        sexoDaMaiorPessoa = sexos[i]
    }
}

console.log('Alturas', alturas)
console.log('Sexos', sexos)

console.log('Homens: ', contadorMasculino)
console.log('Mulheres: ', contadorFeminino)
console.log('Maior altura', maiorAltura)
console.log('Sexo da maior pessoa', sexoDaMaiorPessoa)