import React from "react";
import HeaderLinks from "./HeaderLinks";
import styled from "styled-components";

export default function NavBar() {
  const Content = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    height: 80px;
    flex-wrap: wrap;
    font-family: "Happy Monkey", cursive;
    background:  #0e1742;
    color: white;
  `;

  const Logo = styled.div`
    width: 10%;
    text-align: center;
    font-weight: 900;
    font-size: 20px
  `;

  const ContentLink = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-around;
    font-size: 18px
  `;

  return (
    <Content>
      <Logo>
        <strong>
          AK2I <br /> CONSULTING
        </strong>
      </Logo>
      <ContentLink>
        <HeaderLinks to="#">EXPERTISE</HeaderLinks>
        <HeaderLinks to="#">PROJETS</HeaderLinks>
        <HeaderLinks to="#">ÉQUIPES</HeaderLinks>
        <HeaderLinks to="#">CONTACT</HeaderLinks>
      </ContentLink>
    </Content>
  );
}
