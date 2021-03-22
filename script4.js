// Submit Validation
const sign_up = document.getElementById("sign-up");

const els4 = document.getElementById("instruct5");

function handleClick() {
  els4.style.color = "green";
  els4.textContent = "Form was successfully submitted";
  els4.style.visibility = "visible";
}

sign_up.onclick = handleClick;
