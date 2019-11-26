import styled from "styled-components/macro";

export const List = styled.ul`
  max-width: 500px;
  margin: auto;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  border-left: 5px solid #964747;
  margin-bottom: 10px;
  background-color: #ffffff;
  box-shadow: 2px 2px 4px #ccc;
  border-radius: 4px;
  list-style: none;
  padding: 10px;
  min-height: 100px;
  text-align: right;
`;
