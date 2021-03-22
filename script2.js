// Email Validation
const email = document.getElementById("email");

const els2 = document.getElementById("instruct2");

function inputFocus() {
  const el = document.getElementById("control3");
  el.style.visibility = "hidden";
}

email.onfocus = inputFocus;

function inputBlur(e) {
  const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const inputValue = e.target.value;

  if (inputValue.match(mailformat)) {
    els2.style.color = "green";
    els2.textContent = "Correct Email Address!";
    els2.style.visibility = "visible";
  } else {
    els2.style.color = "tomato";
    els2.textContent = "Incorrect email format";
    els2.style.visibility = "visible";
  }
}

email.onblur = inputBlur;
