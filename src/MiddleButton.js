import React from 'react';

import styled from 'styled-components';

const MiddleButtonStyles = styled.div`
    position: absolute;
    top: 40vh;
    .circle-button {
        height: 15rem;
        width: 15rem;
        border-radius: 7.5rem;
        background-color: var(--white);
        display: flex;
        align-items: center;
        justify-content: center;
        span {
            color: var(--black);
        }
    }
    
`;

const MiddleButton = () => {
    return (
        <MiddleButtonStyles>
            <div className="circle-button">
                <span>GO!</span>
            </div>
        </MiddleButtonStyles>
    );
};

export default MiddleButton;