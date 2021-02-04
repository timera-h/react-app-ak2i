import React from "react";
import styled from "styled-components";
import ButtonProject from "../utils/ButtonProject";
import OurProjects from "../Components/OurProjects";
import OurTeam from "../Components/OurTeam";
import OurExpertise from "../Components/OurExpertise";

function HomePage() {
  const HomeMain = styled.section`
    font-family: "Montserrat", sans-serif;
  `;

  const Slide = styled.section`
    width: 100%;
    min-height: 95vh;
    background: #2b2b62;
  `;

  const Title = styled.h1`
    letter-spacing: 0.1rem;
    font-size: 30px;
  `;

  const Important = styled.span`
    color: #c84b60;
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
      <OurExpertise />
      <OurProjects />
      <OurTeam />
    </HomeMain>
  );
}

export { HomePage };
