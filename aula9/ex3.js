function calculaImposto(taxa, custo) {
    return custo * (1 + (taxa/100))
}

const x = calculaImposto(10, 100)
console.log(x.toFixed(2))