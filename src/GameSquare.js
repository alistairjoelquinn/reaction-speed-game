import React from 'react';
import styled from 'styled-components';

import MiddleButton from './MiddleButton';

const GameAreaStyles = styled.div`
    margin-top: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    .game-container {
        background-color: lightgray;
    }
`;

const GameStyles = styled.div`
    --corners: 7rem;
    background-color: lightgrey;
    padding: 10px;
    border-radius: var(--corners);
    position: absolute;
    height: 60vh;
    width: 50vw;
    z-index: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1.3rem;
    .game-item {
        border: 2px solid var(--black);
    }
    .game-item:hover {
        opacity: 0.6;
    }
    .item-one {
        background-color: var(--green);
        border-top-left-radius: var(--corners);
    }
    .item-two {
        background-color: var(--pink);
        border-top-right-radius: var(--corners);
    }
    .item-three {
        background-color: var(--blue);
        border-bottom-left-radius: var(--corners);
    }
    .item-four {
        background-color: var(--orange);
        border-bottom-right-radius: var(--corners);
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