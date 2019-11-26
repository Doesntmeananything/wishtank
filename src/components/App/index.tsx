import React, { FC } from "react";

import { TWishList } from "../../models/WishList";
import Wishlist from "../Wishlist";
import GlobalStyle from "../../globalStyle";
import { Wrapper, Header, Logo } from "./styled";
import logo from "../../assets/santa-claus.png";

const App: FC<{ wishlist: TWishList }> = ({ wishlist }) => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header>
          <Logo>
            <img src={logo} alt="logo" />
          </Logo>
          <h1> Wishlist </h1>
        </Header>
        <Wishlist wishlist={wishlist} />
      </Wrapper>
    </>
  );
};

export default App;
