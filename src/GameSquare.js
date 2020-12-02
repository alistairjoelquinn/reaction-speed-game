import React from 'react';
import styled from 'styled-components';

import MiddleButton from './MiddleButton';

const GameAreaStyles = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const GameStyles = styled.div`
    position: absolute;
    height: 60vh;
    width: 50vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1.3rem;
    .game-item:hover {
        opacity: 0.8;
    }
    .item-one {
        background-color: var(--green);
    }
    .item-two {
        background-color: var(--pink);
    }
    .item-three {
        background-color: var(--blue);
    }
    .item-four {
        background-color: var(--orange);
    }
`;

const GameSquare = () => {
    return (
        <GameAreaStyles>
            <GameStyles>
                <div className="game-item item-one"></div>
                <div className="game-item item-two"></div>
                <div className="game-item item-three"></div>
                <div className="game-item item-four"></div>
            </GameStyles>
            <MiddleButton />
        </GameAreaStyles>
    );
};

export default GameSquare;