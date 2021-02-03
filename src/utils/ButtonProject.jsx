import React from 'react';
import styled from 'styled-components';

export default function ButtonProject() {
    const Button = styled.button`
        border: none;
        background: #e7c452;
        width: 250px;
        height: 50px
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
