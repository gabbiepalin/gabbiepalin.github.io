let playerwins_counter = 0;
let computerwins_counter = 0;
let drawGames_counter = 0;
let totalGames_counter = 0;
let restartButton = document.getElementById('restartButton');
restartButton.style.display = "none";

// when decide winner happens +1 to counter 

function getComputerChoice() {
  //generate a random number between zero and two
  const randomNumber = Math.floor(Math.random() * 3);

  //make computer pick a random number for choice (0 = "rock", 1 = "paper", 2 = "scissors")
  switch (randomNumber) {
    case 0:
      return "wand";
    case 1:
      return "bow";
    case 2:
      return "mace";
  }
}

function getPlayerChoice(choice) {
  //when person hits button call this function
  let playerchoice = choice;
  // console.log(choice)
  // console.log("pc " + playerchoice)
  const computerChoice = getComputerChoice();
  // console.log("computers choice", computerChoice);
  let decision = decideWinner(playerchoice, computerChoice);
  totalGames_counter++;

  if (decision == "win") playerwins_counter = playerwins_counter + 1;
  if (decision == "lose") computerwins_counter = computerwins_counter + 1;
  if (decision == "draw") drawGames_counter = drawGames_counter + 1;


  console.log("You: " + decision);
  console.log("Player wins: " + playerwins_counter);
  console.log("Computer wins: " + computerwins_counter);
  console.log("Total Games Played:" + totalGames_counter);

  if (playerwins_counter == 5 || computerwins_counter == 5) {
    declareWinner();
    showRestartGame();
  }
  document.getElementById("player-wins").innerHTML = playerwins_counter;
  document.getElementById("enemy-wins").innerHTML = computerwins_counter;
  document.getElementById("draw-games").innerHTML = drawGames_counter;
  document.getElementById("total-games").innerHTML = totalGames_counter;
}

function clearCounters() {
  console.log("Clearing Counters!");
  playerwins_counter = 0;
  computerwins_counter = 0;
  drawGames_counter = 0;
  totalGames_counter = 0;
  restartButton.style.display = "none";
  document.getElementById("player-wins").innerHTML = playerwins_counter;
  document.getElementById("enemy-wins").innerHTML = computerwins_counter;
  document.getElementById("draw-games").innerHTML = drawGames_counter;
  document.getElementById("total-games").innerHTML = totalGames_counter;
}

function decideWinner(playerchoice, computerChoice) {
  // this function will decide if comp or player wins, loses, or draws
  // get player choice
  // get computer choice
  // decide who wins
  console.log(playerchoice + " " + computerChoice);
  console.log("Starting Decision");

  if (playerchoice == "mace") {
    if (computerChoice == "mace") return "draw";
    if (computerChoice == "bow") return "win";
    if (computerChoice == "wand") return "lose";
  }
  if (playerchoice == "bow") {
    if (computerChoice == "mace") return "lose";
    if (computerChoice == "bow") return "draw";
    if (computerChoice == "wand") return "win";
  }
  if (playerchoice == "wand") {
    if (computerChoice == "mace") return "win";
    if (computerChoice == "bow") return "lose";
    if (computerChoice == "wand") return "draw";
  }
  return "Error";
}

function showRestartGame() {
  console.log("restart game");
  restartButton.style.display = "block";
  console.log("Player wins: " + playerwins_counter);
  console.log("Computer wins: " + computerwins_counter);
}

function declareWinner() {
  console.log("declaring winner")
  let winnerMessage = "";
  if (playerwins_counter === 5) {winnerMessage =  "You Win, Computer loses!"};
  if (computerwins_counter === 5) {winnerMessage =  "You Lose, Computer Wins!"};

  document.getElementById("winner-declaration").innerHTML = `${winnerMessage}`;
}

//next step would be to put both the computer and player choice together to play one round of the game



``