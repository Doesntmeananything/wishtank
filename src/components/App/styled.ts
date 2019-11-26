import styled from "styled-components/macro";

export const Wrapper = styled.div`
  padding: 8px;
  text-align: center;
`;

export const Header = styled.header`
  display: flex;
  margin: 20px 0 20px 0;
  height: 150px;

  h1 {
    font-size: 3em;
    color: darkred;
    text-shadow: 2px 3px 1px white;
    text-decoration: underline;
    line-height: 150px;
    margin: 0 0 0 12px;
  }
`;

export const Logo = styled.div`
  height: 0;
  width: 100px;
  padding: 0;
  padding-bottom: 150px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    position: absolute;
    top: 0;
    left: 0;
  }
`;
