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
    height: 75vh;
    width: 95vw;
    margin: 20px 0;
    background: #3c3c69;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center
  `;

  const OurExpertise = styled.article`
    height: 50vh;
    width: 50vw;
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
    background: #ddb352;
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
