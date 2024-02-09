function fixStart(s) {
    let c = s.charAt(0);
    return c + s.slice(1).replace(new RegExp(c, 'g'), '*');
}

let x = fixStart('babble')
console.log(x)