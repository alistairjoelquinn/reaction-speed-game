import React from 'react';
import { useSelector } from 'react-redux';

import { socket } from './socket';

const SingleGameBox = ({ color, userId, userColor }) => {
    const takenColors = useSelector(state => state.socket?.takenColors);
    const readyToPlay = useSelector(state => state.socket?.readyToPlay);
    const colorScores = useSelector(state => state.socket?.scores);

    const taken = takenColors.some(takenColor => takenColor === color);

    if (!readyToPlay) {
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
    } else {
        if (color === userColor) {
            return (
                <div
                    className={`game-item ${color} disabled`}
                >{colorScores[color]}</div>
            )
        } else {
            return (
                <div
                    className={`game-item ${color} disabled`}
                >{colorScores[color]}</div>
            )
        }
    }
};

export default SingleGameBox;