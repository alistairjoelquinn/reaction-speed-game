import React from 'react';
import styled from 'styled-components';
import 'normalize.css';

import Game from './Game';
import GlobalStyles from './styles/GlobalStyles';
import Typography from './styles/Typography';
import Dots from './styles/Dots';
import { useSelector } from 'react-redux';

const AppStyles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    height: 100vh;
    width: 100vw;
    background-color: var(--black);
    div.title {
        position: absolute;
        top: 20px;
        font-size: 7rem;
        font-weight: bold;
        color: transparent;
        -webkit-text-stroke: 1px var(--orange);
        user-select: none;
    }
    .game-end {
        position: absolute;
        top: 20px;
        border: 2px solid var(--orange);
        border-radius: 1.5rem;
    }
    .left {
        left: 20px;
    }
    .right {
        right: 20px;
    }
    @media (max-width: 1000px) {
        div.title {
            font-size: 6rem;
        }
    }
    @media (max-width: 800px) {
        div.title {
            font-size: 5rem;
        }
    }
    @media (max-height: 500px) {
        div.title {
            font-size: 4rem;
        }
    }
`;

export default function App() {
    const winner = useSelector(state => state.socket?.winner);

    return (
        <AppStyles>
            <GlobalStyles />
            <Typography />
            <Dots />
            <div className="title">Reaction Speed Game</div>
            {winner && <button className="game-end left">Play Again</button>}
            {winner && <button className="game-end right">Exit</button>}
            <Game />
        </AppStyles>
    );
};