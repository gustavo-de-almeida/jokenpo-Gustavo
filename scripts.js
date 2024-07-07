const result = document.querySelector(".resultado");
const humanScore = document.querySelector("#minha-ptc");
const machineScore = document.querySelector("#ptc-alexa");

let humanScoreNumber = 0;
let machineScoreNumber = 0;

const GAME_OPTIONS = {
    ROCK:'rock',
    PAPER:'paper',
    TESOURA: 'tesoura'
}


const playhuman = (humanChoice) => {
  playthegame(humanChoice, playmachine());
};

const playmachine = () => {
  const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER,GAME_OPTIONS.TESOURA];
  const randonNumber = Math.floor(Math.random() * 3);

  return choices[randonNumber];
};

const playthegame = (human, machine) => {
  console.log(`humano:${human} maquina:${machine}`);
  if (human === machine) {
    result.innerHTML = "Deu empate";
  } else if (
    (human === "paper" && machine === "rock") ||
    (human === "rock" && machine === "tesoura") ||
    (human === "tesoura" && machine === "paper")
  ) {
    humanScoreNumber++
    humanScore.innerHTML = humanScoreNumber
    result.innerHTML = "voce ganhou";
  } else {
    machineScoreNumber++
    machineScore.innerHTML = machineScoreNumber
    result.innerHTML = "Voce perdeu pra Alexa"

  }
};
