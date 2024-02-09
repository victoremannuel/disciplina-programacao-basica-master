const n = 8

for (let i = 0; i <= n; i++) {
    let s = ''
    for (let j = 0; j < i; j++) {
        s += (j + 1) + ' '
    }
    console.log(s)
}