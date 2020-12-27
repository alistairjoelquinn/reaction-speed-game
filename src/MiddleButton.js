import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { socket } from './socket';

const MiddleButtonStyles = styled.div`
    z-index: 1;
    .circle-button {
        height: 15rem;
        width: 15rem;
        border-radius: 7.5rem;
        border: 2px solid var(--black);
        background-color: var(--yellow);
        display: flex;
        align-items: center;
        justify-content: center;
        span {
            color: var(--black);
            user-select: none;
        }
    }
    .go {
        background-color: red;
        span {
            color: var(--white);
        }
    }
    @media (max-width: 500px) and (max-height: 600px) {
        .circle-button {
            height: 10rem;
            width: 10rem;
            border-radius: 5rem;
        }
    }
`;

const MiddleButton = ({ start }) => {
    const winner = useSelector(state => state.socket?.winner);
    const playersGo = useSelector(state => state.socket?.playersGo);
    const [gameBegin, setGameBegin] = useState(false);

    useEffect(() => {
        if (start) {
            setGameBegin(true);
        }
    }, [start]);

    return (
        <MiddleButtonStyles>
            {winner ?
                <div
                    className="circle-button"
                >
                    <span>{winner} wins!</span>
                </div>
                :
                <div
                    className={playersGo ? "circle-button go" : "circle-button"}
                >
                    <span>{playersGo ? "GO!" : (gameBegin ? 'Wait...' : 'GO!')}</span>
                </div>
            }
        </MiddleButtonStyles>
    );
};

export default MiddleButton;