import React from 'react';
import styled from 'styled-components';
import 'normalize.css';

import Game from './Game';
import GlobalStyles from './styles/GlobalStyles';
import Typography from './styles/Typography';

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
        font-size: 70px;
        font-weight: bold;
        color: transparent;
        -webkit-text-stroke: 1px var(--orange);
        margin-bottom: 30px;
    }
`;

export default function App() {
    return (
        <AppStyles>
            <GlobalStyles />
            <Typography />
            <div className="title">Reaction Speed Game</div>
            <Game />
        </AppStyles>
    );
};