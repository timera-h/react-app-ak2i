import React from "react";
import styled from "styled-components";
import ButtonProject from "../utils/ButtonProject";
import ButtonExpertise from "../utils/ButtonExpertise";
import IconsExpertise from "../utils/IconsExpertise";
import OurProjects from "../Components/OurProjects";

function HomePage() {
  const HomeMain = styled.section`
    font-family: "Montserrat", sans-serif;
  `;

  const Slide = styled.section`
    width: 100%;
    min-height: 85vh;
    background: #2b2b62;
  `;

  const Title = styled.h1`
    letter-spacing: 0.1rem;
    font-size: 30px;
  `;

  const Subtitle = styled.h2`
    color: white;
    font-weight: 500;
    font-size: 30px;
  `;

  const Important = styled.span`
    color: #b91e38;
  `;

  const PurpleBloc = styled.article`
    width: 50%;
    min-height: 85vh;
    padding: 50px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  `;
  const BlueVioletBloc = styled.article``;
  const YellowBloc = styled.article``;

  const ContainerOurExpertise = styled.section`
    display: flex;
    color: white;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    background: #7c7caa;
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
    <HomeMain>
      <Slide>
        <PurpleBloc>
          <Title>
            Une équipe spécialisée, <br /> Un développement{" "}
            <Important>sur mesure.</Important>
          </Title>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <ButtonProject />
        </PurpleBloc>
        <BlueVioletBloc></BlueVioletBloc>
        <YellowBloc></YellowBloc>
      </Slide>
      <ContainerOurExpertise>
        <Subtitle>NOTRE EXPERTISE</Subtitle>
        <p>
          L’expérience technique et méthodologique de nos équipes permet une
          flexibilité accrue dans la gestion de projets.
        </p>
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
      <OurProjects /> 
    </HomeMain>
  );
}

export { HomePage };
