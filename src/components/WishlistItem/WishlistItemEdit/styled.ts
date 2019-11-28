import styled from "styled-components/macro";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 12px;
  }

  input {
    width: 100%;
    padding: 5px 4px;
    border: 1px solid #ccc;
    background-color: white;
    color: #964747;
  }

  input:focus {
    border-color: #964747;
  }
`;

export const Name = styled.label`
  width: calc(70% - 8px);
  margin-right: 8px;
`;

export const Image = styled.label`
  width: 100%;
  margin: 4px 0;
`;

export const Price = styled.label`
  width: 30%;
`;
