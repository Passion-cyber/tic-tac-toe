let firstValue = "X";
let lastValue = "O";

let dynamicText = document.getElementById("display");
// let buttons = document.querySelectorAll(".box");
let buttons = document.getElementsByClassName("box");
let restartButton = document.getElementById("restartButton");

// console.log("buttons:", buttons);
// console.log("dynamic text:", dynamicText);
// console.log("restart button:", restartButton);

for (let button of buttons) {
  button.addEventListener("click", () => {
    if (button.textContent !== "") {
      return;
    }

    if (lastValue === "O") {
      button.textContent = "X";
      lastValue = "X";
      dynamicText.textContent = `Player 2's turn to play`;
    //   checkGameStatus();
    } else {
      button.textContent = "O";
      lastValue = "O";
      dynamicText.textContent = `Player 1's turn to play`;
    //   checkGameStatus();
    }


  });
}
