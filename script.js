// Username Validation
const username = document.getElementById("username");

const els = document.getElementById("instruct1");

function inputFocus() {
  const el = document.getElementById("input-decor");
  el.style.visibility = "hidden";
  els.textContent = "It must contain at least 5 characters";
  els.style.visibility = "visible";
}

username.onfocus = inputFocus;

function inputBlur(e) {
  let inputLength = e.target.value.length;

  if (inputLength >= 5) {
    els.style.color = "green";
    els.textContent = "Username is available!";
  } else {
    els.textContent = "Username is short";
  }
}

username.onblur = inputBlur;
