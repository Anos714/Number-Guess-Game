let random = Math.floor(Math.random() * (100 - 1 + 1) + 1);
// console.log(random);

let submit = document.querySelector("#submit");
let input = document.querySelector("#input");

let guess = document.querySelector(".guesses");
let remain = document.querySelector(".remain");
let ligh = document.querySelector(".loworhigh");
let startOver = document.querySelector(".para");
let startnewgame = document.querySelector("#startnewgame");

// let para = document.createElement("p");

let prevguess = [];
let numguess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    let userGuess = parseInt(input.value);
    console.log(userGuess);

    validateGuess(userGuess);
  });
}

let validateGuess = (e) => {
  if (e === " " || e < 1 || e > 100 || isNaN(e)) {
    alert(`Please enter valid value`);
  } else {
    prevguess.push(e);
    if (numguess === 10) {
      displayGuess(e);
      displayMessage(`Game over Random number was: ${random}`);
      endGame();
    } else {
      displayGuess(e);
      checkGuess(e);
    }
  }
};

let checkGuess = (e) => {
  if (e === random) {
    displayMessage(`Hurray! You gussed Correct`);
    endGame();
  } else if (e > random) {
    displayMessage(`Oh No! You Guessed Too High`);
  } else if (e < random) {
    displayMessage(`Oh No! You Guessed Too Low`);
  }
};

let displayGuess = (e) => {
  input.value = "";
  guess.innerHTML += `${e},`;
  numguess++;
  remain.innerHTML = `${11 - numguess}`;
};

let displayMessage = (e) => {
  ligh.innerHTML = `<h2>${e}</h2>`;
};

let newGame = (e) => {
  // let newgamebtn = document.querySelector("#newGame");
  startnewgame.addEventListener("click", (e) => {
    random = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    prevguess = [];
    numguess = 1;
    guess.innerHTML = "";
    remain.innerHTML = `${11 - numguess}`;
    input.removeAttribute("disabled");
    // startOver.removeChild(para);
    startnewgame.addEventListener("click", (e) => {
      ligh.innerHTML = "";
    });
  });
};

let endGame = (e) => {
  input.value = "";
  input.setAttribute("disabled", "");
  // para.classList.add("button");
  // para.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  // startOver.appendChild(p);
  playGame = false;
  newGame();
};
