function password([arg1]) {
  let password = arg1;
  if (password == "s3cr3t!P@ssw0rd") {
    console.log("Welcome");
  } else {
    console.log("Wrong password!");
  }
}
password(["s3ct!P@ssw0rd"]);
