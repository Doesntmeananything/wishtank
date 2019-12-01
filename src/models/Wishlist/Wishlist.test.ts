import {
  getSnapshot,
  onSnapshot,
  onPatch,
  cast,
  SnapshotOut,
  IJsonPatch
} from "mobx-state-tree";
import { reaction } from "mobx";
import { WishlistItem, Wishlist, TWishlist } from ".";

it("should create an instance of a model", () => {
  const item = WishlistItem.create({
    name: "Chronicles of Narnia",
    price: 28.73
  });

  expect(item.price).toBe(28.73);
  expect(item.image).toBe("");

  item.changeName("Narnia");
  expect(item.name).toBe("Narnia");
});

it("should create a wishlist", () => {
  const list = Wishlist.create({
    items: [
      {
        name: "Chronicles of Narnia",
        price: 28.73
      },
      {
        name: "Chronicles of Narnia",
        price: 28.73
      }
    ]
  });

  expect(list.items.length).toBe(2);
  expect(list.items[0].price).toBe(28.73);
});

it("should add new items", () => {
  const list = Wishlist.create();

  const states: SnapshotOut<TWishlist>[] = [];
  onSnapshot(list, snapshot => states.push(snapshot));

  const patches: IJsonPatch[] = [];
  onPatch(list, patch => patches.push(patch));

  list.add(
    cast({
      name: "Chesterton",
      price: 15.55,
      id: "chesterton-book"
    })
  );

  expect(list.items.length).toBe(1);
  expect(list.items[0].name).toBe("Chesterton");

  list.items[0].changeName("Book of K. G. Chesterton");

  expect(list.items[0].name).toBe("Book of K. G. Chesterton");
  expect(getSnapshot(list)).toMatchSnapshot();
  expect(states).toMatchSnapshot();
  expect(patches).toMatchSnapshot();
});

it("should calculate total price", () => {
  const list = Wishlist.create({
    items: [
      {
        name: "Chronicles of Narnia",
        price: 28.73
      },
      {
        name: "Machine Gun Preacher",
        price: 1
      }
    ]
  });

  expect(list.totalPrice).toBe(29.73);

  let changed = 0;
  reaction(
    () => list.totalPrice,
    () => changed++
  );

  expect(changed).toBe(0);
  list.items[0].changeName("Test");
  expect(changed).toBe(0);
  list.items[0].changePrice(0);
  expect(changed).toBe(1);
});

it("should remove items", () => {
  const list = Wishlist.create({
    items: [
      {
        name: "Chronicles of Narnia",
        price: 28.73
      }
    ]
  });

  list.remove(list.items[0]);

  expect(list.items.length).toBe(0);
});
