import React from "react";
import styled from "styled-components";
import Arrow from "../utils/Arrow";
import Rectangle from "../utils/Rectangle";
export default function ButtonProject() {
  const Button = styled.button`
  border: none;
  background: #ddb352;
  width: 450px;
  height: 60px;
  font-weight: 500;
  display: flex;
  justify-content: space-around;
  font-size: 25px;
  align-items: center;
  font-weight: 500;
  color: #100b3d
}
  `;

  const ArrowFlex = styled.div`
    display: flex
  `;
  return (
    <Button>
      Parlez nous de votre projet{" "}
      <ArrowFlex>
        <Rectangle></Rectangle> <Arrow></Arrow>
      </ArrowFlex>
    </Button>
  );
}
