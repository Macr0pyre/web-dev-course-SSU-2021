let toflatSort = (arr) => arr.flat(1)
    .sort((a, b) => a - b);

console.log("6.1. Плоский массив");
console.log(toflatSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]));
console.log([]);
console.log(toflatSort([[], []]));
console.log(toflatSort([[], [1]]));
console.log(toflatSort([[1, 3, 5], [-100], [2, 4, 6]]));