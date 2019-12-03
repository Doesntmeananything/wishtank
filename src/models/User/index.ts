import { types, Instance, IAnyModelType } from "mobx-state-tree";
import { Wishlist } from "../Wishlist";
import shortid from "shortid";

export const User = types.model({
  id: types.optional(types.identifier, shortid()),
  name: types.string,
  gender: types.enumeration(["M", "F"]),
  wishlist: types.optional(Wishlist, { items: [] }),
  friends: types.array(types.reference(types.late((): IAnyModelType => User)))
});

export type TUser = Instance<typeof User>;
