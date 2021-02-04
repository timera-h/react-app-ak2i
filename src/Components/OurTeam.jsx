import React from "react";
import styled from "styled-components";
import SubTittle from "./SubTittle";
import Paragraph from "./Paragraph"

export default function OurTeam() {
  const Container = styled.section`
    width: 100%;
    min-height: 100vh;
    background: #474280;
    padding: 100px;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center
  `;


  return (
    <Container>
      <SubTittle>NOTRE EQUIPE</SubTittle>
      <Paragraph>
        Notre équipe est composée de talents passionnés du digital et experts
        dans son domaine. Grâce aux formations régulières, nous restons à la
        pointe des dernières innovations techniques.
      </Paragraph>
    </Container>
  );
}
