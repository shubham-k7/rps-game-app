import { Move as MoveType } from '../GameLogic';
import './MoveList.css';
type Props = {
	choice: MoveType;
	choiceClickHandler: (a: MoveType) => void;
};

const Move = ({ choice, choiceClickHandler }: Props) => {
	return (
		<button
			className="move"
			onClick={() => choiceClickHandler(choice)}
		>
			{choice}
		</button>
	);
};

export default Move;
