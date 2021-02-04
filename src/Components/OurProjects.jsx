import React from "react";
import styled from "styled-components";
import ProjectCard from "../utils/ProjectCard";

export default function OurProjects() {
  const Container = styled.section`
    width: 100%;
    min-height: 150vh;
    background: #2f2b53;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const SubTittle = styled.h2`
    font-weight: 500;
    font-size: 30px;
    text-align: center;
    margin: 30px
  `;

  const Paragraphe = styled.p`
    width: 25vw;
    text-align: center;
  `;

  const ContainerProjectCard = styled.article`
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    margin: 150px 0 0;
    justify-content: center;
    align-items: center;
    -ms-transform: rotate(45deg); /* Internet Explorer */
    -moz-transform: rotate(45deg); /* Firefox */
    -webkit-transform: rotate(45deg); /* Safari et Chrome */
    -o-transform: rotate(45deg); /* Opera */
  `;

  const BlocCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <Container>
        <SubTittle>NOS PROJETS</SubTittle>
        <Paragraphe>
          L’expérience technique et méthodologique de nos équipes permet une
          flexibilité accrue dans la gestion de projets.
        </Paragraphe>
      <ContainerProjectCard>
        <BlocCard>
          <ProjectCard />
          <ProjectCard />
        </BlocCard>
        <BlocCard>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </BlocCard>
        <BlocCard>
          <ProjectCard />
          <ProjectCard />
        </BlocCard>
      </ContainerProjectCard>
    </Container>
  );
}
