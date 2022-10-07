function newHouse(input){
    let flowerType = input[0];
    let flowersCount = Number(input[1]);
    let budget = Number(input[2]);

    let flowerPrice = 0;
     
    switch(flowerType){
        case 'Roses':
            flowerPrice = flowersCount * 5;
            if (flowersCount > 80){
                flowerPrice = flowerPrice * 0.90;
            }
            break;
        case 'Dahlias':
            flowerPrice = flowersCount * 3.80;
            if (flowersCount > 90){
                flowerPrice = flowerPrice * 0.85;
            }
            break;
        case 'Tulips':
            flowerPrice = flowersCount * 2.80;
            if (flowersCount > 80){
                flowerPrice = flowerPrice * 0.85;
            }
            break;
        case 'Narcissus':
            flowerPrice = flowersCount * 3;
            if (flowersCount < 120){
                flowerPrice = flowerPrice * 1.15;
            }
            break;
        case 'Gladiolus':
            flowerPrice = flowersCount * 2.50;
            if (flowersCount < 80){
                flowerPrice = flowerPrice * 1.20;
            }
            break;
            
    }
    if (budget >= flowerPrice){
        console.log(`Hey, you have a great garden with ${flowersCount} ${flowerType} and ${(budget - flowerPrice).toFixed(2)} leva left.`);
    }else {
        finalPrice = (flowerPrice - budget).toFixed(2)
        console.log(`Not enough money, you need ${(flowerPrice - budget).toFixed(2)} leva more.`);
    }
    
}
newHouse(["Tulips", "88", "260"])


