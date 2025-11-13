const display = document.getElementById("display");
const teclasPermitidas = "0123456789+-*/.";

function clearAll() {
  display.innerHTML = "";
}

function backspace() {
  display.innerHTML = display.innerHTML.slice(0, -1);
}

function pressed(n) {
  display.innerHTML += n;
}

function calculate() {
  let calculo = display.innerHTML;
  display.innerHTML = eval(calculo).toFixed(2);;
}

document.addEventListener("DOMContentLoaded", function () {
  const todosButtons = document.querySelectorAll("button");

  todosButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const originalBackground = this.style.background;

      this.style.background = "white";

      setTimeout(() => {
        this.style.background = originalBackground;
      }, 200);
    });
  });
});

document.addEventListener("keydown", function (event) {
  const tecla = event.key;

  if (tecla === "Enter") {
    event.preventDefault();
    calculate();
  } else if (tecla === "Backspace") {
    event.preventDefault();
    backspace();
  } else if (teclasPermitidas.includes(tecla)) {
    event.preventDefault();
    pressed(tecla);
  }
});
