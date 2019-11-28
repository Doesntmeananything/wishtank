import styled, { css } from "styled-components/macro";

interface ButtonProps {
  variant?: "round" | "square";
}

const Geometry = {
  round: css`
    width: 30px;
    height: 30px;
    padding: 0;
    border-radius: 50%;
  `,
  square: css`
    padding: 0.4em 0.8em;
    border-radius: 4px;
  `
};

export const Button = styled.button<ButtonProps>`
  flex-shrink: 0;
  ${({ variant = "round" }) => Geometry[variant]};
  color: darkred;
  background: transparent;
  border: 1px solid darkred;
  outline: none;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: white;
    background: darkred;
  }
`;
