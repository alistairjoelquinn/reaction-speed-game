import React from 'react';
import { useSelector } from 'react-redux';

import GameSquare from './GameSquare';
import Instructions from './Instructions';

const Game = () => {
    const inPlay = useSelector(state => state.game?.inPlay);

    return (
        <div>
            {inPlay || <Instructions />}
            {inPlay && <GameSquare />}
        </div>
    );
};

export default Game;