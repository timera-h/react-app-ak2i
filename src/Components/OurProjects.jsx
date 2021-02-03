import React from "react";
import styled from "styled-components";

export default function OurProjects() {
  const Container = styled.section`
    width: 100%;
    min-height: 100vh;
    background: #2f2b53;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  `;

  const SubTittle = styled.h2`
    font-weight: 500;
    font-size: 30px;
  `;

  const Paragraphe = styled.p`
    width: 25vw;
    text-align: center
  `;

  return (
    <Container>
      <SubTittle>NOS PROJETS</SubTittle>
      <Paragraphe>L’expérience technique et méthodologique de nos équipes permet une
flexibilité accrue dans la gestion de projets.</Paragraphe>
    </Container>
  );
}
