import { types, Instance, getParent, cast } from "mobx-state-tree";

export const WishListItem = types
  .model({
    id: types.identifier,
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
      getParent<TWishList>(self, 2).remove(cast(self));
    }
  }));

export type TWishListItem = Instance<typeof WishListItem>;

export const WishList = types
  .model({
    items: types.array(WishListItem)
  })
  .actions(self => ({
    add(item: TWishListItem) {
      self.items.push(item);
    },
    remove(item: TWishListItem) {
      self.items.splice(self.items.indexOf(item), 1);
    }
  }))
  .views(self => ({
    get totalPrice() {
      return self.items.reduce((sum, entry) => sum + entry.price, 0);
    }
  }));

export type TWishList = Instance<typeof WishList>;
