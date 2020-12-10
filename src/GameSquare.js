import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import MiddleButton from './MiddleButton';
import UserInfo from './UserInfo';
import { DisplayUserColorStyles, GameAreaStyles, GameStyles, WelcomeMessageStyles } from './styles/GameSquareStyles';
import SingleGameBox from './SingleGameBox';

const gameColors = ['green', 'pink', 'blue', 'orange'];

const GameSquare = () => {
    const userId = useSelector(state => state.socket?.id);
    const userColor = useSelector(state => state.socket?.userColor);
    const welcomeMessage = useSelector(state => state.socket?.welcomeMessage);
    const readyToPlay = useSelector(state => state.socket?.readyToPlay);
    const [displayUserColor, setDisplayUserColor] = useState(false)
    const [displayWelcomeMessage, setDisplayWelcomeMessage] = useState(true)

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

    const welcomeMessageHandler = () => {
        setTimeout(() => {
            setDisplayWelcomeMessage(false);
        }, 2000);
    }

    useEffect(() => {
        welcomeMessageHandler()
    }, [welcomeMessage])

    if (displayWelcomeMessage) {
        return <UserInfo welcomeMessage={welcomeMessage} />
    }

    return (
        <>
            <GameAreaStyles>
                <GameStyles>
                    {gameColors.map(color => (
                        <SingleGameBox
                            key={color}
                            color={color}
                            userId={userId}
                        />
                    ))}
                </GameStyles>
                <MiddleButton />
                {displayUserColor &&
                    <DisplayUserColorStyles>
                        <UserInfo color={userColor} />
                    </DisplayUserColorStyles>
                }
            </GameAreaStyles>
            {readyToPlay || <WelcomeMessageStyles>
                Waiting for players<div className="dot-pulse dots"></div>
            </WelcomeMessageStyles>}
        </>
    );
};

export default GameSquare;