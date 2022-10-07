function fishTank(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);
    
    let volumetank = length * width * height;
    let volumeinlitres = volumetank * 0.001;
    let neededlitres = volumeinlitres * (1 -0.17);
    console.log(neededlitres)
    
}
fishTank(["85", "75", "47", "17"])