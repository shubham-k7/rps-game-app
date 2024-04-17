import { useEffect, useState } from 'react';
import { Move, generateComputerChoice } from '../GameLogic';

type Props = {
	onMoveSelect: (choice: Move) => void;
};

const ComputerMove = ({ onMoveSelect }: Props) => {
	const [isComputerThinking, setIsComputerThinking] = useState(true);
	useEffect(() => {
		let timer = setTimeout(() => {
			let choice = generateComputerChoice();
			onMoveSelect(choice);
			setIsComputerThinking(false);
		}, 2000);
		return () => clearTimeout(timer);
	}, []);
	return <>{isComputerThinking && <div>Computer is thinking...</div>}</>;
};

export default ComputerMove;
