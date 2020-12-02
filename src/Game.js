import React, { useState } from 'react';

import GameSquare from './GameSquare';

const Game = () => {
    const [inPlay, setInPlay] = useState(false)

    return (
        <div>
            <div>
                {inPlay || <button onClick={() => setInPlay(!inPlay)}>Get Started</button>}
                {inPlay && <GameSquare />}
            </div>
        </div>
    );
};

export default Game;