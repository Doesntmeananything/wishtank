import React, { FC, useState, useMemo } from "react";
import { action } from "mobx";
import { observer } from "mobx-react";
import { clone, applySnapshot, getSnapshot } from "mobx-state-tree";
import { Edit2, Trash2, Check, CornerUpLeft } from "react-feather";

import { TWishlistItem } from "../../models/Wishlist";
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
        <WishlistItemEdit
          item={transientItem}
          controls={
            <Buttons>
              <Button onClick={saveEdit}>
                <Check />
              </Button>
              <Button onClick={cancelEdit}>
                <CornerUpLeft />
              </Button>
            </Buttons>
          }
        />
      ) : (
        <WishlistItemView
          item={item}
          controls={
            <Buttons>
              <Button onClick={toggleEdit}>
                <Edit2 />
              </Button>
              <Button onClick={remove}>
                <Trash2 />
              </Button>
            </Buttons>
          }
        />
      )}
    </>
  );
};

export default observer(WishlistItem);
