function eleminate(n, k) {
    let participants = Array.from(Array(n), (e, i) => i + 1);

    for (let i = 1; participants.length > 1; i++) {
        let current = participants.shift();
        !(i % k == 0) ? participants.push(current): i = 0;
    }

    return participants[0];
}

console.log("8.2. Игра на выбывание: ");
console.log(eleminate(7, 3));
console.log(eleminate(11, 19));
console.log(eleminate(1, 300));
console.log(eleminate(14, 2));
console.log(eleminate(100, 1));