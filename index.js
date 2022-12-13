// CITY SEARCH BAR
function clickButton() {
  alert("Searching city...🔍");
}
let button = document.querySelector("#search-button");
button.addEventListener("click", clickButton);

// SIGN UP FORM
function signUp(event) {
  let emailInput = document.querySelector("#userEmail");
  let userInput = document.querySelector("#userName");
  alert(`Your email is ${emailInput.value}`);
  alert(`Your username is ${userInput.value}`);
}
let signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", signUp);
