import readlineSync from 'readline-sync';

function getPlayerChoice() {
  const choices = ['КАМЕНЬ', 'НОЖНИЦЫ', 'БУМАГА'];
  let playerChoice;

  do {
    const playerChoiceIndex = readlineSync.keyInSelect(choices, 'Выберите свой выбор:');
    playerChoice = choices[playerChoiceIndex];
  } 
  while (playerChoice === undefined || !choices.includes(playerChoice.trim().toUpperCase()));

  return playerChoice.trim().toUpperCase();
}

function getComputerChoice() {
  const choices = ['КАМЕНЬ', 'НОЖНИЦЫ', 'БУМАГА'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'Ничья';
  }

  if ((playerChoice === 'КАМЕНЬ' && computerChoice === 'НОЖНИЦЫ') ||
      (playerChoice === 'НОЖНИЦЫ' && computerChoice === 'БУМАГА') ||
      (playerChoice === 'БУМАГА' && computerChoice === 'КАМЕНЬ')) {
    return 'Победа';
  }

  return 'Поражение';
}

function playGame() {
  let playerChoice = getPlayerChoice();
  let computerChoice = getComputerChoice();
  console.log(`Вы выбрали: ${playerChoice}`);
  console.log(`Компьютер выбрал: ${computerChoice}`);

  const result = determineWinner(playerChoice, computerChoice);

  if (result === 'Победа') {
    console.log('Вы выиграли!');
  } 
  else if (result === 'Поражение') {
    console.log('Вы проиграли...');
  } 
  else {
    console.log('Ничья.');
  }
}

playGame();