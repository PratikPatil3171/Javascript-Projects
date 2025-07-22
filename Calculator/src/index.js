// Get the display input field
const display = document.querySelector('input[type="text"]');
const buttons = document.querySelectorAll('input[type="button"]');

let expression = "";

// Button click handling
buttons.forEach((button) => {
  button.addEventListener("click", () => handleInput(button.value));
});

// Handle keyboard input
document.addEventListener("keydown", (e) => {
  const key = e.key;

  if (
    (key >= "0" && key <= "9") ||
    key === "+" || key === "-" || key === "*" || key === "/" || key === "." ||
    key === "(" || key === ")"
  ) {
    handleInput(key);
  } else if (key === "Enter") {
    handleInput("=");
  } else if (key === "Backspace") {
    handleInput("CE");
  } else if (key === "Escape") {
    handleInput("C");
  }
});

// Unified handler for all inputs
function handleInput(value) {
  switch (value) {
    case "C":
      expression = "";
      display.value = "";
      break;

    case "CE":
      expression = expression.slice(0, -1);
      display.value = expression;
      break;

    case "=":
      try {
        expression = eval(expression).toString();
        display.value = expression;
      } catch {
        display.value = "Error";
        expression = "";
      }
      break;

    case "[]":
      const open = (expression.match(/\(/g) || []).length;
      const close = (expression.match(/\)/g) || []).length;
      expression += open === close ? "(" : ")";
      display.value = expression;
      break;

    default:
      expression += value;
      display.value = expression;
      break;
  }
}
