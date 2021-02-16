import React from "react";
import styled from "styled-components";
import SubTittle from "./SubTittle";
import Paragraph from "./Paragraph"

export default function OurTeam() {
  const Container = styled.section`
    width: 100%;
    min-height: 100vh;
    background: #474280;
    padding: 100px 0 0;
    color: white;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center
  `;

  const TeamMember = styled.div `
    width: 400px;
    height: 550px;
    background: white;
  `;

  const MemberPicture = styled.img `
    width: 100%;
    height: 400px
  `;

  const MemberDetails = styled.div `
    width: 100%;
    height: 150px;
    background: #3e3972
  `;

  return (
    <Container id="teams">
      <SubTittle>NOTRE EQUIPE</SubTittle>
      <Paragraph>
        Notre équipe est composée de talents passionnés du digital et experts
        dans son domaine. Grâce aux formations régulières, nous restons à la
        pointe des dernières innovations techniques.
      </Paragraph>
      <TeamMember>
        <MemberPicture src="" alt=""/>
        <MemberDetails>

        </MemberDetails>
      </TeamMember>
    </Container>
  );
}
