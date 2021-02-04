import React from 'react';
import styled from 'styled-components';

export default function ButtonProject() {
    const Button = styled.button`
        border: none;
        background: #ddb352;
        width: 450px;
        height: 60px;
        font-weight: 500;
        font-size: 18px
    `;

    const Arrow = styled.span`
        border-top: 50px solid red;
   
    `;

    return (
        <Button>
            Parlez nous de votre projet <Arrow></Arrow>
        </Button>
    )
}
