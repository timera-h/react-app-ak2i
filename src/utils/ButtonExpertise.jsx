import React from "react";
import styled from "styled-components";

export default function ButtonExpertise() {

  const ContentBtnExpertise = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 35vh;
    width: 40vw
  `;

  const BtnExpertise = styled.button`
    width: 400px;
    height: 45px;
    color: white;
    font-weight: 600;
    font-size: 18px;
    border: none;
    border-radius: 2px;
    background: #c84b60;
  `;
  return (
    <ContentBtnExpertise>
      <BtnExpertise>DÉVELOPPEMENT WEB</BtnExpertise>
      <BtnExpertise>DÉVELOPPEMENT MOBILE</BtnExpertise>
      <BtnExpertise>AUDIT ET REPRISE DE CODE</BtnExpertise>
      <BtnExpertise>DATA & MACHINE LEARNING</BtnExpertise>
      <BtnExpertise>DEVOPS</BtnExpertise>
    </ContentBtnExpertise>
  );
}
