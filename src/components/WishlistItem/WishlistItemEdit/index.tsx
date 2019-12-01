import React, { useState, FC, ChangeEvent, ReactNode } from "react";
import { observer } from "mobx-react";

import { TWishlistItem } from "../../../models/Wishlist";
import { Wrapper, Name, Image, Price } from "./styled";

const WishlistItemEdit: FC<{ item: TWishlistItem; controls: ReactNode }> = ({
  item,
  controls
}) => {
  const [priceInputIsEmpty, setPriceInputIsEmpty] = useState(false);

  const onPriceInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const price = parseFloat(e.target.value);

    if (isNaN(price)) {
      setPriceInputIsEmpty(true);
    } else {
      setPriceInputIsEmpty(false);
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
    <>
      <Wrapper>
        <Name>
          Name
          <input
            type="text"
            value={item.name}
            onChange={onTextInputChange(item.changeName)}
          />
        </Name>
        <Price>
          Price
          <input
            type="number"
            value={priceInputIsEmpty ? "" : item.price}
            onChange={onPriceInputChange}
          />
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
      {controls}
    </>
  );
};

export default observer(WishlistItemEdit);
