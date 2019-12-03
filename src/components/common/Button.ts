import styled, { css } from "styled-components/macro";

interface ButtonProps {
  variant?: "round" | "square";
}

const Geometry = {
  round: css`
    width: 32px;
    height: 32px;
    padding: 0;
    border-radius: 50%;
  `,
  square: css`
    padding: 0.4em 0.8em;
    border-radius: 4px;
  `
};

export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  ${({ variant = "round" }) => Geometry[variant]};
  font-size: 1rem;
  color: darkred;
  background: transparent;
  border: 2px solid darkred;

  outline: none;
  cursor: pointer;
  transition: all 0.1s;

  svg {
    width: 20px;
    height: 20px;
    fill: transparent;
    stroke: currentColor;
  }

  &:hover {
    background: darkred;
    color: snow;
  }
`;
