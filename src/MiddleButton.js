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
`;

const MiddleButton = ({ start }) => {
    const userId = useSelector(state => state.socket?.id);
    const playersGo = useSelector(state => state.socket?.playersGo);
    const [gameBegin, setGameBegin] = useState(false);

    useEffect(() => {
        if (start) {
            setGameBegin(true);
        }
    }, [start]);

    return (
        <MiddleButtonStyles>
            <div
                className={playersGo ? "circle-button go" : "circle-button"}
                onClick={() => socket.emit('playerPress', userId)}
            >
                <span>{playersGo ? "GO!" : (gameBegin ? 'Wait...' : 'GO!')}</span>
            </div>
        </MiddleButtonStyles>
    );
};

export default MiddleButton;