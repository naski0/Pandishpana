function repainting(input) {
    let sqmetresnylon = Number(input[0]);
    let litrespaint = Number(input[1]);
    let paintthinner = Number(input[2]);
    let hoursfordone = Number(input[3]);
    
    let pricenylon = (sqmetresnylon + 2) * 1.50;
    let pricepaint = (litrespaint * 1.1) *14.50;
    let pricepaintthinner = paintthinner * 5.00;
    let pricebag = 0.40;
    let finalprice = pricenylon + pricepaint + pricepaintthinner + pricebag;
    let finalpricemaster = (finalprice * 0.3) * hoursfordone
    let price = finalprice + finalpricemaster

    console.log(price)





}
 repainting(["10", "11", "4", "8"])
