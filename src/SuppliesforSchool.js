function schoolMaterials(input) {
let packagepens = Number(input[0]);
let packagemarkers = Number(input[1]);
let detergent = Number(input[2]);
let discount = Number(input[3]);

let pricepens = packagepens * 5.80;
let pricemarkers = packagemarkers * 7.20;
let detergentorice = detergent * 1.20;
let finalprice = packagepens * 5.80 + packagemarkers * 7.20 + detergent * 1.20;
let disconutedprice = finalprice - (finalprice * 0.25);
console.log(disconutedprice);

}
schoolMaterials(["2 ","3 ","4 ","25 "])