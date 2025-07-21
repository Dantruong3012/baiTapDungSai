function kieu() {
  let answer = document.getElementById("b").value;
  if (answer == "ECMAScript") {
    document.getElementById("a").innerText = "Result: Right!";
  } else {
    document.getElementById("a").innerText = "Result: Didn’t know? ECMAScript!";
  }
}
