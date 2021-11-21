let zero = (fn) => typeof fn != "undefined" ? operation(fn[0], fn[1], 0) : 0;
let one = (fn) => typeof fn != "undefined" ? operation(fn[0], fn[1], 1) : 1;
let two = (fn) => typeof fn != "undefined" ? operation(fn[0], fn[1], 2) : 2;
let three = (fn) => typeof fn != "undefined" ? operation(fn[0], fn[1], 3) : 3;
let four = (fn) => typeof fn != "undefined" ? operation(fn[0], fn[1], 4) : 4;
let five = (fn) => typeof fn != "undefined" ? operation(fn[0], fn[1], 5) : 5;
let six = (fn) => typeof fn != "undefined" ? operation(fn[0], fn[1], 6) : 6;
let seven = (fn) => typeof fn != "undefined" ? operation(fn[0], fn[1], 7) : 7;
let eight = (fn) => typeof fn != "undefined" ? operation(fn[0], fn[1], 8) : 8;
let nine = (fn) => typeof fn != "undefined" ? operation(fn[0], fn[1], 9) : 9;

let plus = (fn) => [fn, '+'];
let minus = (fn) => [fn, '-'];
let times = (fn) => [fn, '*'];
let dividedBy = (fn) => [fn, '/'];


function operation(b, operator, a) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return Math.floor(a / b);
    }
}

console.log("8.3. Калькулятор из функций: ")
console.log(seven(times(five())));
console.log(four(plus(nine())));
console.log(eight(minus(three())));
console.log(six(dividedBy(two())));
console.log(eight(dividedBy(three())));
console.log(three(times(three(times(three())))));
console.log(two(plus(two(times(two(minus(one())))))));
console.log(zero(plus(one(dividedBy(one())))));
console.log(one(dividedBy(zero())));
console.log(one());