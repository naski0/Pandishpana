function speed(input) {
  let speeds = Number(input[0]);
  if (speeds <= 10) {
    console.log("slow");
  }
  if (speeds > 10 && speeds <= 50) {
    console.log("average");
  } else if (speeds >= 50 && speeds <= 150) {
    console.log("fast");
  } else if (speeds >= 150 && speeds <= 1000) {
    console.log("ultra fast");
  } else if (speeds > 1000) {
    console.log("extremely fast");
  }
}

speed(["10"]);
p;
