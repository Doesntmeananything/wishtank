import React, { FC, useState, useCallback } from "react";
import { Plus } from "react-feather";

import { WishlistItem, TWishlist } from "../../models/Wishlist";
import WishlistItemEdit from "../WishlistItem/WishlistItemEdit";
import { Button } from "../common";

const createNewItem = () =>
  WishlistItem.create({
    name: "",
    price: 0
  });

const WishlistItemEntry: FC<{ wishlist: TWishlist }> = ({ wishlist }) => {
  const [newItem, setNewItem] = useState(createNewItem());

  const onAdd = useCallback(() => {
    wishlist.add(newItem);
    setNewItem(createNewItem());
  }, [wishlist, newItem]);

  return (
    <WishlistItemEdit
      item={newItem}
      controls={
        <Button onClick={onAdd}>
          <Plus />
        </Button>
      }
    />
  );
};

export default WishlistItemEntry;
