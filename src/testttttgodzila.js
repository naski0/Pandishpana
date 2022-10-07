function godzilaVsKingKong(input) {
    let budget = Number(input[0]);
    let statnum = Number(input[1]);
    let priceclothes = Number(input[2]);
    let decorprice = budget * 0.10;
    if (statnum > 150) {
        priceclothes -= (priceclothes * 0.10)
    }
    let decorandclothes = statnum * priceclothes;
    let sumfilm = decorprice + decorandclothes;
    if (sumfilm > budget) {
        let diff = budget - sumfilm;
        console.log(`Not enough money!
Wingard needs ${diff.toFixed(2) * -1} leva more.`)
    } else if (sumfilm <= budget) {
        let diff = (budget - sumfilm);
        console.log(`Action!
Wingard starts filming with ${diff.toFixed(2)} leva left.`)
    }
}


godzilaVsKingKong(["20000", "120", "55.5"])