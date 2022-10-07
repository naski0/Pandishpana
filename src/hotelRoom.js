function hotelRoom(input) {
    let month = input[0];
    let nigthsStays = Number(input[1]);

    let studioPrice = 50.00;
    let apartmentPrice = 65.00;
    let studioRent = 0.00;
    let apartmentRent = 0.00;
    switch (month) {
        case "May":
        case "October":
            studioPrice = 50.00;
            apartmentPrice = 65.00;

            studioRent = studioPrice * nigthsStays;
            apartmentRent = apartmentPrice * nigthsStays;
            if (nigthsStays > 14) {
                studioRent *= 0.70;
                apartmentRent *= 0.90;
            } else if (nigthsStays > 7) {
                studioRent *= 0.70;
            }
            break;
        case "June":
        case "September":
            studioPrice = 75.20;
            apartmentPrice = 68.70;

            studioRent = studioPrice * nigthsStays;
            apartmentRent = apartmentPrice * nigthsStays;

            if (nigthsStays > 14) {
                studioRent *= 0.80;
                apartmentRent *= 0.80;
                
            }
            break;
        case "July":
        case "August":
            studioPrice = 76.00;
            apartmentPrice = 77.00;

            studioRent = studioPrice * nigthsStays;
            apartmentRent = apartmentPrice * nigthsStays;

            if (nigthsStays > 14) {
                apartmentRent = apartmentPrice * 0.90;

            }
            break;

    }
    console.log(`Apartment: ${apartmentRent.toFixed(2)} lv.`);
    console.log(`Studio: ${studioRent.toFixed(2)} lv.`);


}
hotelRoom(["August", "20"])

