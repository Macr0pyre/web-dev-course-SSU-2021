function formatToTable(rows, columns, message) {
    if (!Number.isInteger(rows) || !Number.isInteger(columns) || rows <= 0 || columns <= 0) {
        return "Invalid input";
    }

    const borderRow = GetBorderRow(columns);
    let table = borderRow;

    for (let row = 0; row < rows; row++) {
        let letters = message.substring(0, columns);
        message = message.replace(letters, "");
        table += "\n" + GetMainRow(letters, columns) + "\n" + borderRow;
    }

    return table;
}

function GetBorderRow(columnsCount) {
    let row = "+";
    for (let i = 0; i < columnsCount; i++) {
        row += "---+";
    }
    return row;
}

function GetMainRow(letters, columnsCount) {
    let row = "|";
    for (let i = 0; i < columnsCount; i++) {
        if (letters[i] === undefined) {
            row += "   |";
        } else {
            row += " " + letters[i] + " |";
        }
    }
    return row;
}

console.log("7. 2. Форматирование строки в таблицу");
console.log(formatToTable(4, 4, "Hello World!"));
console.log(formatToTable(4, 3, "Nice pattern"));
console.log(formatToTable(3, 4, "Nice pattern"));
console.log(formatToTable(2, 2, "Nice pattern"));
console.log(formatToTable(3, 5, "Nice pattern"));
console.log(formatToTable(2, 7, ""));
console.log(formatToTable(-1, 4, "aboba"));
console.log(formatToTable(2.4, 3, "abcdE"));