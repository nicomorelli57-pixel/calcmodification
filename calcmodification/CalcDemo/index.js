alert("Welcome to the Super Wide Calculator!    Dont Click the link on the bottom");

const allButtonEls = document.querySelectorAll("button");
const inputFieldEl = document.getElementById("result");

for (let i = 0; i < allButtonEls.length; i++) {
  allButtonEls[i].addEventListener("click", () => {
    const buttonValue = allButtonEls[i].textContent;
    
    // Ignore clicks on the navigation list links at the bottom
    if (allButtonEls[i].closest('ul')) return;

    if (buttonValue === "C") {
      clearResult();
    } else if (buttonValue === "=") {
      calculateResult();
    } else {
      appendValue(buttonValue);
    }
  });
}

function clearResult() {
  inputFieldEl.value = "";
}

function calculateResult() {
  try {
    inputFieldEl.value = eval(inputFieldEl.value);
  } catch (err) {
    inputFieldEl.value = "Fix Yo Equation Twin"; 
  }
}

function appendValue(buttonValue) {
  inputFieldEl.value += buttonValue;
}
