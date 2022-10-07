function shopping(input) {
  if (!input) {
    return;
  }
  if (!Array.isArray(input)) {
    return;
  }
  if (input.length !== 4) {
    return;
  }
  let PetarBudget = Number(input[0]);
  let countVideoCards = Number(input[1]);
  let countProcessors = Number(input[2]);
  let countRamMemory = Number(input[3]);

  let finalPriceVideocards = countVideoCards * 250;
  let singlePriceProcessors = finalPriceVideocards * 0.35;
  let finalPriceProcessors = singlePriceProcessors * countProcessors;
  let singlePriceRamMemory = finalPriceVideocards * 0.1;
  let finalPriceRamMemory = singlePriceRamMemory * countRamMemory;

  let finalPrice =
    finalPriceVideocards + finalPriceProcessors + finalPriceRamMemory;
  if (countVideoCards > countProcessors) {
    finalPrice -= finalPrice * 0.15;
  }
  if (PetarBudget >= finalPrice) {
    let diff = PetarBudget - finalPrice;
    console.log(`You have ${diff.toFixed(2)} leva left!`);
  } else if (PetarBudget < finalPrice) {
    let diff = Math.abs(PetarBudget - finalPrice);
    console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`);
  }
}
shopping(["900.45", "3", "1"]);

// let test = 100;
// while (true) {
//   if (test <= 0) {
//     return;
//   }
//   test -= 1;
//   console.log(test);
// }
