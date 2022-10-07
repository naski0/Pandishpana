function basketballequipment(input) {

let annualtax = Number(input[0]);

let shoesprice = annualtax - (annualtax * 0.40);
let equipmentprice = shoesprice -  (shoesprice * 0.20);
let ballprice = equipmentprice / 4;
let bballaccsesoars = ballprice / 5;
let finalprice = annualtax + shoesprice + equipmentprice + ballprice + bballaccsesoars;

console.log(finalprice);
}


basketballequipment(["365"])
