function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);
    let apartmentPrice = 0;
    let studioPrice = 0;

    if (month === "May" || month === "October") {
        apartmentPrice = nights * 65;
        studioPrice = nights * 50;
        if (nights > 7 && nights <= 14) {
            studioPrice = 50 * 0.95;
        }else if (nights > 14) {
            apartmentPrice = nights * 65 * 0.90;
            studioPrice = nights * 50 * 0.70;
        }
    } else if (month === "June" || month === "September") {
        apartmentPrice = nights * 68.70;
        studioPrice = nights * 75.20;
        if (nights > 14) {
            apartmentPrice = nights * 68.70 * 0.90;
            studioPrice = nights * 75.20 * 0.80;
        }
    } else if (month === "July" || month === "August") {
        apartmentPrice = nights * 77;
        studioPrice = nights * 76;
        if (nights > 14) {
            apartmentPrice = nights * 77 * 0.90;
            console.log(apartmentPrice)
        }
    }          

    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`)
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}
hotelRoom(["August", "20"])


