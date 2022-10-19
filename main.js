const submitBtn = document.querySelector(".submit-btn");
const slider = document.querySelector(".slider");
const copybtn = document.querySelector(".copy-pass");

let passwordLength = 0;
let strength = 0;

let upparcase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "1234567890";
let symbols = "@#$";

slider.addEventListener("click", generatePasswords); //Generate Password (For Desktop)
slider.addEventListener("touchmove", generatePasswords); //For mobiles device (Any touchscrn)

function generatePasswords(event) {
  //Function Get input and show passwrd to the user
  let passLength = parseInt(event.target.value); //Getting range input value

  let passwordstring = "";
  strength = 0;
  if (document.querySelector(".uppercase-ltr").checked) {
    strength += 1;
    passwordstring += upparcase;
  }
  if (document.querySelector(".lowercase-ltr").checked) {
    strength += 1;
    passwordstring += lowercase;
  }
  if (document.querySelector(".numbers").checked) {
    strength += 1;
    passwordstring += numbers;
  }
  if (document.querySelector(".symbols").checked) {
    strength += 1;
    passwordstring += symbols;
  }

  console.log(strength);
  //Showing password input option not selected warning
  if (strength === 0) {
    document.querySelector(".password-warning").innerHTML =
      "Select password contain";
  } else {
    document.querySelector(".password-warning").innerHTML = "";
  }

  document.querySelector(".passwordlength").innerHTML = passLength;
  document.querySelector(".passwordOutput").innerHTML = `${generatePassword(
    passLength,
    passwordstring
  )}`;

  const passwordStrengthText = document.querySelector(".password-strength");
  const strengthBars = document.querySelectorAll(".bars");

  strengthBars.forEach((bar) => {
    bar.style.backgroundColor = "white";
  });

  if (strength === 1) {
    passwordStrengthText.innerHTML = "Low";
    passwordStrengthText.style.color = "Red";
    for (let i = 0; i < strength; i++) {
      strengthBars[i].style.backgroundColor = "red";
    }
  } else if (strength === 2) {
    passwordStrengthText.innerHTML = "Medium";
    passwordStrengthText.style.color = "yellow";
    for (let i = 0; i < strength; i++) {
      strengthBars[i].style.backgroundColor = "yellow";
    }
  } else if (strength === 3) {
    passwordStrengthText.innerHTML = "High";
    passwordStrengthText.style.color = "orange";
    for (let i = 0; i < strength; i++) {
      strengthBars[i].style.backgroundColor = "orange";
    }
  } else if (strength === 4) {
    passwordStrengthText.innerHTML = "Excellent";
    passwordStrengthText.style.color = "green";
    for (let i = 0; i < strength; i++) {
      strengthBars[i].style.backgroundColor = "green";
    }
  } else {
    passwordStrengthText.innerHTML = "";
  }
}

function generatePassword(length, passwordstring) {
  let generatedPassword = "";
  passwordstringLength = passwordstring.length;
  for (let i = 0; i < length; i++) {
    generatedPassword += passwordstring.charAt(
      Math.floor(Math.random() * passwordstringLength)
    );
  }
  return generatedPassword;
}

copybtn.addEventListener("click", function () {
  console.log("copy");
  let copytext = document.querySelector(".passwordOutput");
  navigator.clipboard.writeText(copytext.textContent);
  alert("Password Copied");
});
