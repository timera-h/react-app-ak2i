import React from "react";
import styled from "styled-components";
import ProjectCard from "../utils/ProjectCard";
import SubTittle from "./SubTittle";
import Paragraph from "../Components/Paragraph";

export default function OurProjects() {

 
  const Container = styled.section`
    width: 100%;
    min-height: 150vh;
    background: #2f2b53;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px 
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



  return (
    <Container id="projects">
        <SubTittle>NOS PROJETS</SubTittle>
        <Paragraph>
          L’expérience technique et méthodologique de nos équipes permet une
          flexibilité accrue dans la gestion de projets.
        </Paragraph>
      <ContainerProjectCard>
       <ProjectCard/>
      </ContainerProjectCard>
    </Container>
  );
}
