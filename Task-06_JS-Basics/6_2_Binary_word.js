let makeBinary = (str) => str.split('')
    .map(s => s.charCodeAt().toString(2))
    .map(s => '0'.repeat(8 - s.length) + s);

console.log("6.2. Бинарное слово");
console.log(makeBinary('man'));
console.log(makeBinary('AB'));
console.log(makeBinary('wecking'));
console.log(makeBinary('Ruby'));
console.log(makeBinary('Yosemite'));