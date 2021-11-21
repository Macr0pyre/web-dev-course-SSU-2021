function generatePassword() {
    const lowerLetters = "abcdefghiklmnopqrstuvwxyz";
    const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const allChars = lowerLetters + upperLetters + numbers;
    const passwordLength = getRandomIntInclusive(6, 20);

    let password = getRandElement(lowerLetters) + getRandElement(upperLetters) + getRandElement(numbers);

    while (password.length < passwordLength) {
        password += getRandElement(allChars);
    }

    return password;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function getRandElement(array) {
    let randomNum = Math.floor(Math.random() * array.length);
    return array[randomNum];
}

console.log("8.1. Генератор паролей: ")
console.log(generatePassword());
console.log(generatePassword());
console.log(generatePassword());