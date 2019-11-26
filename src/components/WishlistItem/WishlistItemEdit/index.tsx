import React, { FC, ChangeEvent } from "react";
import { observer } from "mobx-react";

import { TWishListItem } from "../../../models/WishList";
import { Wrapper, Thing, Image, Price } from "./styled";

const WishlistItemEdit: FC<{ item: TWishListItem }> = ({ item }) => {
  const onPriceInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const price = parseFloat(e.target.value);
    if (!isNaN(price)) {
      item.changePrice(price);
    }
  };

  const onTextInputChange = (handler: (value: string) => void) => (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;
    handler(value);
  };

  return (
    <Wrapper>
      <Thing>
        Thing
        <input
          type="text"
          value={item.name}
          onChange={onTextInputChange(item.changeName)}
        />
      </Thing>
      <Price>
        Price
        <input type="number" value={item.price} onChange={onPriceInputChange} />
      </Price>
      <Image>
        Image
        <input
          type="text"
          value={item.image}
          onChange={onTextInputChange(item.changeImage)}
        />
      </Image>
    </Wrapper>
  );
};

export default observer(WishlistItemEdit);
