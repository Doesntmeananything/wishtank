import { getSnapshot, onSnapshot, onPatch } from "mobx-state-tree";
import { reaction } from "mobx";
import { WishListItem, WishList } from "./WishList";

it("should create an instance of a model", () => {
  const item = WishListItem.create({
    name: "Chronicles of Narnia",
    price: 28.73
  });

  expect(item.price).toBe(28.73);
  expect(item.image).toBe("");

  item.changeName("Narnia");
  expect(item.name).toBe("Narnia");
});

it("should create a wishlist", () => {
  const list = WishList.create({
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
  const list = WishList.create();

  const states = [];
  onSnapshot(list, snapshot => states.push(snapshot));

  const patches = [];
  onPatch(list, patch => patches.push(patch));

  list.add({
    name: "Chesterton",
    price: 15.55
  });

  expect(list.items.length).toBe(1);
  expect(list.items[0].name).toBe("Chesterton");

  list.items[0].changeName("Book of K. G. Chesterton");

  expect(list.items[0].name).toBe("Book of K. G. Chesterton");

  // expect(getSnapshot(list)).toEqual({
  //   items: [
  //     {
  //       name: "Book of K. G. Chesterton",
  //       price: 15.55,
  //       image: ""
  //     }
  //   ]
  // });
  expect(getSnapshot(list)).toMatchSnapshot();

  expect(states).toMatchSnapshot();
  expect(patches).toMatchSnapshot();
});

it("should calculate total price", () => {
  const list = WishList.create({
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
  reaction(() => list.totalPrice, () => changed++);

  expect(changed).toBe(0);
  list.items[0].changeName("Test");
  expect(changed).toBe(0);
  list.items[0].changePrice(0);
  expect(changed).toBe(1);
});
