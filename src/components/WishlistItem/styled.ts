import styled from "styled-components/macro";

import { Button } from "../common";

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 18px;

  ${Button} {
    padding: 0;

    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }
`;
