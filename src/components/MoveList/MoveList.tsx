import { choices } from '../GameLogic';
import { Move as MoveType } from '../GameLogic';
import Move from './Move';

type Props = {
    onMoveSelect: (a: MoveType) => void;
};

const MoveList = ({onMoveSelect}: Props) => {
	return (
		<>
			<div>Choose your move</div>
			<div className="choice-list">
				{choices.map((c) => (
					<Move
                        key={c}
						choice={c}
						choiceClickHandler={onMoveSelect}
					/>
				))}
			</div>
		</>
	);
};

export default MoveList;
