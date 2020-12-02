import React from 'react';
import styled from 'styled-components';

const GameStyles = styled.div`
    height: 60vh;
    width: 50vw;
    margin-top: 10vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1.3rem;
    .game-item {
        padding: 10px;
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
        <GameStyles>
            <div className="game-item item-one"></div>
            <div className="game-item item-two"></div>
            <div className="game-item item-three"></div>
            <div className="game-item item-four"></div>
        </GameStyles>
    );
};

export default GameSquare;