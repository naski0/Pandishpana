function lunchBreak(input) {
  let name = input[0];
  let durationEp = input[1];
  let durationBraek = input[2];

  let lunchTime = durationBraek / 8;
  let breakTime = durationBraek / 4;

  let totalFreeTime = durationBraek - lunchTime - breakTime;

  let diff = Math.abs(totalFreeTime - durationEp);
  if (totalFreeTime >= durationEp) {
    console.log(
      `You have enough time to watch ${name} and left with ${Math.ceil(
        diff
      )} minutes free time.`
    );
  } else {
    console.log(
      `You don't have enough time to watch ${name}, you need ${Math.ceil(
        diff
      )} more minutes.`
    );
  }
}
lunchBreak(["Teen Wolf", "48", "60"]);
