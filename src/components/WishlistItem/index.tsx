import React, { FC, useState, useMemo } from "react";
import { action } from "mobx";
import { observer } from "mobx-react";
import { clone, applySnapshot, getSnapshot } from "mobx-state-tree";

import { TWishlistItem } from "../../models/Wishlist/Wishlist";
import WishlistItemView from "./WishlistItemView";
import WishlistItemEdit from "./WishlistItemEdit";
import { Buttons } from "./styled";
import { Button } from "../common";

const WishlistItem: FC<{ item: TWishlistItem }> = ({ item }) => {
  const [isEditing, setIsEditing] = useState(false);

  const transientItem = useMemo(() => clone(item), [item]);

  const toggleEdit = () => setIsEditing(isEditing => !isEditing);

  const cancelEdit = action(() => {
    applySnapshot(transientItem, getSnapshot(item));
    toggleEdit();
  });

  const saveEdit = action(function transientItemSnapshot() {
    applySnapshot(item, getSnapshot(transientItem));
    toggleEdit();
  });

  const remove = action(function itemRemove() {
    item.remove();
  });

  return (
    <>
      {isEditing ? (
        <WishlistItemEdit item={transientItem} />
      ) : (
        <WishlistItemView item={item} />
      )}
      <Buttons>
        {isEditing ? (
          <>
            <Button onClick={saveEdit}>{"✔"}</Button>
            <Button onClick={cancelEdit}>{"✘"}</Button>
          </>
        ) : (
          <>
            <Button onClick={toggleEdit}>{"✎"}</Button>
            <Button onClick={remove}>{"⌫"}</Button>
          </>
        )}
      </Buttons>
    </>
  );
};

export default observer(WishlistItem);
