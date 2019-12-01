import styled from "styled-components/macro";

export const Data = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  & > h3 {
    text-align: left;
    align-self: flex-start;
    margin: 0 10px;
  }

  & > span {
    align-self: flex-end;
    margin-top: auto;
  }
`;

export const Image = styled.div`
  flex-shrink: 0;
  width: 100px;
  height: 80px;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
