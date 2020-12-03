import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import GameSquare from './GameSquare';
import Instructions from './Instructions';

const Game = () => {
    const inPlay = useSelector(state => state.inPlay);
    console.log('inPlay: ', inPlay);

    return (
        <div>
            <div>
                {inPlay || <Instructions />}
                {inPlay && <GameSquare />}
            </div>
        </div>
    );
};

export default Game;