function speed(input) {
  let speeds = Number(input[0]);
  if (speeds < 100) {
    console.log("Less than 100");
  }
  if (speeds >= 100 && speeds <= 200) {
    console.log("Between 100 and 200");
  } else if (speeds > 200) {
    console.log("Greater than 200");
  }
}

speed(["99"]);

// switch (true) {
//   case speeds < 100:
//     console.log("Less than 100");
//     break;
//   case speeds >= 100:
//     console.log("Between 100 and 200");
//     break;
//   case speeds > 200:
//     console.log("Greater than 200");
//     break;
// }
