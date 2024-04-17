const DELIMITER = '%DEL%';
export const getStorageValue = (
	player1Name: string,
	player2Name: string,
	player1Score: number,
	player2Score: number
) => {
	let lP1 = player1Name.toLocaleLowerCase();
	let lP2 = player2Name.toLocaleLowerCase();
	if (lP1.localeCompare(lP2) <= 0) {
		return {
			key: `${lP1}${DELIMITER}${lP2}`,
			value: JSON.stringify({
				player1: { name: lP1, score: player1Score },
				player2: { name: lP2, score: player2Score },
			}),
		};
	}
	return {
        key: `${lP2}${DELIMITER}${lP1}`,
        value: JSON.stringify({
            player1: { name: lP2, score: player2Score },
            player2: { name: lP1, score: player1Score },
        }),
    };
};

export const getPlayersAndScores = (key: string) => {
	return key.split(DELIMITER);
};
