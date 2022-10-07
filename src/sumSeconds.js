function sumSeconds([arg1, arg2, arg3]) {
  let timeFirst = Number(arg1);
  let timeSecond = Number(arg2);
  let timeThird = Number(arg3);

  let totaltime = timeFirst + timeSecond + timeThird;

  let minutes = Math.floor(totaltime / 60);

  let seconds = totaltime % 60;

  if (seconds < 10) {
    console.log(`${minutes}:0${seconds}`);
  } else {
    console.log(`${minutes}:${seconds}`);
  }
}
sumSeconds(["35", "45", "44"]);
