import { css } from "styled-components";

const ArrowStyle = css`
  background: #100b3d;
  border: 1px solid #100b3d;
  position: relative;
  &:after,
  &:before {
    border: solid transparent;
    content: " ";
    height: 0;
    left: 100%;
    position: absolute;
    pointer-events: none;
    width: 0;
  }
  &:after {
    border-left-color: #100b3d;
    border-width: 15px;
    margin-top: -15px;
    top: 50%;
  }
  &:before {
    border-left-color: #100b3d;
    border-width: 16px;
    margin-top: -16px;
    top: 50%;
  }
`;

export default ArrowStyle;
