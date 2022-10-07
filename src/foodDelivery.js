function foodDelivery(input) {
    let chikenmenus = Number(input[0]);
    let fishesmenu = Number(input[1]);
    let vegmenus = Number(input[2]);

    let chickenmenusprice = chikenmenus * 10.35;
    let fishmenuspice = fishesmenu * 12.40;
    let vegmenusprice = vegmenus * 8.15;
    let allmenusprice = chickenmenusprice + fishmenuspice + vegmenusprice;
    let desertprice = allmenusprice * 0.2;
    let deeliveryprice = 2.5;
    let pricesum = allmenusprice + desertprice + deeliveryprice;


    console.log(pricesum)
}
foodDelivery(["2 ", "4 ", "3 "])