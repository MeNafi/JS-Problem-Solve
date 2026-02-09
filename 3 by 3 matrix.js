let hold = 1;
for (let i = 1; i <= 3; i++) {
    let row = "";

    for (let j = 1; j <= 3; j++) {
        row += `${hold}`;
        hold ++;
    }

    console.log(row);
}
