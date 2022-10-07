function worldRangList(input) {
    let tournaments = Number(input[0]);
    let strtingPoints = Number(input[1]);
    let wins = 0;
    let points = strtingPoints;
    for (let index = 2; index < input.length; index++) {
        let stage = input[index];

        switch (stage) {
            case `W`:
                points += 2000;
                wins++;
                break;
            case `F`:
                points += 1200;
                break;
            case `SF`:
                points += 720;
                break;
        }

    }
    let avgPoints = (points - strtingPoints) / tournaments
    console.log(`Final points: ${points}`);
    console.log(`Average points: ${avgPoints}`);
    console.log(`${(wins / tournaments* 100).toFixed(2)}%`);

}
worldRangList(["5",

    "1400",

    "F",

    "SF",

    "W",

    "W",

    "SF"])