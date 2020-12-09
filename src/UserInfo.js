import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { startGame } from '../store/game/actions';

const UserInfoStyles = styled.div`
    width: 50vw;
    height: 50vh;
    border: 5px solid var(--orange);
    padding: 20px;
    border-radius: 5rem;
    background-color: var(--white);
    color: var(--black);
    font-size: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
        text-align: center;
    }
    button {
        align-self: center;
        width: 150px;
        border: 2px solid var(--orange);
        border-radius: 1.5rem;
    }
`;

const UserInfo = ({ color, instructions, welcomeMessage }) => {
    const gameFull = useSelector(state => state.socket?.gameFull);
    const dispatch = useDispatch();

    return (
        <>
            <UserInfoStyles>
                {color && <p style={{ fontSize: '60px' }}>
                    You selected {color} as your color!
                </p>}
                {instructions && (!gameFull ?
                    <>
                        <p>
                            This game is a test of your reaction speed! Everyone has to choose a colour, After that you need to wait for the circle in the middle to turn red, a noise will play at the same time.
                        </p>
                        <p>
                            Once that happens, the first person to hit the space bar gets the point! Be careful though, if you hit the spacebar before the light turns red you'll be disqualified from the round! First to 5 points wins the game...
                        </p>
                        <button onClick={() => dispatch(startGame())}>
                            Start
                        </button>
                    </>
                    :
                    <>
                        <p>This game is already full, there is no more space for new players!</p>
                        <p>Snooze ya lose sucker....</p>
                    </>)
                }
                {welcomeMessage &&
                    <p>{welcomeMessage}</p>
                }
            </UserInfoStyles>
        </>
    );
};

export default UserInfo;