import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { socket } from './socket';
import { startGame } from '../store/game/actions';

const UserInfoStyles = styled.div`
    width: 50vw;
    height: 50vh;
    border: 5px solid var(--orange);
    padding: 20px;
    border-radius: 5rem;
    background-color: var(--white);
    color: var(--black);
    font-size: 2.3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .bigger-text {
        font-size: 3rem;
    }
    p {
        text-align: center;
    }
    button {
        align-self: center;
        width: 150px;
        border: 2px solid var(--orange);
        border-radius: 1.5rem;
    }
    @media (max-width: 1200px) {
        p {
            font-size: 2rem;
        }
    }
    @media (max-width: 850px) {
        p {
            font-size: 1.9rem;
        }
    }
    @media (max-width: 720px) {
        p {
            font-size: 1.7rem;
        }
        button {
            font-size: 2rem;
            width: 100px;
        }
    }
    @media (max-height: 550px) {
        button#start {
            font-size: 1.8rem;
            padding: 5px 0;
        }
    }
`;

const UserInfo = ({ color, instructions, welcomeMessage, ready }) => {
    const gameFull = useSelector(state => state.socket?.gameFull);
    const id = useSelector(state => state.socket?.id);
    const dispatch = useDispatch();

    return (
        <>
            <UserInfoStyles>
                {color && <p style={{ fontSize: '5rem' }}>
                    You selected {color} as your color!
                </p>}
                {instructions && (!gameFull ?
                    <>
                        <p>
                            This game is a test of your reaction speed! Everyone has to choose a color, After that you need to wait for the circle in the middle to turn red.
                        </p>
                        <p>
                            Once that happens, the first person to hit their square gets the point! Be careful though, if you hit before the light turns red you'll be deducted 1 point! First to 5 points wins the game...
                        </p>
                        <button id="start" onClick={() => {
                            socket.emit('startGame', id);
                            dispatch(startGame());
                        }}>
                            Start
                        </button>
                    </>
                    :
                    <>
                        <p className="bigger-text">This game is already full, there is no more space for new players!</p>
                        <p className="bigger-text">Snooze ya lose sucker....</p>
                    </>)
                }
                {ready &&
                    <>
                        <p className="bigger-text">Wait for the red light, first to hit their square wins the point</p>
                        <p className="bigger-text">First to 5 points wins the game</p>
                    </>
                }
                {welcomeMessage &&
                    <p className="bigger-text">{welcomeMessage}</p>
                }
            </UserInfoStyles>
        </>
    );
};

export default UserInfo;