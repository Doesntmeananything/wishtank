import styled from "styled-components/macro";

import { Button } from "../common";

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;

  ${Button} {
    width: 30px;
    height: 30px;
    padding: 0;
    margin-left: 12px;
    border-radius: 50%;

    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }
`;
