function vacationReading(input) {

    let numberpage = Number(input[0]);
    let numberpageforhour = Number(input[1]);
    let numberdays = Number(input[2]);

    let hoursperday = (numberpage / numberpageforhour) / numberdays;

    console.log(hoursperday);
    
    

}
vacationReading(["212", "20", "2"]);