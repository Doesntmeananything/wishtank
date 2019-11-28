import React, { FC } from "react";

import { TWishlistItem } from "../../../models/Wishlist/Wishlist";
import { Data, Image } from "./styled";

const WishlistItemView: FC<{ item: TWishlistItem }> = ({ item }) => {
  return (
    <>
      <Image>{item.image && <img src={item.image} />}</Image>
      <Data>
        <h3>{item.name}</h3>
        <span>${item.price.toFixed(2)}</span>
      </Data>
    </>
  );
};

export default WishlistItemView;
