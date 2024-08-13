import multiplicar from "./multiplicador";

const firstM = document.querySelector("#primer-num");
const secondM = document.querySelector("#segundo-num");
const form = document.querySelector("#multiplicar-form");
const div = document.querySelector("#resultadoM-div");

form.addEventListener("submit", (event) => {
     event.preventDefault();

  const firstNumber = Number.parseInt(firstM.value);
  const secondNumber = Number.parseInt(secondM.value);

  div.innerHTML = "<p>" + multiplicar(firstNumber, secondNumber) + "</p>";
});
