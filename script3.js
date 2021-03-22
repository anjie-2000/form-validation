// Password Validation
const password = document.getElementById("password");

const els3 = document.getElementById("instruct3");

function inputFocus() {
  const el = document.getElementById("decor2");
  el.style.visibility = "hidden";
  els3.textContent = "It must be at least 5 characters long";
  els3.style.visibility = "visible";
}

password.onfocus = inputFocus;

function inputBlur() {
  let inputLengtha = password.value.length;

  if ((inputLengtha = 5)) {
    els3.style.color = "green";
    els3.textContent = "Password is ok!";
  } else if (inputLengtha > 5) {
    els3.style.color = "green";
    els3.textContent = "Password is Strong!";
  } else {
    els3.style.color = "tomato";
    els3.textContent = "Password is not long enough";
  }
}

password.onblur = inputBlur;
