import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { socket } from './socket';
import MiddleButton from './MiddleButton';
import UserInfo from './UserInfo';

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
    border-radius: 8rem;
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
    .green {
        background-color: var(--green);
        border-top-left-radius: var(--corners);
    }
    .pink {
        background-color: var(--pink);
        border-top-right-radius: var(--corners);
    }
    .blue {
        background-color: var(--blue);
        border-bottom-left-radius: var(--corners);
    }
    .orange {
        background-color: var(--orange);
        border-bottom-right-radius: var(--corners);
    }
`;

const DisplayUserColorStyles = styled.div`

`;

const gameColors = ['green', 'pink', 'blue', 'orange'];

const GameSquare = () => {
    const userId = useSelector(state => state.socket?.id);
    const userColor = useSelector(state => state.socket?.userColor);
    const [displayUserColor, setDisplayUserColor] = useState(false)

    useEffect(
        () => {
            if (userColor) {
                setDisplayUserColor(true);
                setTimeout(() => {
                    setDisplayUserColor(false);
                }, 2000);
            }
        },
        [userColor]
    );

    return (
        <GameAreaStyles>
            <GameStyles>
                {gameColors.map(color => (
                    <div
                        className={`game-item ${color}`}
                        onClick={() => {
                            socket.emit('colorSelected', { userId, userColor: color })
                        }}
                    ></div>
                ))}
            </GameStyles>
            <MiddleButton />
            {displayUserColor &&
                <div style={{
                    position: 'absolute',
                    width: '100vw',
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 5
                }}>
                    <UserInfo color={userColor} />
                </div>
            }
        </GameAreaStyles>
    );
};

export default GameSquare;