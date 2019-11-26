import React, { FC } from "react";
import { observer } from "mobx-react";

import { TWishList } from "../../models/WishList";
import WishlistItem from "../WishlistItem";
import { List, Item } from "./styled";

const Wishlist: FC<{ wishlist: TWishList }> = ({ wishlist }) => {
  return (
    <div>
      <List>
        {wishlist.items.map((item, idx) => (
          <Item>
            <WishlistItem item={item} key={idx} />
          </Item>
        ))}
      </List>
      Total: ${wishlist.totalPrice}
    </div>
  );
};

export default observer(Wishlist);
