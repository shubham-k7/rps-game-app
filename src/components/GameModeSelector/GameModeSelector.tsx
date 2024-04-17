import { useCallback } from 'react';
import { GameMode } from '../../types/game';
import { GameModeConstants, GameModeLabels } from '../../utils/constants';

type Props = {
	selectedMode: GameMode | null;
	onGameModeSelect: (mode: GameMode | null) => void;
};

const GameModeSelector = ({ selectedMode, onGameModeSelect }: Props) => {
	const onGameModeSelectorCb = useCallback(
		(gameMode: GameMode | null) => () => onGameModeSelect(gameMode),
		[onGameModeSelect]
	);
	return (
		<>
			<div className="game-mode-selector-container">
				{selectedMode && (
					<>
						<div className="game-mode-label">
							Current Mode: {GameModeLabels[selectedMode]}
						</div>
					</>
				)}
				{!selectedMode && (
					<div className="game-mode-selector">
						<button
							className={
								selectedMode === GameModeConstants.PVP
									? 'selected'
									: ''
							}
							onClick={onGameModeSelectorCb(
								GameModeConstants.PVP
							)}
						>
							{GameModeLabels[GameModeConstants.PVP]}
						</button>
						<button
							className={
								selectedMode === GameModeConstants.PVC
									? 'selected'
									: ''
							}
							onClick={onGameModeSelectorCb(
								GameModeConstants.PVC
							)}
						>
							{GameModeLabels[GameModeConstants.PVC]}
						</button>
					</div>
				)}
			</div>
		</>
	);
};

export default GameModeSelector;
