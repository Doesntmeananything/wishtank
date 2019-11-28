import React, { FC, useState, useCallback } from "react";

import { WishlistItem, TWishlist } from "../../models/Wishlist/Wishlist";
import WishlistItemEdit from "../WishlistItem/WishlistItemEdit";
import { Button } from "../common";

const generateNewItem = () =>
  WishlistItem.create({
    name: "",
    price: 0
  });

const WishlistItemEntry: FC<{ wishlist: TWishlist }> = ({ wishlist }) => {
  const [newItem, setNewItem] = useState(generateNewItem());

  const onAdd = useCallback(() => {
    wishlist.add(newItem);
    setNewItem(generateNewItem());
  }, [wishlist, newItem]);

  return (
    <div>
      <WishlistItemEdit item={newItem} />
      <Button
        css={`
          font-size: 2em;
        `}
        onClick={onAdd}
      >
        ＋
      </Button>
    </div>
  );
};

export default WishlistItemEntry;
