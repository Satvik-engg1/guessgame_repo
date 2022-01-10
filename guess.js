let game_result = document.getElementById("game-result");

let user_input = document.getElementById("userInput");

let rand_num = Math.ceil(Math.random() * 100);



function checkTheGuessedNumber() {

  let guessedNumber = parseInt(user_input.value);

  if (guessedNumber > rand_num) {
    game_result.textContent = "Greater than the correct number! Try Again .";
    game_result.style.backgroundColor = "yellow";
  }

  else if (guessedNumber < rand_num) {
    game_result.textContent = "Lesser than the correct number! Try Again .";
    game_result.style.backgroundColor = "lightblue";
  }

  else if (guessedNumber === rand_num) {
    game_result.textContent = "Congratulations! Your guess is right .";
    game_result.style.backgroundColor = "lightgreen";
  }

  else {
    game_result.textContent = "Please provide a valid input.";
    game_result.style.backgroundColor = "grey";
  }

}