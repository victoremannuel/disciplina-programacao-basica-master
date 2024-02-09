let linha = 0
let coluna = 0

while (linha < 8) {
    while (coluna < 8) {
        if (coluna % 2 == 0) {
            console.log('#')
        } else {
            console.log('x')
        }
        coluna++
    }
    console.log('\n')
    linha++
}
