import { useState } from 'react';
import { GameMode } from '../../types/game';
import { Result } from '../GameLogic';
import Round from '../Round/Round';
import { getStorageValue } from '../../utils/utils';

type Props = {
	gameMode: GameMode | null;
	player1Name: string;
	player2Name: string;
};

interface IGameState {
	player1Score: number;
	player2Score: number;
}

const defaultGameState = {
	player1Score: 0,
	player2Score: 0,
};

const Game = ({ gameMode, player1Name, player2Name }: Props) => {
	const [gameState, setGameState] = useState<IGameState>(defaultGameState);
	const saveGameState = () => {
		// call API to save game state by passing player details (name, score)
		const { key, value } = getStorageValue(
			player1Name,
			player2Name,
			gameState.player1Score,
			gameState.player2Score
		);
		localStorage.setItem(`game:${key}`, value);
	};
	const handleGameScoreUpdate = (result: Result) => {
		setGameState((gs) => {
			switch (result) {
				case 3:
					return {
						...gs,
						player1Score: gs.player1Score + 0.5,
						player2Score: gs.player2Score + 0.5,
					} as IGameState;
				case 1:
					return {
						...gs,
						player1Score: gs.player1Score + 1,
					} as IGameState;
				case 2:
					return {
						...gs,
						player2Score: gs.player2Score + 1,
					} as IGameState;
				default:
					return defaultGameState;
			}
		});
	};
	return (
		<>
			<div>
				{player1Name}'s Score: {gameState.player1Score}
			</div>
			<div>
				{player2Name}'s Score: {gameState.player2Score}
			</div>
			<div className="game-heading">
				<Round
					player1Name={player1Name}
					player2Name={player2Name}
					gameMode={gameMode}
					onRoundFinish={handleGameScoreUpdate}
				/>
				<button onClick={saveGameState}>Save Game</button>
			</div>
		</>
	);
};

export default Game;
