import React from 'react';
import { useDispatch } from 'react-redux';

import { startGame } from '../store/actions';

const Instructions = () => {
    const dispatch = useDispatch();

    return (
        <div>
            instructionsinosins
            <button onClick={() => dispatch(startGame())}>Start Game</button>
        </div>
    );
};

export default Instructions;