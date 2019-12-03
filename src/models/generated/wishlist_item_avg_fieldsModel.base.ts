/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * wishlist_item_avg_fieldsBase
 * auto generated base class for the model wishlist_item_avg_fieldsModel.
 *
 * aggregate avg on columns
 */
export const wishlist_item_avg_fieldsModelBase = ModelBase
  .named('wishlist_item_avg_fields')
  .props({
    __typename: types.optional(types.literal("wishlist_item_avg_fields"), "wishlist_item_avg_fields"),
    item_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class wishlist_item_avg_fieldsModelSelector extends QueryBuilder {
  get item_id() { return this.__attr(`item_id`) }
}
export function selectFromwishlist_item_avg_fields() {
  return new wishlist_item_avg_fieldsModelSelector()
}

export const wishlist_item_avg_fieldsModelPrimitives = selectFromwishlist_item_avg_fields().item_id
