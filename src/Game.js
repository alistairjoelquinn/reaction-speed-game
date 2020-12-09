import React from 'react';
import { useSelector } from 'react-redux';

import GameSquare from './GameSquare';
import UserInfo from './UserInfo';

const Game = () => {
    const inPlay = useSelector(state => state.game?.inPlay);

    return (
        <div>
            {inPlay || <UserInfo instructions />}
            {inPlay && <GameSquare />}
        </div>
    );
};

export default Game;