import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import MiddleButton from './MiddleButton';
import UserInfo from './UserInfo';
import { DisplayUserInfoStyles, GameAreaStyles, GameStyles, WelcomeMessageStyles } from './styles/GameSquareStyles';
import SingleGameBox from './SingleGameBox';

const gameColors = ['green', 'pink', 'blue', 'orange'];

const GameSquare = () => {
    const userId = useSelector(state => state.socket?.id);
    const userColor = useSelector(state => state.socket?.userColor);
    const welcomeMessage = useSelector(state => state.socket?.welcomeMessage);
    const readyToPlay = useSelector(state => state.socket?.readyToPlay);
    const gameReset = useSelector(state => state.socket?.gameReset);

    const [displayUserColor, setDisplayUserColor] = useState(false);
    const [displayWelcomeMessage, setDisplayWelcomeMessage] = useState(true);
    const [displayReadyToPlay, setDisplayReadyToPlay] = useState(false);
    const [middleButtonStart, setMiddleButtonStart] = useState(false);

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

    useEffect(
        () => {
            if (gameReset) {
                setMiddleButtonStart(false);

            }
        },
        [gameReset]
    );

    const welcomeMessageHandler = () => {
        setTimeout(() => {
            setDisplayWelcomeMessage(false);
        }, 2000);
    }

    const readyToPlayHandler = () => {
        if (readyToPlay) {
            setTimeout(() => {
                setDisplayReadyToPlay(true);
                setTimeout(() => {
                    setDisplayReadyToPlay(false);
                    setTimeout(() => {
                        setMiddleButtonStart(true);
                    }, 10)
                }, 5000);
            }, 2000);
        }
    };

    useEffect(() => {
        welcomeMessageHandler();
    }, [welcomeMessage]);

    useEffect(() => {
        readyToPlayHandler();
    }, [readyToPlay]);

    if (displayWelcomeMessage) {
        return <UserInfo welcomeMessage={welcomeMessage} />;
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
                            userColor={userColor}
                        />
                    ))}
                </GameStyles>
                <MiddleButton start={middleButtonStart} />
                {displayUserColor &&
                    <DisplayUserInfoStyles>
                        <UserInfo color={userColor} />
                    </DisplayUserInfoStyles>
                }
                {displayReadyToPlay &&
                    <DisplayUserInfoStyles>
                        <UserInfo ready />
                    </DisplayUserInfoStyles>
                }
            </GameAreaStyles>
            {readyToPlay || <WelcomeMessageStyles>
                Waiting for players<div className="dot-pulse dots"></div>
            </WelcomeMessageStyles>}
        </>
    );
};

export default GameSquare;