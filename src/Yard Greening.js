function yardGreening(input) {

    let metres = (input[0]);
    let finalSum = metres * 7.61;
    let discount = finalSum * 0.18;
    let discountedPrice = finalSum - discount;
    console.log(`The final price is: ${discountedPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}
    yardGreening([550.00])