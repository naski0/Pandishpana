function smartLilly(input) {

    let lillysAge= Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let signletoyPrice = Number(input[2]);

    let toysCounter = 0; 
    let savedMoney = 0;
    let stoleMonety = 0;
    let addMoney = 10;


    for(let currentAge = 1; currentAge <= lillysAge; currentAge++){

     if(currentAge % 2 ===0){
        //money
        savedMoney += addMoney;
        addMoney += 10;
        stoleMonety++;

     }else {
        toysCounter++;
     }

    }
    let taotalMoneyFromToys = signletoyPrice * toysCounter;
    let totalSavedMoney = taotalMoneyFromToys + savedMoney - stoleMonety

    if(totalSavedMoney >= washingMachinePrice){
        console.log(`Yes! ${(totalSavedMoney - washingMachinePrice).toFixed(2)}`);

    }else {
        console.log(`No! ${(washingMachinePrice - totalSavedMoney).toFixed(2)}`);
    }


}
smartLilly(["10", "170.00","6"]);