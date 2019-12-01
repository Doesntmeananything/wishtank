import React, { FC } from "react";
import { observer } from "mobx-react";

import { TWishlist } from "../../models/Wishlist";
import WishlistItem from "../WishlistItem";
import { List, Item, Total } from "./styled";
import WishlistItemEntry from "../WishlistItemEntry";

const Wishlist: FC<{ wishlist: TWishlist }> = ({ wishlist }) => {
  return (
    <div>
      <List>
        {wishlist.items.map((item, idx) => (
          <Item key={idx}>
            <WishlistItem item={item} />
          </Item>
        ))}
      </List>
      <Total>Total: ${wishlist.totalPrice}</Total>
      <WishlistItemEntry wishlist={wishlist} />
    </div>
  );
};

export default observer(Wishlist);
