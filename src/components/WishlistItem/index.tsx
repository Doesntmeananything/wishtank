import React, { FC, useState, useMemo } from "react";
import { action } from "mobx";
import { observer } from "mobx-react";
import { clone, applySnapshot, getSnapshot } from "mobx-state-tree";

import { TWishListItem } from "../../models/WishList";
import WishlistItemView from "./WishlistItemView";
import WishlistItemEdit from "./WishlistItemEdit";
import { Buttons } from "./styled";

const WishlistItem: FC<{ item: TWishListItem }> = ({ item }) => {
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
            <button onClick={saveEdit}>{"✔"}</button>
            <button onClick={cancelEdit}>{"✘"}</button>
          </>
        ) : (
          <>
            <button onClick={toggleEdit}>{"✎"}</button>
            <button onClick={remove}>{"⌫"}</button>
          </>
        )}
      </Buttons>
    </>
  );
};

export default observer(WishlistItem);
