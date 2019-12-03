/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"
import { itemModel, itemModelType } from "./itemModel"
import { itemModelSelector } from "./itemModel.base"
import { wishlistModel, wishlistModelType } from "./wishlistModel"
import { wishlistModelSelector } from "./wishlistModel.base"


/**
 * wishlist_itemBase
 * auto generated base class for the model wishlist_itemModel.
 *
 * columns and relationships of "wishlist_item"
 */
export const wishlist_itemModelBase = ModelBase
  .named('wishlist_item')
  .props({
    __typename: types.optional(types.literal("wishlist_item"), "wishlist_item"),
    /** An object relationship */
    item: types.union(types.undefined, types.late((): any => itemModel)),
    item_id: types.union(types.undefined, types.integer),
    reserved: types.union(types.undefined, types.boolean),
    /** An object relationship */
    wishlist: types.union(types.undefined, types.late((): any => wishlistModel)),
    wishlist_id: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class wishlist_itemModelSelector extends QueryBuilder {
  get item_id() { return this.__attr(`item_id`) }
  get reserved() { return this.__attr(`reserved`) }
  get wishlist_id() { return this.__attr(`wishlist_id`) }
  item(builder?: string | itemModelSelector | ((selector: itemModelSelector) => itemModelSelector)) { return this.__child(`item`, itemModelSelector, builder) }
  wishlist(builder?: string | wishlistModelSelector | ((selector: wishlistModelSelector) => wishlistModelSelector)) { return this.__child(`wishlist`, wishlistModelSelector, builder) }
}
export function selectFromwishlist_item() {
  return new wishlist_itemModelSelector()
}

export const wishlist_itemModelPrimitives = selectFromwishlist_item().item_id.reserved.wishlist_id
