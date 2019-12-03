import React, { FC, ReactNode } from "react";

import { TWishlistItem } from "../../../models/Wishlist";
import { Data, Image } from "./styled";

const WishlistItemView: FC<{ item: TWishlistItem; controls: ReactNode }> = ({
  item,
  controls
}) => {
  return (
    <>
      <Image>{item.image && <img src={item.image} alt={item.name} />}</Image>
      <Data>
        <h3>{item.name}</h3>
        <span>${item.price.toFixed(2)}</span>
      </Data>
      {controls}
    </>
  );
};

export default WishlistItemView;
