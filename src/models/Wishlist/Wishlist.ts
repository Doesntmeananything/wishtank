import { types, Instance, getParent, cast, destroy } from "mobx-state-tree";
import shortid from "shortid";

export const WishlistItem = types
  .model({
    id: types.optional(types.identifier, shortid()),
    name: types.string,
    price: types.number,
    image: ""
  })
  .actions(self => ({
    changeName(newName: string) {
      self.name = newName;
    },
    changeImage(newImage: string) {
      self.image = newImage;
    },
    changePrice(newPrice: number) {
      self.price = newPrice;
    },
    remove() {
      getParent<TWishlist>(self, 2).remove(cast(self));
    }
  }));

export type TWishlistItem = Instance<typeof WishlistItem>;

export const Wishlist = types
  .model({
    items: types.array(WishlistItem)
  })
  .actions(self => ({
    add(item: TWishlistItem) {
      self.items.push(item);
    },
    remove(item: TWishlistItem) {
      destroy(item);
    }
  }))
  .views(self => ({
    get totalPrice() {
      return self.items.reduce((sum, entry) => sum + entry.price, 0);
    }
  }));

export type TWishlist = Instance<typeof Wishlist>;
