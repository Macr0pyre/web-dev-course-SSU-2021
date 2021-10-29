let formatString = (str) => str.split('')
    .reduce((previous, current, i) => previous + current.toUpperCase() + current.toLowerCase().repeat(i) + '-', '')
    .slice(0, -1);

console.log("6.4. Форматирование строки");
console.log(formatString('abcd'));
console.log(formatString('RqaEzty'));
console.log(formatString('cwAt'));