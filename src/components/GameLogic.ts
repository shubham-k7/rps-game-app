export type Move = 'rock' | 'paper' | 'scissors';
export type Result = number;

export const choices: Move[] = ['rock', 'paper','scissors'];

export const generateComputerChoice = () => {
    const choice = Math.floor(Math.random() * 3);
    switch(choice) {
        case 0:
        case 1:
        case 2:
            return choices[choice];
        default:
            return choices[0];
    }
}

export const determineWinner = (move1?: Move, move2?: Move): Result => {
    if (move1 === move2) {
        return 3;
      } else if (
        (move1 === 'rock' && move2 === 'scissors') ||
        (move1 === 'paper' && move2 === 'rock') ||
        (move1 === 'scissors' && move2 === 'paper')
      ) {
        return 1;
      } else {
        return 2;
      }
}