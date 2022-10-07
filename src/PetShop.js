function petShoping(input){

    let dogfood = parseFloat(input[0]);
    let catfood = parseFloat(input[1]);
    let finalprice = parseFloat(dogfood * 2.5  + catfood * 4);

    console.log(finalprice + " lv.");
}

petShoping([5, 4])