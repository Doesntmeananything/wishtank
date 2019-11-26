import styled from "styled-components/macro";

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;

  button {
    width: 30px;
    height: 30px;
    flex-shrink: 0;
    color: darkred;
    background: transparent;
    border: 1px solid darkred;
    outline: none;
    border-radius: 50%;
    margin-left: 12px;
    cursor: pointer;
    transition: all 0.2s;
  }

  button:hover {
    color: white;
    background: darkred;
  }

  button:not(:last-child) {
    margin-bottom: 8px;
  }
`;
