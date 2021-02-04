import React from 'react';
import styled from "styled-components";

export default function ProjectCard() {

    const ProjectDetails = [
        {
            logo: "",
            developpementMobile: false,
            auditRepriseCode : false,
            developpementWeb: false, 
        },
        {
            logo: "",
            developpementMobile: false,
            auditRepriseCode : false,
            developpementWeb: false, 
        },
        {
            logo: "",
            developpementMobile: false,
            auditRepriseCode : false,
            developpementWeb: false, 
        },
        {
            logo: "",
            developpementMobile: false,
            auditRepriseCode : false,
            developpementWeb: false, 
        },
        {
            logo: "",
            developpementMobile: false,
            auditRepriseCode : false,
            developpementWeb: false, 
        },
        {
            logo: "",
            developpementMobile: false,
            auditRepriseCode : false,
            developpementWeb: false, 
        },
        {
            logo: "",
            developpementMobile: false,
            auditRepriseCode : false,
            developpementWeb: false, 
        }
    ];

    function AfficheFigcaption() {
        for(let i = 0; i < ProjectCard.length; i++){
            
        }
    }

    const Card = styled.div`
    height: 300px;
    width: 300px;
    border: 1px solid rgb(225, 225, 225, .3);
    margin: 10px;
    display: flex; 
    justify-content: center;
    align-items: center
    `;

    const Figcaption = styled.figcaption`
        background: rgb(0,0,0,.5);
        width: 220px;
        height: 220px;
    `;

    return (
        <Card>
            <Figcaption></Figcaption>
        </Card>
    )
}
