function mixUp(a, b) {
    return b.slice(0, 2) + a.slice(2) + " " + a.slice(0, 2) + b.slice(2);
}

let x = mixUp('mix', 'pod')
console.log(x)

x = mixUp('dog', 'dinner')
console.log(x)