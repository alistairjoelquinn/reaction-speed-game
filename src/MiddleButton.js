import React from 'react';

import styled from 'styled-components';

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
    
`;

const MiddleButton = ({ start }) => {
    return (
        <MiddleButtonStyles>
            <div className="circle-button">
                <span>{start ? 'Wait...' : 'GO!'}</span>
            </div>
        </MiddleButtonStyles>
    );
};

export default MiddleButton;