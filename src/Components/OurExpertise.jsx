import React from 'react';
import styled from 'styled-components';
import ButtonExpertise from "../utils/ButtonExpertise";
import IconsExpertise from "../utils/IconsExpertise";
import SubTittle from "../Components/SubTittle";
import Paragraph from "./Paragraph";

export default function OurExpertise() {

    const ContainerOurExpertise = styled.section`
    display: flex;
    color: white;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    background: #7c7caa;
    padding: 100px 
  `;

  const ContentOurExpertise = styled.article`
    height: 60vh;
    width: 85vw;
    background: #3c3c69;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center
  `;

  const OurExpertise = styled.article`
    height: 40vh;
    width: 40vw;
    background: #2d2d4e;
    border-radius: 5px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 20px
  `;

  const RoundYellow = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: #e0cc64;
  `;

    return (
        <ContainerOurExpertise>
        <SubTittle>NOTRE EXPERTISE</SubTittle>
        <Paragraph>
          L’expérience technique et méthodologique de nos équipes permet une
          flexibilité accrue dans la gestion de projets.
        </Paragraph>
        <ContentOurExpertise>
          <div className="bloc">
          <OurExpertise>
            <RoundYellow></RoundYellow>
            <p>
              L’expérience technique et méthodologique de nos équipes permet une
              flexibilité accrue dans la gestion de projets.
            </p>
            <p>
              L’expérience technique et méthodologique de nos équipes.
              ’expérience technique et méthodologique de nos équipes permet une
              flexibilité accrue.
            </p>
          </OurExpertise>
          <ButtonExpertise />
          </div>
        <IconsExpertise />
        </ContentOurExpertise>
      </ContainerOurExpertise>
    )
}
