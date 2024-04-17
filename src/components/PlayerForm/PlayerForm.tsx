import { useCallback, useState } from 'react';
import { GameMode } from '../../types/game';
import { GameModeConstants } from '../../utils/constants';

type Props = {
	gameMode: GameMode | null;
	onSubmit: (a: string, b: string) => void;
};

const PlayerForm = ({ gameMode, onSubmit }: Props) => {
	const [player1Name, setPlayer1Name] = useState<string>('');
	const [player2Name, setPlayer2Name] = useState<string>('');
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		if (name === 'player1') {
			setPlayer1Name(value);
		} else {
			setPlayer2Name(value);
		}
	};
	const handleSubmit = useCallback<React.FormEventHandler<HTMLFormElement>>(
		(e) => {
			e.preventDefault();
			onSubmit(player1Name, player2Name);
		},
		[player1Name, player2Name]
	);
	return (
		<form onSubmit={handleSubmit}>
			<label>
				<input
					name="player1"
					type="text"
					placeholder="Player 1 Name"
					value={player1Name}
					onChange={handleChange}
					required
				/>
				{gameMode === GameModeConstants.PVP && (
					<input
						type="text"
						name="player2"
						placeholder="Player 2 Name"
						value={player2Name}
						onChange={(e) => setPlayer2Name(e.target.value)}
						required
					/>
				)}
				<button type="submit">Start Game</button>
			</label>
		</form>
	);
};

export default PlayerForm;
