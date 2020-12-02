import React from 'react';
import styled from 'styled-components';
import 'normalize.css';

import GameSquare from './GameSquare';
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
    background-color: dodgerblue;
    color: antiquewhite;
    div.title {
        position: absolute;
        top: 20px;
        font-family: FrenchFries;
        font-size: 40px;
        font-weight: bold;
        -webkit-text-stroke: 1px tomato;
    }
`;

export default function App() {
    return (
        <AppStyles>
            <GlobalStyles />
            <Typography />
            <div className="title">Reaction Speed Game</div>
            <GameSquare />
        </AppStyles>
    );
};