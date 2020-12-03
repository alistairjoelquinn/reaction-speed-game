import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import GameSquare from './GameSquare';
import Instructions from './Instructions';

const GameStyles = styled.div`
    width: 100vw;
    display: flex;
    align-self: center;
    justify-content: center;
`;

const Game = () => {
    const inPlay = useSelector(state => state.inPlay);

    return (
        <div>
            {inPlay || <Instructions />}
            {inPlay && <GameSquare />}
        </div>
    );
};

export default Game;