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
  img {
    display: block;
    height: 80px;
    width: 100px;
    object-fit: cover;
  }
`;
