import React from 'react';
import { useSelector } from 'react-redux';

import { socket } from './socket';

const SingleGameBox = ({ color, userId }) => {
    const takenColors = useSelector(state => state.socket?.takenColors);
    const userColor = useSelector(state => state.socket?.userColor);

    const taken = takenColors.some(takenColor => takenColor === color);

    if (taken) {
        return (
            <div
                className={`game-item ${color} disabled`}
            >{userColor === color ? 'YOU' : 'TAKEN'}</div>
        )
    } else {
        return (
            <div
                className={`game-item ${color}`}
                onClick={() => socket.emit('colorSelected', { userId, userColor: color })}
            ></div>
        );
    }
};

export default SingleGameBox;