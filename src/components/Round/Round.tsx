import { useEffect, useState } from 'react';
import { Move, Result, determineWinner } from '../GameLogic';
import { GameModeConstants } from '../../utils/constants';
import MoveList from '../MoveList';
import { GameMode } from '../../types/game';
import ComputerMove from './ComputerMove';

type Props = {
	player1Name: string;
	player2Name: string;
	gameMode: GameMode | null;
	onRoundFinish: (result: Result) => void;
};
interface IRoundState {
	moves: Move[];
	currentPlayer: number;
}
const defaultRoundState: IRoundState = {
	currentPlayer: 0,
	moves: [],
};

const Round = ({
	gameMode,
	player1Name,
	player2Name,
	onRoundFinish,
}: Props) => {
	const [winnerLabel, setWinnerLabel] = useState<string>('');
	const [roundState, setRoundState] =
		useState<IRoundState>(defaultRoundState);
	const handleMoveSelect = (choice: Move) => {
		setRoundState((prevState: IRoundState) => ({
			moves: [...prevState.moves, choice],
			currentPlayer: (prevState.currentPlayer + 1) % 2,
		}));
	};
	const handleRoundReset = () => {
		setRoundState(defaultRoundState);
	};
	let resultLabel: string = '';
	useEffect(() => {
		if (roundState.moves.length === 2) {
			let result = determineWinner(...roundState.moves);
			switch (result) {
				case 1:
					resultLabel = `${player1Name} won`;
					break;
				case 2:
					resultLabel = `${player2Name} won`;
					break;
				case 3:
					resultLabel = "It's a draw!";
			}
			onRoundFinish(result);
			setWinnerLabel(resultLabel);
		}
	}, [roundState]);
	return (
		<>
			<div className="game-heading">
				{roundState.moves.length !== 2 ? (
					<>
						{roundState.currentPlayer === 0
							? player1Name
							: player2Name}
						's turn
						{roundState.currentPlayer === 1 &&
						gameMode === GameModeConstants.PVC ? (
							<ComputerMove onMoveSelect={handleMoveSelect} />
						) : (
							<MoveList onMoveSelect={handleMoveSelect} />
						)}
					</>
				) : (
					<>
						<div>
							{player1Name} chose: {roundState.moves[0]}
						</div>
						<div>
							{player2Name} chose: {roundState.moves[1]}
						</div>
						{winnerLabel && (
							<div className="winner">{winnerLabel}</div>
						)}
						<button onClick={handleRoundReset}>
							Another Round?
						</button>
					</>
				)}
			</div>
		</>
	);
};

export default Round;
