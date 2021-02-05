import React from "react";
import styled from "styled-components";

export default function ProjectCard() {
  const ProjectsArray = [
    {
      logo: "",
      nom: "VENTE PRIVEE",
      image: "",
      developpementMobile: true,
      AuditRepriseCode: true,
      developpementWeb: true,
    },
    {
      logo: "",
      nom: "Unicef",
      image: "",
      developpementMobile: true,
      AuditRepriseCode: true,
      developpementWeb: true,
    },
    {
      logo: "",
      nom: "Eiffage construction",
      image: "",
      developpementMobile: true,
      AuditRepriseCode: true,
      developpementWeb: true,
    },
    {
      logo: "",
      nom: "AU BUREAU",
      image: "",
      developpementMobile: true,
      AuditRepriseCode: true,
      developpementWeb: true,
    },
    {
      logo: "",
      nom: "OECD",
      image: "",
      developpementMobile: true,
      AuditRepriseCode: true,
      developpementWeb: true,
    },
    {
      logo: "",
      nom: "jeuxvideo.com",
      image: "",
      developpementMobile: true,
      AuditRepriseCode: true,
      developpementWeb: true,
    },
    {
      logo: "",
      nom: "europe assistance",
      image: "",
      developpementMobile: true,
      AuditRepriseCode: true,
      developpementWeb: true,
    },
  ];

  const Card = styled.div`
    height: 300px;
    width: 300px;
    border: 1px solid rgb(225, 225, 225, 0.3);
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const Figcaption = styled.figcaption`
    background: rgb(0, 0, 0, 0.5);
    width: 220px;
    height: 220px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
  `;

  const FigcaptionWhite = styled.figcaption`
    background: rgb(255, 255, 255, 0.5);
    width: 220px;
    height: 220px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
  `;

  const ImageProject = styled.img`
    width: 100px;
    height: auto;
  `;

  const Separation = styled.hr`
    width: 100%;
    margin: auto;
  `;

  const ProjectDetails = styled.div`
    -webkit-transform: rotate(-45deg);
  `;

  const BlocCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <>
        <BlocCard>
      {ProjectsArray.slice(0, 2).map((project, i) => (
          <Card key={i} style={{ backgroundImage: `url(${project.image})` }}>
            <Figcaption>
              <ProjectDetails>
                <ImageProject src={project.logo} alt={project.nom} />

                <Separation />
                {project.developpementMobile === true ? (
                  <p>Développement Mobile</p>
                ) : (
                  ""
                )}
                {project.AuditRepriseCode === true ? (
                  <p>Audit et reprise de code</p>
                ) : (
                  ""
                )}
                {project.developpementWeb === true ? (
                  <p>Développement web</p>
                ) : (
                  ""
                )}
              </ProjectDetails>
            </Figcaption>
          </Card>
      ))}
      </BlocCard>
      <BlocCard>
      {ProjectsArray.slice(2, 5).map((project, index) => (
          <Card key={index} style={{ backgroundImage: `url(${project.image})` }}>
            <Figcaption>
              <ProjectDetails>
                <ImageProject src={project.logo} alt={project.nom} />

                <Separation />
                {project.developpementMobile === true ? (
                  <p>Développement Mobile</p>
                ) : (
                  ""
                )}
                {project.AuditRepriseCode === true ? (
                  <p>Audit et reprise de code</p>
                ) : (
                  ""
                )}
                {project.developpementWeb === true ? (
                  <p>Développement web</p>
                ) : (
                  ""
                )}
              </ProjectDetails>
            </Figcaption>
          </Card>
      ))}
      </BlocCard>
      <BlocCard>
      {ProjectsArray.slice(5, 7).map((project, id) => (
          <Card key={id} style={{ backgroundImage: `url(${project.image})` }}>
            <Figcaption>
              <ProjectDetails>
                <ImageProject src={project.logo} alt={project.nom} />

                <Separation />
                {project.developpementMobile === true ? (
                  <p>Développement Mobile</p>
                ) : (
                  ""
                )}
                {project.AuditRepriseCode === true ? (
                  <p>Audit et reprise de code</p>
                ) : (
                  ""
                )}
                {project.developpementWeb === true ? (
                  <p>Développement web</p>
                ) : (
                  ""
                )}
              </ProjectDetails>
            </Figcaption>
          </Card>
      ))}
      </BlocCard>
    </>
  );
}
