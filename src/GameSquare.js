import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { socket } from './socket';
import MiddleButton from './MiddleButton';
import UserInfo from './UserInfo';
import { DisplayUserColorStyles, GameAreaStyles, GameStyles } from './styles/GameSquareStyles';

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
                <DisplayUserColorStyles>
                    <UserInfo color={userColor} />
                </DisplayUserColorStyles>
            }
        </GameAreaStyles>
    );
};

export default GameSquare;