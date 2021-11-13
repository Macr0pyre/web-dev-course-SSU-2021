function formatNumber(array) {
    if (!Array.isArray(array) || array.length != 10 || !array.every(elem => Number.isInteger(elem) && elem <= 9 && elem >= 0)) {
        return "Invalid input";
    } else {
        const num = array.join('');
        return `+7 (${num.slice(0, 3)}) ${num.slice(3, 6)}-${num.slice(6, 8)}-${num.slice(8, 10)}`
    }
}

console.log("7.1. Форматирование телефонного номера");
console.log(formatNumber([9, 0, 0, 1, 1, 1, 2, 2, 3, 3]));
console.log(formatNumber([9, 2, 7, 5, 5, 5, 6, 6, 9, 0]));
console.log(formatNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, -11]));
console.log(formatNumber([]));
console.log(formatNumber("aw93fha="));