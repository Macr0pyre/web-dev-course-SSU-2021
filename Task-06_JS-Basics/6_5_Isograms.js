let isIsogram = (str) => new Set(str.toLowerCase()).size === str.length;

console.log('6.5. Изограммы');
console.log(isIsogram('Dermatoglyphics'));
console.log(isIsogram('aba'));
console.log(isIsogram('moOse'));
console.log(isIsogram(""));