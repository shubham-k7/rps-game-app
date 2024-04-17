import { useState } from 'react';
import { GameMode } from '../../types/game';
import GameModeSelector from '../GameModeSelector';
import PlayerForm from '../PlayerForm';
import Game from '../Game';
import { GameModeConstants } from '../../utils/constants';

const RockPaperScissors = () => {
	const [gameMode, setGameMode] = useState<GameMode | null>(null);
	const [player1, setPlayer1] = useState<string>('');
	const [player2, setPlayer2] = useState<string>('');
	const [gameStarted, setGameStarted] = useState<Boolean>(false);
	const handleGameModeSelect = (mode: GameMode | null) => {
		setGameMode(mode);
		if (mode === null) {
			setGameStarted(false);
		}
		setPlayer1('');
		setPlayer2('');
	};
	const handleStartGame = (player1Name: string, player2Name: string) => {
		setPlayer1(player1Name);
		if (gameMode === GameModeConstants.PVC) {
			setPlayer2('Computer');
		} else {
			setPlayer2(player2Name);
		}
		setGameStarted(true);
	};

	return (
		<>
			<div>Rock Paper Scissors Game</div>
			{!gameStarted && (
				<>
					<GameModeSelector
						selectedMode={gameMode}
						onGameModeSelect={handleGameModeSelect}
					/>
					{gameMode && (
						<PlayerForm
							gameMode={gameMode}
							onSubmit={handleStartGame}
						/>
					)}
				</>
			)}
			{gameStarted && (
				<Game
					player1Name={player1}
					player2Name={player2}
					gameMode={gameMode}
				/>
			)}
			{gameMode && (
				<button onClick={() => handleGameModeSelect(null)}>
					Reset Game Mode
				</button>
			)}
		</>
	);
};

export default RockPaperScissors;
