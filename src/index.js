let a = "";
let b = "";
let sign = "";
let finish = false;

const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["-", "+", "X", "/"];

const out = document.querySelector(".calc-scrin p");
const ac = document.querySelector(".ac");
const buttons = document.querySelector(".buttons");

function clearAll() {
  a = "";
  b = "";
  sign = "";
  finish = false;
  out.textContent = 0;
  console.log(a, b, sign);
}

ac.addEventListener("click", clearAll);

buttons.addEventListener("click", (e) => {
  if (!e.target.classList.contains("btn")) return;
  if (e.target.classList.contains("ac")) return;
  const key = e.target.textContent;
  out.textContent = "";
  if (digits.includes(key)) {
    if (b === "" && sign === "") {
      a += key;
      out.textContent = a;
    } else if (a !== "" && b !== "" && finish) {
      b = key;
      finish = false;
      out.textContent = a;
    } else {
      b += key;
      out.textContent = b;
    }
    console.log(a, b, sign);
    return;
  }
  if (action.includes(key)) {
    sign = key;
    out.textContent = sign;
  }
  if (key === "=") {
    if (b === "") b = a;
    switch (sign) {
      case "+":
        a = +a + +b;
        break;
      case "-":
        a = +a - +b;
        break;
      case "X":
        a = +a * +b;
        break;
      case "/":
        if (b === "0") {
          out.textContent = "Error";
          a = "";
          b = "";
          sign = "";
          return;
        }
        a = +a / +b;
        break;
    }
    finish = true;
    out.textContent = a;
  }
});
