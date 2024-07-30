import React from "react";
import styled, { css } from "styled-components";

function Button({ primary, circle, second, background, children }) {
  return (
    <StyledButton
      primary={primary}
      circle={circle}
      second={second}
      background={background}
    >
      {children}
    </StyledButton>
  );
}

export default Button;

const StyledButton = styled.button`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  gap: 5px;
  text-transform: uppercase;
  cursor: pointer;
  letter-spacing: 1.1px;

  ${(props) =>
    props.primary &&
    css`
      color: black;
    `}

  ${(props) =>
    props.circle &&
    css`
      color: white;
      font-size: 26px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 2px solid white;
    `}

  ${(props) =>
    props.second &&
    css`
      color: rgb(249, 249, 249);
      transition: all ease 200ms;
      border: 2px solid white;

      &:hover {
        background: rgba(249, 249, 249, 0.5);
      }
    `}

  ${(props) =>
    props.background &&
    css`
      background-color: ${props.background};
    `}
`;
