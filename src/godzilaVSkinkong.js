function godzilaVsKinkong(input) {
  let budgetfilm = Number(input[0]);
  let countstatists = Number(input[1]);
  let priceclothesone = Number(input[2]);

  let priceDecor = budgetfilm * 0.1;
  let finalpriceclothes = countstatists * priceclothesone;

  if (countstatists > 150) {
    finalpriceclothes = countstatists * priceclothesone * 0.9;
  }
  let decorandfpriceslothes = priceDecor + finalpriceclothes;
  let finalpricefilm = priceDecor + finalpriceclothes;
  if (decorandfpriceslothes > budgetfilm) {
    let diff = Math.abs(budgetfilm - (priceDecor + finalpriceclothes));
    console.log(`Not enough money!`);
    console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
  } else if (decorandfpriceslothes <= budgetfilm) {
    let diff = Math.abs(budgetfilm - (priceDecor + finalpriceclothes));
    console.log(`Action!`);
    console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
  }
}
godzilaVsKinkong(["9587.88", "222", "55.68"]);

if (true) {
  test = 5;
  console.log(test);
}
console.log("test:", test);
