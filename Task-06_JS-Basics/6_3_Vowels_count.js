function countVowels(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

console.log("6.3. Подсчёт гласных");
console.log(countVowels('abracadabra'));
console.log(countVowels('ABRACADABRA'));
console.log(countVowels('o a kak ushakov lil vo kashu kakao'));
console.log(countVowels('my pyx'));