// This function basically checks if the game has been won by any of the players
const checkGameStatus = (firstPosition, secondPosition, thirdPosition) => {
  if (dynamicText.textContent.includes("You won the game 😍"))
    console.log("Checking status of game");

  if (
    buttons[firstPosition].textContent === "X" &&
    buttons[secondPosition].textContent === "X" &&
    buttons[thirdPosition].textContent === "X"
  ) {
    disableButtonsWhenGameIsWon("Player One has won the game");
    return;
  } else if (
    buttons[firstPosition].textContent === "O" &&
    buttons[secondPosition].textContent === "O" &&
    buttons[thirdPosition].textContent === "O"
  ) {
    disableButtonsWhenGameIsWon("Player Two has won the game");
  } else {
    checkDrawStatus();
  }
};

const disableButtonsWhenGameIsWon = (text) => {
  for (let button of buttons) {
    if (button.textContent === "") {
      button.toggleAttribute("disabled");
    }
  }
  dynamicText.textContent = text;
};

const checkDrawStatus = () => {
  for (let button of buttons) {
    if (button.textContent === "") {
      return;
    }
  }
  dynamicText.textContent = "It is a draw! 👍";
};

// const numbersArray = [1, 2, 3, 4, 5, 6, 7];

// console.log(numbersArray[5]);
