function randomchoice() {
    let int_choice = Math.floor(Math.random()*3)+1; 
    if (int_choice == 1) {
      return "Rock";
    }
    else if (int_choice == 2) {
      return "Scissors"
    }
    else if (int_choice == 3) {
      return "Paper"
    }
  }
  
  let playerchoice = "";
  function play(playerchoice) {
    computerchoice = randomchoice()
    if (computerchoice == "Rock") {
      document.getElementById("computer_paper").style.borderColor = "#000000";
      document.getElementById("computer_scissors").style.borderColor = "#000000";
      document.getElementById("computer_rock").style.borderColor = "#FF0000";
    }
    if (computerchoice == "Paper") {
      document.getElementById("computer_paper").style.borderColor = "#FF0000";
      document.getElementById("computer_scissors").style.borderColor = "#000000";
      document.getElementById("computer_rock").style.borderColor = "#000000";
    }
    if (computerchoice == "Scissors") {
      document.getElementById("computer_paper").style.borderColor = "#000000";
      document.getElementById("computer_scissors").style.borderColor = "#FF0000";
      document.getElementById("computer_rock").style.borderColor = "#000000";
    }
    if (playerchoice == computerchoice) {
      winner = 0;
    }
    else if (playerchoice == "Rock" && computerchoice == "Paper") {
      winner = 2;
    }
    else if (playerchoice == "Scissors" && computerchoice == "Paper") {
      winner = 1;
    }
    else if (playerchoice == "Scissors" && computerchoice == "Rock") {
      winner = 2;
    }
    else if (playerchoice == "Paper" && computerchoice == "Rock") {
      winner = 1;
    }
    else if (playerchoice == "Paper" && computerchoice == "Scissors") {
      winner = 2;
    }
    else if (playerchoice == "Rock" && computerchoice == "Scissors") {
      winner = 1;
    }
    if (winner == 0) {
      document.getElementById("outcome").innerHTML = "You drew";
    }
    else if (winner == 1) {
      document.getElementById("outcome").innerHTML = "You Won!";
      comp_wins = 0;
      document.getElementById("comp_wins").innerHTML = comp_wins;
      current = document.getElementById("wins").innerHTML;
      current = parseInt(current);
      wins = current + 1;
      document.getElementById("wins").innerHTML = wins;
    }
    else if (winner == 2) {
      document.getElementById("outcome").innerHTML = "You lost :(";
      wins = 0;
      console.log(wins)
      document.getElementById("wins").innerHTML = wins;
      comp_current = document.getElementById("comp_wins").innerHTML;
      comp_current = parseInt(comp_current);
      comp_wins = comp_current + 1;
      document.getElementById("comp_wins").innerHTML = comp_wins;
    }
  }
  
  document.getElementById("rock").addEventListener("click", function () {
    playerchoice = "Rock"
    play(playerchoice)
    document.getElementById("paper").style.borderColor = "#000000";
    document.getElementById("scissors").style.borderColor = "#000000";
    document.getElementById("rock").style.borderColor = "#FF0000";
  });
  document.getElementById("paper").addEventListener("click", function () {
    playerchoice = "Paper"
    play(playerchoice)
    document.getElementById("paper").style.borderColor = "#FF0000";
    document.getElementById("scissors").style.borderColor = "#000000";
    document.getElementById("rock").style.borderColor = "#000000";
  });
  document.getElementById("scissors").addEventListener("click", function () {
    playerchoice = "Scissors"
    play(playerchoice)
    document.getElementById("paper").style.borderColor = "#000000";
    document.getElementById("scissors").style.borderColor = "#FF0000";
    document.getElementById("rock").style.borderColor = "#000000";
  });