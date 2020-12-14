import React from 'react';
import { useSelector } from 'react-redux';

import { socket } from './socket';

const SingleGameBox = ({ color, userId, userColor }) => {
    const takenColors = useSelector(state => state.socket?.takenColors);
    const taken = takenColors.some(takenColor => takenColor === color);

    if (taken) {
        return (
            <div
                className={`game-item ${color} disabled`}
            >{userColor === color ? 'YOU' : 'TAKEN'}</div>
        )
    } else if (userColor && !Boolean(userColor === color)) {
        return (
            <div
                className={`game-item ${color} disabled`}
            ></div>
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